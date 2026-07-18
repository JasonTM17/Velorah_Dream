import { navigationItems } from "@/content/site-navigation"

const linkClassName =
  "text-sm text-muted-foreground outline-none transition-colors duration-200 hover:text-foreground focus-visible:text-foreground focus-visible:underline focus-visible:underline-offset-4"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 pb-10 pt-16 sm:px-8 sm:pb-12 sm:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-16 md:grid-cols-[minmax(0,0.7fr)_minmax(0,2fr)] md:gap-12 sm:pb-20">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Velorah / Independent
          </p>
          <p className="max-w-5xl font-display text-4xl leading-[1] tracking-[-0.035em] text-balance sm:text-6xl lg:text-7xl">
            Making room for ideas with depth, and giving them a form people can
            feel.
          </p>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-[1.35fr_0.75fr_0.9fr] md:gap-10 sm:py-16">
          <div>
            <a
              className="inline-flex items-center gap-4 font-display text-4xl leading-none tracking-tight text-foreground outline-none transition-opacity duration-200 hover:opacity-80 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              href="#home"
              aria-label="Velorah home"
            >
              <img
                alt=""
                aria-hidden="true"
                className="h-11 w-11"
                height="44"
                src="/velorah-mark.svg"
                width="44"
              />
              <span>
                Velorah<sup className="ml-0.5 font-body text-xs">®</sup>
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">
              An independent creative studio aligning strategy, design, and
              technology around one clear idea.
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
              className={`${linkClassName} mt-5 inline-block break-all sm:break-normal`}
              href="mailto:hello@velorah.com"
            >
              hello@velorah.com
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              Working worldwide, one focused collaboration at a time.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velorah. All rights reserved.</p>
          <a className={linkClassName} href="#home">
            Return to the beginning ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
