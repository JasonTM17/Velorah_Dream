import { Button } from "@/components/ui/button"
import { navigationItems } from "@/content/site-navigation"

export function SiteHeader() {
  return (
    <header className="absolute left-1/2 top-0 z-20 mx-auto flex w-full max-w-7xl -translate-x-1/2 flex-row items-center justify-between gap-4 px-4 py-5 sm:px-8 sm:py-6">
      <a
        className="shrink-0 text-3xl leading-none tracking-tight text-foreground outline-none transition-opacity duration-200 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
        href="#home"
        aria-label="Velorah home"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Velorah<sup className="ml-0.5 text-xs">®</sup>
      </a>

      <nav aria-label="Primary navigation" className="hidden md:block">
        <ul className="flex items-center gap-7 lg:gap-9">
          {navigationItems.map(({ label, href, active }) => (
            <li key={label}>
              <a
                className={
                  active
                    ? "text-sm text-foreground outline-none transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:underline focus-visible:underline-offset-4"
                    : "text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:underline focus-visible:underline-offset-4"
                }
                href={href}
                aria-current={active ? "page" : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Button
        asChild
        variant="glass"
        className="min-h-11 h-auto rounded-full px-5 py-2.5 text-sm text-foreground sm:px-6"
      >
        <a href="#reach-us">Begin Journey</a>
      </Button>
    </header>
  )
}
