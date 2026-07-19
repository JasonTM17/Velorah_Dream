import { useEffect, useState } from "react"

import {
  navigationItems,
  type NavigationId,
} from "@/content/site-navigation"

const DEFAULT_SECTION: NavigationId = "home"
const HERO_SURFACE_THRESHOLD = 0.55
const SECTION_ANCHOR_OFFSET = 96
const SECTION_PROBE_OFFSET = SECTION_ANCHOR_OFFSET + 1

function isNavigationId(id: string): id is NavigationId {
  return navigationItems.some((item) => item.id === id)
}

export function usePageNavigation() {
  const [activeSection, setActiveSection] =
    useState<NavigationId>(DEFAULT_SECTION)
  const [hasLeftHero, setHasLeftHero] = useState(false)

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return
    }

    const sections = navigationItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        let currentEntry: IntersectionObserverEntry | undefined

        for (let index = entries.length - 1; index >= 0; index -= 1) {
          const entry = entries[index]

          if (entry?.isIntersecting && isNavigationId(entry.target.id)) {
            currentEntry = entry
            break
          }
        }

        if (currentEntry && isNavigationId(currentEntry.target.id)) {
          setActiveSection(currentEntry.target.id)
        }
      },
      {
        rootMargin: `-${SECTION_ANCHOR_OFFSET}px 0px -65% 0px`,
        threshold: 0,
      },
    )

    sections.forEach((section) => sectionObserver.observe(section))

    let scrollFrame: number | undefined
    const updateActiveFromScroll = () => {
      scrollFrame = undefined
      const probeLine = Math.max(
        SECTION_PROBE_OFFSET,
        window.innerHeight * 0.18,
      )
      let currentSection = sections[0]

      for (const section of sections) {
        if (section.getBoundingClientRect().top > probeLine) {
          break
        }

        currentSection = section
      }

      if (currentSection && isNavigationId(currentSection.id)) {
        setActiveSection(currentSection.id)
      }
    }
    const handleScroll = () => {
      if (scrollFrame !== undefined) {
        return
      }

      scrollFrame = window.requestAnimationFrame(updateActiveFromScroll)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    const hero = document.getElementById("home")
    const heroObserver = hero
      ? new IntersectionObserver(
          ([entry]) => {
            if (entry) {
              setHasLeftHero(
                entry.intersectionRatio < HERO_SURFACE_THRESHOLD,
              )
            }
          },
          { threshold: [0, HERO_SURFACE_THRESHOLD, 1] },
        )
      : null

    if (hero && heroObserver) {
      heroObserver.observe(hero)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollFrame !== undefined) {
        window.cancelAnimationFrame(scrollFrame)
      }
      sectionObserver.disconnect()
      heroObserver?.disconnect()
    }
  }, [])

  return { activeSection, hasLeftHero }
}
