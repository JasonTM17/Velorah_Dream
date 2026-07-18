import { act, render, screen, waitFor, within } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { App } from "@/app"
import { SectionReveal } from "@/components/section-reveal"
import { Button } from "@/components/ui/button"

describe("Velorah page", () => {
  it("renders the supplied brand message and navigation", () => {
    render(<App />)

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Where dreams rise through the silence.",
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/We're designing tools for deep thinkers/i),
    ).toBeInTheDocument()

    const navigation = screen.getByRole("navigation", {
      name: "Primary navigation",
    })
    const navigationLinks = within(navigation).getAllByRole("link")

    expect(navigationLinks).toHaveLength(5)
    expect(navigationLinks.map((link) => link.textContent)).toEqual([
      "Home",
      "Studio",
      "About",
      "Journal",
      "Reach Us",
    ])
    expect(within(navigation).getByRole("link", { name: "Home" })).toHaveAttribute(
      "aria-current",
      "location",
    )

    for (const link of navigationLinks) {
      const href = link.getAttribute("href")

      expect(href).toMatch(/^#.+/)
      expect(document.querySelector(href ?? "missing-target")).not.toBeNull()
    }
  })

  it("configures the background video for silent inline looping playback", () => {
    const { container } = render(<App />)
    const videos = container.querySelectorAll("video")
    const sources = container.querySelectorAll("video source")
    const video = videos[0]

    expect(videos).toHaveLength(2)
    expect(sources).toHaveLength(2)
    expect(video).toHaveAttribute("autoplay")
    expect(video).toHaveAttribute("loop")
    expect(video).toHaveAttribute("playsinline")
    expect(video).toHaveAttribute("aria-hidden", "true")
    expect(video.muted).toBe(true)
    expect(video).toHaveAttribute("preload", "auto")
    expect(videos[1]).toHaveAttribute("preload", "metadata")

    for (const source of sources) {
      expect(source).toHaveAttribute(
        "src",
        "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
      )
      expect(source).toHaveAttribute("type", "video/mp4")
    }
  })

  it("exposes both glass CTAs as keyboard-accessible links", () => {
    render(<App />)

    const callsToAction = screen.getAllByRole("link", {
      name: "Begin Journey",
    })

    expect(callsToAction).toHaveLength(2)
    for (const callToAction of callsToAction) {
      expect(callToAction).toHaveClass("liquid-glass")
    }

    expect(callsToAction[0]).toHaveAttribute("href", "#reach-us")
    expect(callsToAction[1]).toHaveAttribute("href", "#studio")
  })

  it("renders every editorial section and mobile-accessible footer navigation", () => {
    render(<App />)

    expect(
      screen.getByRole("region", { name: "We shape clarity into digital form." }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("region", {
        name: "Built for minds that refuse the obvious.",
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("region", {
        name: "Notes from the edge of attention.",
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("region", {
        name: "Bring us the question that won't leave you alone.",
      }),
    ).toBeInTheDocument()

    expect(document.querySelectorAll("#journal article")).toHaveLength(3)

    const footerNavigation = screen.getByRole("navigation", {
      name: "Footer navigation",
    })
    expect(within(footerNavigation).getAllByRole("link")).toHaveLength(5)
    expect(screen.getByRole("contentinfo")).toHaveTextContent(
      "© 2026 Velorah",
    )
  })

  it("provides working email actions in contact and footer", () => {
    render(<App />)

    expect(
      screen.getByRole("link", { name: "Start a conversation" }),
    ).toHaveAttribute(
      "href",
      "mailto:hello@velorah.com?subject=New%20project%20with%20Velorah",
    )
    expect(
      screen.getByRole("link", { name: "hello@velorah.com" }),
    ).toHaveAttribute("href", "mailto:hello@velorah.com")
  })

  it("provides a focusable main target for keyboard users", () => {
    render(<App />)

    expect(
      screen.getByRole("link", { name: "Skip to main content" }),
    ).toHaveAttribute("href", "#main-content")
    expect(screen.getByRole("main")).toHaveAttribute("tabindex", "-1")
  })

  it("keeps the default shadcn button available for native actions", () => {
    render(<Button type="button">Continue</Button>)

    expect(screen.getByRole("button", { name: "Continue" })).toHaveAttribute(
      "data-slot",
      "button",
    )
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

    try {
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
    } finally {
      vi.unstubAllGlobals()
    }
  })
})
