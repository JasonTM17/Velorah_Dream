import { CinematicImage } from "@/components/cinematic-image"
import { SectionHeading } from "@/components/section-heading"
import { SectionReveal } from "@/components/section-reveal"
import { filmStills } from "@/content/site-media"

const principles = [
  ["Quiet over noise", "Remove what distracts until the essential can breathe."],
  ["Depth over speed", "Make the right thing, then refine it until it feels inevitable."],
  ["Feeling with function", "Let every useful choice carry an emotional pulse."],
] as const

const method = [
  {
    number: "01",
    title: "Listen closely",
    description:
      "We begin with the tension behind the brief: what is changing, what must stay true, and what people should feel.",
  },
  {
    number: "02",
    title: "Find the signal",
    description:
      "Research and conversation become a clear creative position — specific enough to guide every later decision.",
  },
  {
    number: "03",
    title: "Build the language",
    description:
      "Type, image, interaction, and technology are shaped together so the experience speaks with one voice.",
  },
  {
    number: "04",
    title: "Refine in context",
    description:
      "We test the work where it will live, remove friction, and leave a system that can keep its character as it grows.",
  },
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

        <div className="mt-20 grid gap-14 border-t border-white/15 pt-10 lg:grid-cols-12 lg:gap-8 sm:mt-28">
          <SectionReveal className="lg:col-span-5">
            <figure>
              <CinematicImage
                frameClassName="aspect-[4/5]"
                imageClassName="object-[42%_center]"
                sizes="(min-width: 1024px) 42vw, 100vw"
                still={filmStills.movement}
              />
              <figcaption className="mt-4 max-w-sm text-xs leading-5 text-muted-foreground">
                A place for attention to gather — before form, before noise.
              </figcaption>
            </figure>
          </SectionReveal>

          <SectionReveal className="lg:col-start-7 lg:col-span-6 lg:pt-20">
            <p className="max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.03em] text-balance sm:text-5xl lg:text-6xl">
              Small by design. Close to the work. Curious enough to question the
              first answer.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-10">
              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                Our approach is deliberately collaborative. The people thinking
                through the work are the people making it, so strategy stays
                connected to every visual and technical choice.
              </p>
              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                We work best when a project needs both a clear point of view and
                the patience to make it real — without adding noise for the sake
                of looking busy.
              </p>
            </div>

            <dl className="mt-12 border-t border-white/15">
              {principles.map(([title, description], index) => (
                <div
                  key={title}
                  className="grid gap-3 border-b border-white/10 py-6 sm:grid-cols-[2.5rem_minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-6"
                >
                  <span className="text-xs text-muted-foreground">
                    0{index + 1}
                  </span>
                  <dt className="text-sm font-medium text-foreground">{title}</dt>
                  <dd className="text-sm leading-6 text-muted-foreground">
                    {description}
                  </dd>
                </div>
              ))}
            </dl>
          </SectionReveal>
        </div>

        <div className="mt-24 sm:mt-32">
          <SectionReveal className="grid gap-6 border-b border-white/15 pb-8 md:grid-cols-[minmax(0,0.7fr)_minmax(0,2fr)] md:gap-12">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              How we work
            </p>
            <h3 className="max-w-3xl font-display text-4xl leading-[1] tracking-[-0.03em] sm:text-5xl">
              A measured path from open question to living system.
            </h3>
          </SectionReveal>

          <div>
            {method.map(({ number, title, description }) => (
              <SectionReveal
                key={number}
                className="grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[4rem_minmax(0,0.8fr)_minmax(16rem,1.2fr)] sm:gap-8 sm:py-10"
              >
                <span className="text-xs tracking-[0.2em] text-muted-foreground">
                  {number}
                </span>
                <h4 className="font-display text-3xl leading-none tracking-[-0.02em] sm:text-4xl">
                  {title}
                </h4>
                <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
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
