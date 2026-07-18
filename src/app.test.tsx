import { render, screen, within } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { App } from "@/app"
import { Button } from "@/components/ui/button"

describe("Velorah hero", () => {
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
      "page",
    )
  })

  it("configures the background video for silent inline looping playback", () => {
    const { container } = render(<App />)
    const video = container.querySelector("video")
    const source = container.querySelector("video source")

    expect(video).not.toBeNull()
    expect(video).toHaveAttribute("autoplay")
    expect(video).toHaveAttribute("loop")
    expect(video).toHaveAttribute("playsinline")
    expect(video).toHaveAttribute("aria-hidden", "true")
    expect(video?.muted).toBe(true)
    expect(source).toHaveAttribute(
      "src",
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
    )
    expect(source).toHaveAttribute("type", "video/mp4")
  })

  it("exposes both glass CTAs as keyboard-accessible links", () => {
    render(<App />)

    const callsToAction = screen.getAllByRole("link", {
      name: "Begin Journey",
    })

    expect(callsToAction).toHaveLength(2)
    for (const callToAction of callsToAction) {
      expect(callToAction).toHaveClass("liquid-glass")
      expect(callToAction).toHaveAttribute("href")
    }
  })

  it("keeps the default shadcn button available for native actions", () => {
    render(<Button type="button">Continue</Button>)

    expect(screen.getByRole("button", { name: "Continue" })).toHaveAttribute(
      "data-slot",
      "button",
    )
  })
})
