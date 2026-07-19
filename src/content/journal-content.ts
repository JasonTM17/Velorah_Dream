import { filmStills, type FilmStill } from "@/content/site-media"

export interface JournalEntry {
  body: readonly string[]
  category: string
  date: string
  excerpt: string
  still: FilmStill
  title: string
}

export const journalEntries: readonly JournalEntry[] = [
  {
    date: "2026-06-24",
    category: "Field note",
    title: "The discipline of leaving space",
    excerpt:
      "Why restraint is not an aesthetic shortcut, but a way to help the right idea become unmistakable.",
    body: [
      "Space is active. It separates signal from decoration, gives a sentence somewhere to land, and lets an image carry more than one meaning.",
      "The difficult part is knowing what to remove. We return to one question: if this element disappeared, would the experience become less clear, less useful, or less felt? If not, the work usually grows stronger without it.",
      "Removal is only half the work. What remains still needs a readable order: a clear first signal, enough contrast to guide the next move, and pauses that let each idea register before another arrives.",
    ],
    still: filmStills.focus,
  },
  {
    date: "2026-05-08",
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

export const currentThread = {
  title: "Restraint is a working method.",
  description:
    "Across these notes, one question keeps resurfacing: how little structure is enough to make the next decision clear?",
} as const

export const journalQuestions = [
  "What can disappear without weakening the idea?",
  "Where does a system need a rule, and where does it need room?",
  "What should someone understand, feel, or do next?",
] as const
