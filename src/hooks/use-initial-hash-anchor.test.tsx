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

  it("does nothing when no hash target exists", () => {
    const requestAnimationFrame = vi.fn()
    vi.stubGlobal("requestAnimationFrame", requestAnimationFrame)

    renderHook(() => useInitialHashAnchor())

    expect(requestAnimationFrame).not.toHaveBeenCalled()
  })
})
