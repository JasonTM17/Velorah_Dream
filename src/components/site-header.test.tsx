import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

import { SiteHeader } from "@/components/site-header"

afterEach(() => {
  vi.unstubAllGlobals()
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
    act(() => mediaListeners[0]?.({ matches: true } as MediaQueryListEvent))
    expect(
      screen.queryByRole("navigation", { name: "Mobile navigation" }),
    ).not.toBeInTheDocument()
  })
})
