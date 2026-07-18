import { CinematicImage } from "@/components/cinematic-image"
import { SectionReveal } from "@/components/section-reveal"
import { PROJECT_BRIEF_URL } from "@/content/site-contact"
import { filmStills } from "@/content/site-media"

const firstNotePrompts = [
  "What are you making, changing, or trying to understand?",
  "Who should feel the difference when the work is done?",
  "What already exists, and what no longer feels true?",
  "Is there a moment, constraint, or ambition shaping the timing?",
] as const

const nextSteps = [
  ["Exchange", "We read the context and come back with the questions that matter."],
  ["Fit", "A focused conversation tests the challenge, chemistry, and useful scope."],
  ["Shape", "If the fit is right, we define the first working phase together."],
] as const

export function ContactSection() {
  return (
    <section
      id="reach-us"
      aria-labelledby="reach-us-heading"
      className="scroll-mt-24 border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:py-40"
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

            <p className="mt-8 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Tell us where you are, what you&apos;re building, and why it
              matters. A useful beginning does not need a perfect brief — only
              enough truth to start a thoughtful conversation.
            </p>

            <a
              className="group mt-12 inline-flex min-h-12 max-w-full items-center gap-4 border-b border-white/35 pb-2 font-display text-3xl leading-none text-foreground outline-none transition-colors duration-300 hover:border-white focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:text-4xl"
              href={PROJECT_BRIEF_URL}
              rel="noreferrer"
              target="_blank"
            >
              <span>
                Start a project brief
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
              <span
                aria-hidden="true"
                className="contact-arrow text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </a>
          </div>
        </SectionReveal>

        <div className="mt-24 grid gap-14 border-t border-white/15 pt-10 lg:grid-cols-12 lg:gap-8 sm:mt-32">
          <SectionReveal className="lg:col-span-5">
            <CinematicImage
              frameClassName="aspect-[4/5]"
              imageClassName="object-[50%_center]"
              sizes="(min-width: 1024px) 42vw, 100vw"
              still={filmStills.horizon}
            />
          </SectionReveal>

          <div className="grid gap-16 lg:col-start-7 lg:col-span-6 lg:pt-16">
            <SectionReveal delay={60}>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                A useful first note
              </p>
              <ol className="mt-6 border-t border-white/15">
                {firstNotePrompts.map((prompt, index) => (
                  <li
                    key={prompt}
                    className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-white/10 py-5 text-sm leading-6"
                  >
                    <span className="text-muted-foreground">0{index + 1}</span>
                    <span>{prompt}</span>
                  </li>
                ))}
              </ol>
            </SectionReveal>

            <SectionReveal delay={120}>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                What happens next
              </p>
              <dl className="mt-6 border-t border-white/15">
                {nextSteps.map(([title, description], index) => (
                  <div
                    key={title}
                    className="grid gap-3 border-b border-white/10 py-5 sm:grid-cols-[2.5rem_6rem_minmax(0,1fr)] sm:gap-5"
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
                    <dd className="text-sm leading-6 text-muted-foreground">
                      {description}
                    </dd>
                  </div>
                ))}
              </dl>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
