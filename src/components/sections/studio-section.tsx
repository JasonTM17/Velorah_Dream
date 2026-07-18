import { SectionHeading } from "@/components/section-heading"
import { SectionReveal } from "@/components/section-reveal"
import { ViewportVideo } from "@/components/viewport-video"

const studioDisciplines = [
  {
    number: "01",
    title: "Brand direction",
    description:
      "Identity systems with a distinct point of view, shaped to stay coherent as the story grows.",
  },
  {
    number: "02",
    title: "Digital experiences",
    description:
      "Websites and products that turn complex ideas into calm, intuitive journeys people remember.",
  },
  {
    number: "03",
    title: "Creative systems",
    description:
      "Flexible visual and interaction languages that help ambitious teams move with clarity.",
  },
] as const

export function StudioSection() {
  return (
    <section
      id="studio"
      aria-labelledby="studio-heading"
      className="scroll-mt-20 border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="01 / Studio"
            headingId="studio-heading"
            title="We shape clarity into digital form."
            description="Velorah is an independent creative studio for ideas that deserve focus. Strategy, design, and technology move as one — from the first question to the final detail."
          />
        </SectionReveal>

        <div className="mt-20 border-t border-white/15 sm:mt-28">
          {studioDisciplines.map(({ number, title, description }) => (
            <SectionReveal
              key={number}
              className="grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[4rem_minmax(0,0.8fr)_minmax(16rem,1.2fr)] sm:items-start sm:gap-8 sm:py-10"
            >
              <span className="text-xs tracking-[0.2em] text-muted-foreground">
                {number}
              </span>
              <h3 className="font-display text-3xl leading-none tracking-[-0.02em] sm:text-4xl">
                {title}
              </h3>
              <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                {description}
              </p>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-20 sm:mt-28 lg:ml-[8.333%] lg:w-[91.667%]">
          <figure>
            <div className="aspect-[16/10] overflow-hidden border-y border-white/15 bg-background sm:aspect-video">
              <ViewportVideo
                className="h-full w-full scale-[1.01] object-cover object-[center_62%]"
                preload="metadata"
              />
            </div>
            <figcaption className="mt-5 grid gap-3 border-b border-white/10 pb-5 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-8">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Studio reel / In motion
              </span>
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                Fragments of atmosphere, texture, and pace — an ongoing study
                in turning feeling into form.
              </p>
            </figcaption>
          </figure>
        </SectionReveal>
      </div>
    </section>
  )
}
