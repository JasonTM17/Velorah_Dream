import { CinematicImage } from "@/components/cinematic-image"
import { SectionHeading } from "@/components/section-heading"
import { SectionReveal } from "@/components/section-reveal"
import { ViewportVideo } from "@/components/viewport-video"
import { filmStills } from "@/content/site-media"

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

const explorations = [
  {
    number: "02",
    type: "Interface study",
    title: "Stillness, made navigable.",
    description:
      "A self-initiated study in using pacing, contrast, and a single visual signal to guide attention without demanding it.",
    still: filmStills.signal,
    frameClassName: "aspect-[4/5] sm:aspect-[5/6]",
    imageClassName: "object-[48%_center]",
  },
  {
    number: "03",
    type: "System study",
    title: "A language that can keep growing.",
    description:
      "An exploration of repeatable rules that hold a mood together across identity, interface, and motion.",
    still: filmStills.horizon,
    frameClassName: "aspect-[4/3] sm:aspect-[3/2]",
    imageClassName: "object-[58%_center]",
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

        <SectionReveal className="mt-24 sm:mt-32">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
            <figure className="lg:col-span-8">
              <div className="aspect-[16/10] overflow-hidden border-y border-white/15 bg-background sm:aspect-video">
                <ViewportVideo
                  className="h-full w-full scale-[1.01] object-cover object-[center_62%]"
                  poster={filmStills.gathering.src}
                  preload="metadata"
                />
              </div>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Studio reel / In motion
              </figcaption>
            </figure>

            <div className="border-t border-white/15 pt-6 lg:col-start-10 lg:col-span-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Exploration / 01
              </p>
              <h3 className="mt-5 font-display text-4xl leading-[0.96] tracking-[-0.03em] sm:text-5xl">
                Attention as an atmosphere.
              </h3>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">
                An ongoing motion study in turning texture, silence, and pace
                into a place where an idea can come into focus.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-5 text-xs">
                <div>
                  <dt className="text-muted-foreground">Form</dt>
                  <dd className="mt-2 text-foreground">Moving image</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Status</dt>
                  <dd className="mt-2 text-foreground">Self-initiated</dd>
                </div>
              </dl>
            </div>
          </div>
        </SectionReveal>

        <div className="mt-24 grid gap-y-20 md:grid-cols-12 md:gap-x-8 sm:mt-32">
          {explorations.map((exploration, index) => (
            <SectionReveal
              key={exploration.title}
              className={
                index === 0
                  ? "md:col-span-5"
                  : "md:col-start-7 md:col-span-6 md:mt-32"
              }
            >
              <article>
                <CinematicImage
                  frameClassName={exploration.frameClassName}
                  imageClassName={exploration.imageClassName}
                  sizes={
                    index === 0
                      ? "(min-width: 768px) 42vw, 100vw"
                      : "(min-width: 768px) 50vw, 100vw"
                  }
                  still={exploration.still}
                />
                <div className="mt-5 grid gap-5 border-t border-white/15 pt-5 sm:grid-cols-[7rem_minmax(0,1fr)]">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {exploration.number} / {exploration.type}
                  </p>
                  <div>
                    <h3 className="font-display text-3xl leading-none tracking-[-0.025em] sm:text-4xl">
                      {exploration.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
                      {exploration.description}
                    </p>
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
