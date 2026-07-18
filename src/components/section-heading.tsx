interface SectionHeadingProps {
  eyebrow: string
  headingId: string
  title: string
  description: string
}

export function SectionHeading({
  eyebrow,
  headingId,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="grid gap-8 md:grid-cols-[minmax(0,0.7fr)_minmax(0,2fr)] md:gap-12">
      <p className="pt-2 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
        {eyebrow}
      </p>

      <div className="max-w-4xl">
        <h2
          id={headingId}
          className="font-display text-5xl leading-[0.96] tracking-[-0.04em] text-balance sm:text-6xl lg:text-7xl"
        >
          {title}
        </h2>
        <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {description}
        </p>
      </div>
    </div>
  )
}
