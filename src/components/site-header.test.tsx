import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

import { SiteHeader } from "@/components/site-header"

afterEach(() => {
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})

function renderHeaderWithSections() {
  return render(
    <>
      <SiteHeader />
      <main>
        <section id="home">Home</section>
        <section id="studio">Studio</section>
        <section id="about">About</section>
        <section id="journal">Journal</section>
        <section id="reach-us">Reach Us</section>
      </main>
    </>,
  )
}

describe("SiteHeader", () => {
  it("tracks the current section and adds the scrolled surface", () => {
    const callbacks: IntersectionObserverCallback[] = []

    class FakeIntersectionObserver {
      constructor(callback: IntersectionObserverCallback) {
        callbacks.push(callback)
      }

      observe = vi.fn()
      disconnect = vi.fn()
    }

    vi.stubGlobal("IntersectionObserver", FakeIntersectionObserver)
    renderHeaderWithSections()

    const primaryNavigation = screen.getByRole("navigation", {
      name: "Primary navigation",
    })
    expect(
      within(primaryNavigation).getByRole("link", { name: "Home" }),
    ).toHaveAttribute("aria-current", "location")

    const studio = document.getElementById("studio")
    expect(studio).not.toBeNull()

    act(() => {
      callbacks[0]?.(
        [
          {
            isIntersecting: true,
            target: studio,
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      )
      callbacks[1]?.(
        [
          {
            intersectionRatio: 0.2,
          } as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      )
    })

    expect(
      within(primaryNavigation).getByRole("link", { name: "Studio" }),
    ).toHaveAttribute("aria-current", "location")
    expect(screen.getByRole("banner")).toHaveAttribute(
      "data-surface",
      "solid",
    )
  })

  it("tracks the last crossed section after a fast scroll", () => {
    class FakeIntersectionObserver {
      constructor() {}

      observe = vi.fn()
      disconnect = vi.fn()
    }

    vi.stubGlobal("IntersectionObserver", FakeIntersectionObserver)
    vi.stubGlobal(
      "requestAnimationFrame",
      (callback: FrameRequestCallback) => {
        callback(1)
        return 1
      },
    )
    vi.stubGlobal("cancelAnimationFrame", vi.fn())
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(
      function (this: HTMLElement) {
        const topBySection: Record<string, number> = {
          home: -4200,
          studio: -3200,
          about: -2200,
          journal: -1200,
          "reach-us": 0,
        }
        const top = topBySection[this.id] ?? 0

        return {
          top,
          bottom: top + 800,
          left: 0,
          right: 0,
          width: 800,
          height: 800,
          x: 0,
          y: top,
          toJSON: () => ({}),
        } as DOMRect
      },
    )

    renderHeaderWithSections()

    act(() => window.dispatchEvent(new Event("scroll")))

    const primaryNavigation = screen.getByRole("navigation", {
      name: "Primary navigation",
    })
    expect(
      within(primaryNavigation).getByRole("link", { name: "Reach Us" }),
    ).toHaveAttribute("aria-current", "location")
  })

  it("opens the mobile disclosure, manages focus, and closes on Escape", async () => {
    render(<SiteHeader />)

    const menuButton = screen.getByRole("button", {
      name: "Open navigation menu",
    })
    fireEvent.click(menuButton)

    const mobileNavigation = screen.getByRole("navigation", {
      name: "Mobile navigation",
    })
    const firstLink = within(mobileNavigation).getByRole("link", {
      name: "Home",
    })

    await waitFor(() => expect(firstLink).toHaveFocus())
    expect(menuButton).toHaveAttribute("aria-expanded", "true")

    fireEvent.keyDown(window, { key: "Escape" })

    expect(
      screen.queryByRole("navigation", { name: "Mobile navigation" }),
    ).not.toBeInTheDocument()
    expect(menuButton).toHaveFocus()
  })

  it("closes the mobile disclosure after selection and desktop resize", () => {
    const mediaListeners: Array<(event: MediaQueryListEvent) => void> = []
    vi.stubGlobal(
      "matchMedia",
      vi.fn().mockReturnValue({
        matches: false,
        media: "(min-width: 768px)",
        addEventListener: (
          _event: "change",
          listener: (event: MediaQueryListEvent) => void,
        ) => mediaListeners.push(listener),
        removeEventListener: vi.fn(),
      }),
    )

    render(<SiteHeader />)

    fireEvent.click(
      screen.getByRole("button", { name: "Open navigation menu" }),
    )
    fireEvent.click(
      within(
        screen.getByRole("navigation", { name: "Mobile navigation" }),
      ).getByRole("link", { name: "Studio" }),
    )
    expect(
      screen.queryByRole("navigation", { name: "Mobile navigation" }),
    ).not.toBeInTheDocument()

    fireEvent.click(
      screen.getByRole("button", { name: "Open navigation menu" }),
    )
    fireEvent.click(screen.getByRole("link", { name: "Velorah home" }))
    expect(
      screen.queryByRole("navigation", { name: "Mobile navigation" }),
    ).not.toBeInTheDocument()

    fireEvent.click(
      screen.getByRole("button", { name: "Open navigation menu" }),
    )
    fireEvent.click(screen.getByRole("link", { name: "Begin Journey" }))
    expect(
      screen.queryByRole("navigation", { name: "Mobile navigation" }),
    ).not.toBeInTheDocument()

    fireEvent.click(
      screen.getByRole("button", { name: "Open navigation menu" }),
    )
    act(() => mediaListeners[0]?.({ matches: true } as MediaQueryListEvent))
    expect(
      screen.queryByRole("navigation", { name: "Mobile navigation" }),
    ).not.toBeInTheDocument()
  })
})
