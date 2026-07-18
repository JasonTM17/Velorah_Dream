import { navigationItems } from "@/content/site-navigation"

const linkClassName =
  "text-sm text-muted-foreground outline-none transition-colors duration-200 hover:text-foreground focus-visible:text-foreground focus-visible:underline focus-visible:underline-offset-4"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <a
              className="font-display text-4xl leading-none tracking-tight text-foreground outline-none transition-opacity duration-200 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              href="#home"
              aria-label="Velorah home"
            >
              Velorah<sup className="ml-0.5 font-body text-xs">®</sup>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">
              An independent creative studio making room for ideas with depth.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/60">
              Explore
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-1">
              {navigationItems.map(({ label, href }) => (
                <li key={label}>
                  <a className={linkClassName} href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/60">
              Inquiries
            </p>
            <a
              className={`${linkClassName} mt-5 inline-block`}
              href="mailto:hello@velorah.com"
            >
              hello@velorah.com
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Working worldwide
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velorah. All rights reserved.</p>
          <p>Made with purpose and a little quiet.</p>
        </div>
      </div>
    </footer>
  )
}
