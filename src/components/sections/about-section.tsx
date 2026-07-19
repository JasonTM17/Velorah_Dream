import { CinematicImage } from "@/components/cinematic-image"
import { SectionHeading } from "@/components/section-heading"
import { SectionReveal } from "@/components/section-reveal"
import {
  aboutClosingStatement,
  aboutMethod,
  aboutNarrative,
  workingModel,
} from "@/content/about-content"
import { filmStills } from "@/content/site-media"

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:py-40"
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

        <SectionReveal className="mt-20 grid gap-14 border-t border-white/15 pt-10 sm:mt-28 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-start-7 lg:col-span-6 lg:pt-20">
            <p className="max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.03em] text-balance sm:text-5xl lg:text-6xl">
              {aboutNarrative}
            </p>

            <section
              aria-labelledby="working-model-heading"
              className="mt-12"
            >
              <h3
                id="working-model-heading"
                className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
              >
                Working model
              </h3>
              <dl className="mt-6 border-t border-white/15">
                {workingModel.map(({ title, description }, index) => (
                  <div
                    key={title}
                    className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 gap-y-3 border-b border-white/10 py-6 sm:grid-cols-[2.5rem_9.5rem_minmax(0,1fr)] sm:gap-x-6"
                  >
                    <dt className="contents">
                      <span
                        aria-hidden="true"
                        className="text-xs text-muted-foreground"
                      >
                        0{index + 1}
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {title}
                      </span>
                    </dt>
                    <dd className="col-start-2 text-sm leading-6 text-muted-foreground sm:col-start-3 sm:row-start-1">
                      {description}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>

          <figure className="lg:col-start-1 lg:col-span-5 lg:row-start-1">
            <CinematicImage
              frameClassName="aspect-[16/10] sm:aspect-[3/2] lg:aspect-[4/5]"
              imageClassName="object-[42%_center]"
              sizes="(min-width: 1024px) 42vw, 100vw"
              still={filmStills.movement}
            />
            <figcaption className="mt-4 max-w-sm text-xs leading-5 text-muted-foreground">
              A place for attention to gather — before form, before noise.
            </figcaption>
          </figure>
        </SectionReveal>

        <SectionReveal className="mt-24 sm:mt-32">
          <div className="grid gap-6 border-b border-white/15 pb-8 md:grid-cols-[minmax(0,0.7fr)_minmax(0,2fr)] md:gap-12">
            <p
              id="about-method-label"
              className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground"
            >
              How we work
            </p>
            <h3 className="max-w-3xl font-display text-4xl leading-[1] tracking-[-0.03em] sm:text-5xl">
              A measured path from open question to living system.
            </h3>
          </div>

          <ol aria-labelledby="about-method-label">
            {aboutMethod.map(({ number, title, description, outcome }) => (
              <li
                key={number}
                className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-white/10 py-8 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-8 sm:py-10"
              >
                <span className="text-xs tracking-[0.2em] text-muted-foreground">
                  {number}
                </span>
                <div className="grid gap-5 sm:grid-cols-[minmax(0,0.75fr)_minmax(16rem,1.25fr)] sm:gap-8">
                  <h4 className="font-display text-3xl leading-none tracking-[-0.02em] sm:text-4xl">
                    {title}
                  </h4>
                  <div>
                    <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                      {description}
                    </p>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-foreground/85">
                      <span className="mr-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        Outcome
                      </span>
                      {outcome}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <p className="ml-[2.5rem] max-w-3xl border-b border-white/15 py-10 font-display text-3xl leading-[1.05] tracking-[-0.02em] text-balance sm:ml-[6rem] sm:py-12 sm:text-4xl">
            {aboutClosingStatement}
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
