import type { ImgHTMLAttributes } from "react"

import type { FilmStill } from "@/content/site-media"
import { cn } from "@/lib/utils"

interface CinematicImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "height" | "src" | "srcSet" | "width"> {
  frameClassName?: string
  imageClassName?: string
  still: FilmStill
}

export function CinematicImage({
  alt,
  className,
  frameClassName,
  imageClassName,
  loading = "lazy",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  still,
  ...props
}: CinematicImageProps) {
  return (
    <div
      className={cn(
        "cinematic-image group overflow-hidden bg-white/[0.035]",
        frameClassName,
      )}
    >
      <img
        alt={alt ?? still.alt}
        className={cn(
          "cinematic-image__asset h-full w-full object-cover",
          imageClassName,
          className,
        )}
        decoding="async"
        height={still.height}
        loading={loading}
        sizes={sizes}
        src={still.src}
        srcSet={still.srcSet}
        width={still.width}
        {...props}
      />
    </div>
  )
}
