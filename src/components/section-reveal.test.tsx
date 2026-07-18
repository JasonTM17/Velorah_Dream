import { act, render, waitFor } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

import { SectionReveal } from "@/components/section-reveal"

afterEach(() => {
  vi.unstubAllGlobals()
})

describe("SectionReveal", () => {
  it("applies an explicit reveal delay without discarding caller styles", () => {
    const { container } = render(
      <SectionReveal delay={120} style={{ color: "white" }}>
        Sequenced content
      </SectionReveal>,
    )

    const element = container.firstElementChild as HTMLElement

    expect(element.style.getPropertyValue("--reveal-delay")).toBe("120ms")
    expect(element).toHaveStyle({ color: "rgb(255, 255, 255)" })
  })

  it("reveals content immediately when IntersectionObserver is unavailable", async () => {
    const { container } = render(<SectionReveal>Visible content</SectionReveal>)

    await waitFor(() => {
      expect(container.firstElementChild).toHaveAttribute(
        "data-visible",
        "true",
      )
    })
  })

  it("reveals observed content once and disconnects on unmount", () => {
    let observerCallback: IntersectionObserverCallback | undefined
    const observe = vi.fn()
    const unobserve = vi.fn()
    const disconnect = vi.fn()

    class FakeIntersectionObserver {
      constructor(callback: IntersectionObserverCallback) {
        observerCallback = callback
      }

      observe = observe
      unobserve = unobserve
      disconnect = disconnect
    }

    vi.stubGlobal("IntersectionObserver", FakeIntersectionObserver)

    const { container, unmount } = render(
      <SectionReveal>Observed content</SectionReveal>,
    )
    const element = container.firstElementChild

    expect(observe).toHaveBeenCalledWith(element)
    expect(element).toHaveAttribute("data-visible", "false")

    act(() => {
      observerCallback?.(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
    })
    expect(element).toHaveAttribute("data-visible", "false")

    act(() => {
      observerCallback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
    })
    expect(element).toHaveAttribute("data-visible", "true")
    expect(unobserve).toHaveBeenCalledWith(element)

    unmount()
    expect(disconnect).toHaveBeenCalledOnce()
  })
})
