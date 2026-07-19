import { CinematicImage } from "@/components/cinematic-image"
import { SectionHeading } from "@/components/section-heading"
import { SectionReveal } from "@/components/section-reveal"
import {
  currentThread,
  journalEntries,
  journalQuestions,
  type JournalEntry,
} from "@/content/journal-content"

const journalDateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
})

function JournalMeta({ entry, number }: { entry: JournalEntry; number: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
      <span className="text-foreground/60">{number}</span>
      <time dateTime={entry.date}>
        {journalDateFormatter.format(new Date(`${entry.date}T00:00:00Z`))}
      </time>
      <span aria-hidden="true">/</span>
      <span className="uppercase tracking-[0.18em]">{entry.category}</span>
    </div>
  )
}

export function JournalSection() {
  const [featuredEntry, ...moreEntries] = journalEntries

  return (
    <section
      id="journal"
      aria-labelledby="journal-heading"
      className="scroll-mt-24 border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="03 / Journal"
            headingId="journal-heading"
            title="Notes from the edge of attention."
            description="Observations on creative practice, meaningful technology, and the quiet choices behind work that endures."
          />
        </SectionReveal>

        <SectionReveal className="mt-20 sm:mt-28">
          <section
            aria-labelledby="current-thread-heading"
            className="grid gap-4 border-y border-white/15 py-6 sm:grid-cols-[8rem_minmax(0,0.9fr)_minmax(16rem,1.1fr)] sm:items-baseline sm:gap-8"
          >
            <h3
              id="current-thread-heading"
              className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
            >
              Current thread
            </h3>
            <p className="font-display text-2xl leading-none tracking-[-0.02em] sm:text-3xl">
              {currentThread.title}
            </p>
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              {currentThread.description}
            </p>
          </section>

          <article className="grid gap-10 border-b border-white/15 py-14 sm:py-20 lg:grid-cols-12 lg:items-start lg:gap-8">
            <div className="lg:col-span-7">
              <CinematicImage
                frameClassName="aspect-[16/10]"
                sizes="(min-width: 1024px) 58vw, 100vw"
                still={featuredEntry.still}
              />
            </div>

            <div className="lg:col-start-9 lg:col-span-4">
              <JournalMeta entry={featuredEntry} number="01" />
              <h3 className="mt-6 font-display text-5xl leading-[0.95] tracking-[-0.035em] text-balance sm:text-6xl">
                {featuredEntry.title}
              </h3>
              <p className="mt-7 text-base leading-7 text-foreground/85 sm:text-lg sm:leading-8">
                {featuredEntry.excerpt}
              </p>
              <div className="mt-8 space-y-5 border-t border-white/15 pt-7 text-sm leading-7 text-muted-foreground">
                {featuredEntry.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        </SectionReveal>

        <SectionReveal className="mt-24 sm:mt-32">
          <section aria-labelledby="more-notes-heading">
            <div className="border-b border-white/15 pb-7">
              <h3
                id="more-notes-heading"
                className="font-display text-4xl leading-none tracking-[-0.03em] sm:text-5xl"
              >
                More notes
              </h3>
            </div>

            {moreEntries.map((entry, index) => {
              const mediaClassName =
                index === 0
                  ? "lg:col-span-4"
                  : "lg:col-start-2 lg:col-span-4"
              const contentClassName =
                index === 0
                  ? "lg:col-start-6 lg:col-span-6"
                  : "lg:col-start-7 lg:col-span-5"

              return (
                <article
                  key={entry.title}
                  className="grid gap-8 border-b border-white/10 py-10 sm:py-12 lg:grid-cols-12 lg:items-start lg:gap-8"
                >
                  <div className={mediaClassName}>
                    <CinematicImage
                      frameClassName="aspect-[4/3]"
                      imageClassName={
                        index === 0 ? "object-[58%_center]" : "object-center"
                      }
                      sizes="(min-width: 1024px) 34vw, 100vw"
                      still={entry.still}
                    />
                  </div>

                  <div className={contentClassName}>
                    <JournalMeta entry={entry} number={`0${index + 2}`} />
                    <h4 className="mt-5 font-display text-3xl leading-[0.98] tracking-[-0.025em] text-balance sm:text-4xl">
                      {entry.title}
                    </h4>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
                      {entry.excerpt}
                    </p>

                    <details className="journal-note mt-7 border-t border-white/15">
                      <summary className="flex min-h-12 touch-manipulation cursor-pointer items-center justify-between gap-6 py-4 text-sm text-muted-foreground outline-none transition-colors duration-200 hover:text-foreground focus-visible:rounded-sm focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-background">
                        <span>
                          Read note
                          <span className="sr-only">: {entry.title}</span>
                        </span>
                        <span
                          aria-hidden="true"
                          className="journal-toggle text-xl font-light leading-none"
                        >
                          +
                        </span>
                      </summary>
                      <div className="space-y-5 border-t border-white/10 pb-2 pt-6 text-sm leading-7 text-muted-foreground">
                        {entry.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </details>
                  </div>
                </article>
              )
            })}
          </section>
        </SectionReveal>

        <SectionReveal className="mt-24 sm:mt-32">
          <section aria-labelledby="journal-questions-heading">
            <h3
              id="journal-questions-heading"
              className="max-w-3xl font-display text-4xl leading-[1] tracking-[-0.03em] sm:text-5xl"
            >
              Questions we keep returning to
            </h3>
            <ul className="mt-8 border-t border-white/15">
              {journalQuestions.map((question, index) => (
                <li
                  key={question}
                  className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-white/10 py-6 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-8"
                >
                  <span
                    aria-hidden="true"
                    className="text-xs text-muted-foreground"
                  >
                    0{index + 1}
                  </span>
                  <span className="max-w-3xl font-display text-2xl leading-tight tracking-[-0.015em] sm:text-3xl">
                    {question}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </SectionReveal>
      </div>
    </section>
  )
}
