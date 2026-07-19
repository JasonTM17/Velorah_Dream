import { render, screen, within } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { App } from "@/app"

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
    expect(video).toHaveAttribute(
      "poster",
      "/velorah-stills/velorah-still-01-1440.webp",
    )
    expect(videos[1]).toHaveAttribute("preload", "metadata")
    expect(videos[1]).toHaveAttribute(
      "poster",
      "/velorah-stills/velorah-still-01-1440.webp",
    )

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
    const aboutSection = screen.getByRole("region", {
      name: "Built for minds that refuse the obvious.",
    })
    const journalSection = screen.getByRole("region", {
      name: "Notes from the edge of attention.",
    })

    expect(aboutSection).toBeInTheDocument()
    expect(journalSection).toBeInTheDocument()
    expect(
      screen.getByRole("region", {
        name: "Bring us the question that won't leave you alone.",
      }),
    ).toBeInTheDocument()

    expect(document.querySelectorAll("#journal article")).toHaveLength(3)

    const workingModel = within(aboutSection).getByRole("heading", {
      level: 3,
      name: "Working model",
    })
    expect(workingModel.closest("section")?.querySelector("dl")).not.toBeNull()
    expect(within(aboutSection).getByText("Direct collaboration")).toBeInTheDocument()
    expect(within(aboutSection).getByText("One connected practice")).toBeInTheDocument()
    expect(within(aboutSection).getByText("Built to continue")).toBeInTheDocument()

    const method = within(aboutSection).getByRole("list", {
      name: "How we work",
    })
    expect(method.tagName).toBe("OL")
    expect(within(method).getAllByRole("listitem")).toHaveLength(4)

    const featuredBody = within(journalSection).getByText(/^Space is active\./)
    expect(featuredBody).toBeInTheDocument()
    expect(featuredBody.closest("details")).toBeNull()

    const footerNavigation = screen.getByRole("navigation", {
      name: "Footer navigation",
    })
    expect(within(footerNavigation).getAllByRole("link")).toHaveLength(5)
    expect(screen.getByRole("contentinfo")).toHaveTextContent(
      "© 2026 Velorah",
    )
  })

  it("renders dimensioned imagery and named native journal disclosures", () => {
    render(<App />)

    const filmImages = screen.getAllByRole("img")

    expect(filmImages).toHaveLength(7)
    for (const image of filmImages) {
      expect(image).toHaveAttribute("loading", "lazy")
      expect(image).toHaveAttribute("width", "1440")
      expect(image).toHaveAttribute("height", "806")
      expect(image.getAttribute("srcset")).toContain("720.webp 720w")
      expect(image.getAttribute("srcset")).toContain("1440.webp 1440w")
    }

    const journalSection = screen.getByRole("region", {
      name: "Notes from the edge of attention.",
    })
    const disclosures = Array.from(
      journalSection.querySelectorAll("details.journal-note > summary"),
    )

    expect(document.querySelectorAll("details.journal-note")).toHaveLength(2)
    expect(disclosures).toHaveLength(2)
    expect(disclosures[0]).toHaveTextContent(
      "Read note: Designing for a quieter kind of focus",
    )
    expect(disclosures[1]).toHaveTextContent(
      "Read note: When a system begins to feel alive",
    )
    for (const summary of disclosures) {
      expect(summary.tagName).toBe("SUMMARY")
      expect(summary).not.toHaveAttribute("aria-label")
    }
  })

  it("provides working project brief actions in contact and footer", () => {
    render(<App />)

    const briefLinks = screen.getAllByRole("link", {
      name: /project brief/i,
    })

    expect(briefLinks).toHaveLength(2)
    for (const link of briefLinks) {
      expect(link).toHaveAttribute(
        "href",
        "https://github.com/JasonTM17/Velorah_Dream/issues/new?title=Project%20inquiry%3A%20",
      )
      expect(link).toHaveAttribute("target", "_blank")
      expect(link).toHaveAttribute("rel", "noreferrer")
    }
  })

  it("provides a focusable main target for keyboard users", () => {
    render(<App />)

    expect(
      screen.getByRole("link", { name: "Skip to main content" }),
    ).toHaveAttribute("href", "#main-content")
    expect(screen.getByRole("main")).toHaveAttribute("tabindex", "-1")
  })

})
