import { SectionReveal } from "@/components/section-reveal"

const CONTACT_EMAIL = "hello@velorah.com"

export function ContactSection() {
  return (
    <section
      id="reach-us"
      aria-labelledby="reach-us-heading"
      className="scroll-mt-20 border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <SectionReveal className="grid gap-10 md:grid-cols-[minmax(0,0.7fr)_minmax(0,2fr)] md:gap-12">
          <p className="pt-2 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            04 / Reach Us
          </p>

          <div>
            <h2
              id="reach-us-heading"
              className="max-w-5xl font-display text-5xl leading-[0.94] tracking-[-0.045em] text-balance sm:text-7xl lg:text-8xl"
            >
              Bring us the question that won&apos;t leave you alone.
            </h2>

            <p className="mt-8 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Tell us where you are, what you&apos;re building, and why it
              matters. We&apos;ll begin with a thoughtful conversation.
            </p>

            <a
              className="group mt-12 inline-flex min-h-11 items-center gap-4 border-b border-white/35 pb-2 text-base text-foreground outline-none transition-colors duration-300 hover:border-white focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:text-lg"
              href={`mailto:${CONTACT_EMAIL}?subject=New%20project%20with%20Velorah`}
            >
              Start a conversation
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
