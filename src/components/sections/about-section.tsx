import { SectionHeading } from "@/components/section-heading"
import { SectionReveal } from "@/components/section-reveal"

const principles = [
  ["Quiet over noise", "Remove what distracts until the essential can breathe."],
  ["Depth over speed", "Make the right thing, then refine it until it feels inevitable."],
  ["Feeling with function", "Let every useful choice carry an emotional pulse."],
] as const

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="02 / About"
            headingId="about-heading"
            title="Built for minds that refuse the obvious."
            description="We believe the most resonant work begins in stillness — with patient listening, precise questions, and the courage to leave only what matters."
          />
        </SectionReveal>

        <div className="mt-20 grid gap-12 border-t border-white/15 pt-10 md:grid-cols-[minmax(0,0.7fr)_minmax(0,2fr)] md:gap-12 sm:mt-28">
          <SectionReveal>
            <p className="max-w-xs text-sm leading-7 text-muted-foreground">
              Our approach is deliberately small and collaborative. The people
              thinking through the work are the people making it.
            </p>
          </SectionReveal>

          <div>
            {principles.map(([title, description], index) => (
              <SectionReveal
                key={title}
                className="grid gap-3 border-b border-white/10 py-7 first:pt-0 sm:grid-cols-[2.5rem_minmax(0,1fr)_minmax(0,1.2fr)] sm:gap-6"
              >
                <span className="text-xs text-muted-foreground">
                  0{index + 1}
                </span>
                <h3 className="text-sm font-medium text-foreground">{title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
