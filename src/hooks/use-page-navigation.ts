import { useEffect, useState } from "react"

import {
  navigationItems,
  type NavigationId,
} from "@/content/site-navigation"

const DEFAULT_SECTION: NavigationId = "home"
const HERO_SURFACE_THRESHOLD = 0.55

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
        rootMargin: "-18% 0px -70% 0px",
        threshold: 0,
      },
    )

    sections.forEach((section) => sectionObserver.observe(section))

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
      sectionObserver.disconnect()
      heroObserver?.disconnect()
    }
  }, [])

  return { activeSection, hasLeftHero }
}
