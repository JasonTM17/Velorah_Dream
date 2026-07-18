import { CinematicImage } from "@/components/cinematic-image"
import { SectionHeading } from "@/components/section-heading"
import { SectionReveal } from "@/components/section-reveal"
import { filmStills, type FilmStill } from "@/content/site-media"

interface JournalEntry {
  body: readonly string[]
  category: string
  date: string
  displayDate: string
  excerpt: string
  still: FilmStill
  title: string
}

const journalEntries: readonly JournalEntry[] = [
  {
    date: "2026-06-24",
    displayDate: "24 Jun 2026",
    category: "Field note",
    title: "The discipline of leaving space",
    excerpt:
      "Why restraint is not an aesthetic shortcut, but a way to help the right idea become unmistakable.",
    body: [
      "Space is active. It separates signal from decoration, gives a sentence somewhere to land, and lets an image carry more than one meaning.",
      "The difficult part is knowing what to remove. We return to one question: if this element disappeared, would the experience become less clear, less useful, or less felt? If not, the work usually grows stronger without it.",
    ],
    still: filmStills.focus,
  },
  {
    date: "2026-05-08",
    displayDate: "08 May 2026",
    category: "Process",
    title: "Designing for a quieter kind of focus",
    excerpt:
      "A practical study of pace, hierarchy, and the small decisions that let attention settle instead of scatter.",
    body: [
      "Focus is rarely created by making everything softer. It comes from contrast: one strong action against a calm field, one clear rhythm across many kinds of content, one moment of motion when it has something to say.",
      "We prototype that rhythm early. Long before polish, we watch how a page breathes, where the eye pauses, and whether the next step feels chosen rather than demanded.",
    ],
    still: filmStills.gathering,
  },
  {
    date: "2026-03-17",
    displayDate: "17 Mar 2026",
    category: "Perspective",
    title: "When a system begins to feel alive",
    excerpt:
      "The shift from collecting components to building a language that can respond, evolve, and still feel whole.",
    body: [
      "A system becomes useful when its rules explain more than the examples that created them. The same relationships should hold when content changes, a screen shrinks, or a new idea enters the room.",
      "That does not mean making every surface identical. It means giving variation a shared grammar — enough structure to feel related, enough freedom to remain human.",
    ],
    still: filmStills.signal,
  },
]

export function JournalSection() {
  return (
    <section
      id="journal"
      aria-labelledby="journal-heading"
      className="scroll-mt-20 border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:py-40"
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

        <div className="mt-20 border-t border-white/15 sm:mt-28">
          {journalEntries.map((entry, index) => {
            const mediaClassName =
              index % 2 === 0
                ? "lg:col-span-7"
                : "lg:order-2 lg:col-start-6 lg:col-span-7"
            const contentClassName =
              index % 2 === 0
                ? "lg:col-start-9 lg:col-span-4"
                : "lg:order-1 lg:col-span-4"

            return (
              <SectionReveal key={entry.title}>
                <article className="grid gap-8 border-b border-white/10 py-12 lg:grid-cols-12 lg:items-center lg:gap-8 sm:py-16">
                  <div className={mediaClassName}>
                    <CinematicImage
                      frameClassName={
                        index === 0 ? "aspect-[16/10]" : "aspect-[4/3]"
                      }
                      imageClassName={
                        index === 1
                          ? "object-[58%_center]"
                          : "object-center"
                      }
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      still={entry.still}
                    />
                  </div>

                  <div className={contentClassName}>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                      <span className="text-foreground/60">0{index + 1}</span>
                      <time dateTime={entry.date}>{entry.displayDate}</time>
                      <span aria-hidden="true">/</span>
                      <span className="uppercase tracking-[0.18em]">
                        {entry.category}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-4xl leading-[0.98] tracking-[-0.03em] text-balance sm:text-5xl">
                      {entry.title}
                    </h3>
                    <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
                      {entry.excerpt}
                    </p>

                    <details className="journal-note mt-8 border-t border-white/15">
                      <summary className="flex min-h-12 cursor-pointer items-center justify-between gap-6 py-4 text-sm text-foreground outline-none transition-colors duration-200 hover:text-white/75 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-background">
                        <span>Read the note</span>
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
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
