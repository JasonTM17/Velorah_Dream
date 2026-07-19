import { renderHook } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

import { useInitialHashAnchor } from "@/hooks/use-initial-hash-anchor"

afterEach(() => {
  window.history.replaceState(null, "", "/")
  document.body.replaceChildren()
  vi.unstubAllGlobals()
})

describe("useInitialHashAnchor", () => {
  it("aligns a direct hash target after the app has mounted", () => {
    const target = document.createElement("section")
    const scrollIntoView = vi.fn()
    target.id = "studio"
    target.scrollIntoView = scrollIntoView
    document.body.append(target)
    window.history.replaceState(null, "", "/#studio")

    vi.stubGlobal(
      "requestAnimationFrame",
      (callback: FrameRequestCallback) => {
        callback(1)
        return 1
      },
    )
    vi.stubGlobal("cancelAnimationFrame", vi.fn())

    renderHook(() => useInitialHashAnchor())

    expect(scrollIntoView).toHaveBeenCalledWith({ block: "start" })
    expect(document.documentElement.style.scrollBehavior).toBe("")
  })

  it("realigns while initial layout changes are settling", () => {
    const target = document.createElement("section")
    const scrollIntoView = vi.fn()
    const disconnect = vi.fn()
    const observe = vi.fn()
    let handleResize: () => void = () => undefined

    target.id = "about"
    target.scrollIntoView = scrollIntoView
    document.body.append(target)
    window.history.replaceState(null, "", "/#about")

    vi.stubGlobal(
      "requestAnimationFrame",
      (callback: FrameRequestCallback) => {
        callback(1)
        return 1
      },
    )
    vi.stubGlobal("cancelAnimationFrame", vi.fn())
    vi.stubGlobal(
      "ResizeObserver",
      class ResizeObserverMock {
        constructor(callback: ResizeObserverCallback) {
          handleResize = () => callback([], this as unknown as ResizeObserver)
        }

        disconnect = disconnect
        observe = observe
        unobserve = vi.fn()
      },
    )

    const { unmount } = renderHook(() => useInitialHashAnchor())

    handleResize()

    expect(observe).toHaveBeenCalledWith(document.body)
    expect(scrollIntoView).toHaveBeenCalledTimes(2)

    unmount()
    expect(disconnect).toHaveBeenCalled()
  })

  it("cancels queued alignment when user intent changes the hash", () => {
    const target = document.createElement("section")
    const scrollIntoView = vi.fn()
    const cancelAnimationFrame = vi.fn()
    let queuedAlignment: FrameRequestCallback | undefined

    target.id = "about"
    target.scrollIntoView = scrollIntoView
    document.body.append(target)
    window.history.replaceState(null, "", "/#about")

    vi.stubGlobal(
      "requestAnimationFrame",
      (callback: FrameRequestCallback) => {
        queuedAlignment = callback
        return 42
      },
    )
    vi.stubGlobal("cancelAnimationFrame", cancelAnimationFrame)

    renderHook(() => useInitialHashAnchor())
    window.dispatchEvent(new HashChangeEvent("hashchange"))
    queuedAlignment?.(1)

    expect(cancelAnimationFrame).toHaveBeenCalledWith(42)
    expect(scrollIntoView).not.toHaveBeenCalled()
  })

  it("does nothing when no hash target exists", () => {
    const requestAnimationFrame = vi.fn()
    vi.stubGlobal("requestAnimationFrame", requestAnimationFrame)

    renderHook(() => useInitialHashAnchor())

    expect(requestAnimationFrame).not.toHaveBeenCalled()
  })
})
