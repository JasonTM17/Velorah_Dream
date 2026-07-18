import { act, render } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

import { ViewportVideo } from "@/components/viewport-video"

afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

describe("ViewportVideo", () => {
  it("plays in view, pauses out of view, and disconnects", async () => {
    let observerCallback: IntersectionObserverCallback | undefined
    const observe = vi.fn()
    const disconnect = vi.fn()
    const play = vi
      .spyOn(HTMLMediaElement.prototype, "play")
      .mockResolvedValue(undefined)
    const pause = vi
      .spyOn(HTMLMediaElement.prototype, "pause")
      .mockImplementation(() => undefined)

    class FakeIntersectionObserver {
      constructor(callback: IntersectionObserverCallback) {
        observerCallback = callback
      }

      observe = observe
      disconnect = disconnect
    }

    vi.stubGlobal("IntersectionObserver", FakeIntersectionObserver)

    const { container, unmount } = render(<ViewportVideo />)
    const video = container.querySelector("video")

    expect(observe).toHaveBeenCalledWith(video)

    await act(async () => {
      observerCallback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
      await Promise.resolve()
    })
    expect(play).toHaveBeenCalledOnce()

    act(() => {
      observerCallback?.(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
    })
    expect(pause).toHaveBeenCalledOnce()

    unmount()
    expect(disconnect).toHaveBeenCalledOnce()
  })

  it("contains autoplay rejection without changing the media contract", async () => {
    let observerCallback: IntersectionObserverCallback | undefined
    vi.spyOn(HTMLMediaElement.prototype, "play").mockRejectedValue(
      new DOMException("Playback unavailable", "NotAllowedError"),
    )

    class FakeIntersectionObserver {
      constructor(callback: IntersectionObserverCallback) {
        observerCallback = callback
      }

      observe = vi.fn()
      disconnect = vi.fn()
    }

    vi.stubGlobal("IntersectionObserver", FakeIntersectionObserver)

    const { container } = render(<ViewportVideo preload="metadata" />)

    await act(async () => {
      observerCallback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
      await Promise.resolve()
    })

    const video = container.querySelector("video")
    expect(video).toHaveAttribute("autoplay")
    expect(video).toHaveAttribute("loop")
    expect(video).toHaveAttribute("playsinline")
    expect(video).toHaveAttribute("preload", "metadata")
    expect(video?.muted).toBe(true)
  })
})
