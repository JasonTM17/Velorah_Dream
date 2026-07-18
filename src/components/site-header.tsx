import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { navigationItems } from "@/content/site-navigation"
import { usePageNavigation } from "@/hooks/use-page-navigation"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const { activeSection, hasLeftHero } = usePageNavigation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (isMenuOpen) {
      firstMobileLinkRef.current?.focus()
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isMenuOpen])

  useEffect(() => {
    if (typeof window.matchMedia !== "function") {
      return
    }

    const desktopQuery = window.matchMedia("(min-width: 768px)")
    const closeAtDesktop = ({ matches }: MediaQueryListEvent) => {
      if (matches) {
        setIsMenuOpen(false)
      }
    }

    desktopQuery.addEventListener("change", closeAtDesktop)
    return () => desktopQuery.removeEventListener("change", closeAtDesktop)
  }, [])

  return (
    <header
      data-surface={hasLeftHero ? "solid" : "transparent"}
      className={cn(
        "fixed inset-x-0 top-0 z-20 border-b border-transparent transition-[background-color,border-color,box-shadow] duration-300",
        hasLeftHero &&
          "border-white/10 bg-background/85 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-md",
      )}
    >
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-4 py-5 sm:px-8 sm:py-6">
        <a
          className="shrink-0 text-3xl leading-none tracking-tight text-foreground outline-none transition-opacity duration-200 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
          href="#home"
          aria-label="Velorah home"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          onClick={() => setIsMenuOpen(false)}
        >
          Velorah<sup className="ml-0.5 text-xs">®</sup>
        </a>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-7 lg:gap-9">
            {navigationItems.map(({ id, label, href }) => {
              const isActive = activeSection === id

              return (
                <li key={id}>
                  <a
                    className={cn(
                      "text-sm outline-none transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:underline focus-visible:underline-offset-4",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground",
                    )}
                    href={href}
                    aria-current={isActive ? "location" : undefined}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="glass"
            className="min-h-11 h-auto rounded-full px-5 py-2.5 text-sm text-foreground sm:px-6"
          >
            <a href="#reach-us" onClick={() => setIsMenuOpen(false)}>
              Begin Journey
            </a>
          </Button>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex size-11 shrink-0 items-center justify-center text-foreground outline-none transition-opacity hover:opacity-75 focus-visible:ring-2 focus-visible:ring-white/80 md:hidden"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M5 8h14"
                className={cn(
                  "origin-center transition-transform duration-200",
                  isMenuOpen && "translate-y-1 rotate-45",
                )}
              />
              <path
                d="M5 16h14"
                className={cn(
                  "origin-center transition-transform duration-200",
                  isMenuOpen && "-translate-y-1 -rotate-45",
                )}
              />
            </svg>
          </button>
        </div>

        {isMenuOpen ? (
          <div className="mobile-menu-enter absolute inset-x-4 top-[calc(100%+0.5rem)] border border-white/15 bg-background/95 p-3 shadow-2xl backdrop-blur-md sm:inset-x-8 md:hidden">
            <nav id="mobile-navigation" aria-label="Mobile navigation">
              <ul>
                {navigationItems.map(({ id, label, href }, index) => {
                  const isActive = activeSection === id

                  return (
                    <li key={id}>
                      <a
                        ref={index === 0 ? firstMobileLinkRef : undefined}
                        className={cn(
                          "flex min-h-11 items-center border-l px-4 text-base outline-none transition-colors hover:text-foreground focus-visible:bg-white/5 focus-visible:text-foreground",
                          isActive
                            ? "border-white/80 text-foreground"
                            : "border-transparent text-muted-foreground",
                        )}
                        href={href}
                        aria-current={isActive ? "location" : undefined}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  )
}
