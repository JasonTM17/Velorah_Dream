import { SectionHeading } from "@/components/section-heading"
import { SectionReveal } from "@/components/section-reveal"

const journalEntries = [
  {
    date: "2026-06-24",
    displayDate: "24 Jun 2026",
    category: "Field note",
    title: "The discipline of leaving space",
    excerpt:
      "Why restraint is not an aesthetic shortcut, but a way to help the right idea become unmistakable.",
  },
  {
    date: "2026-05-08",
    displayDate: "08 May 2026",
    category: "Process",
    title: "Designing for a quieter kind of focus",
    excerpt:
      "A practical study of pace, hierarchy, and the small decisions that let attention settle instead of scatter.",
  },
  {
    date: "2026-03-17",
    displayDate: "17 Mar 2026",
    category: "Perspective",
    title: "When a system begins to feel alive",
    excerpt:
      "The shift from collecting components to building a language that can respond, evolve, and still feel whole.",
  },
] as const

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
          {journalEntries.map(
            ({ date, displayDate, category, title, excerpt }, index) => (
              <SectionReveal key={title}>
                <article className="grid gap-5 border-b border-white/10 py-9 sm:grid-cols-[8rem_minmax(0,0.85fr)_minmax(16rem,1.35fr)] sm:gap-8 sm:py-11">
                  <div className="flex gap-4 text-xs text-muted-foreground sm:block">
                    <span className="mr-4 text-foreground/60">0{index + 1}</span>
                    <time dateTime={date}>{displayDate}</time>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      {category}
                    </p>
                    <h3 className="mt-4 font-display text-3xl leading-[1.05] tracking-[-0.025em] text-foreground sm:text-4xl">
                      {title}
                    </h3>
                  </div>
                  <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                    {excerpt}
                  </p>
                </article>
              </SectionReveal>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
