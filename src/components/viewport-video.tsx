import {
  useEffect,
  useRef,
  type VideoHTMLAttributes,
} from "react"

import { VIDEO_SOURCE } from "@/content/site-media"
import { cn } from "@/lib/utils"

type ViewportVideoProps = Omit<
  VideoHTMLAttributes<HTMLVideoElement>,
  "autoPlay" | "children" | "loop" | "muted" | "playsInline"
>

export function ViewportVideo({
  className,
  preload = "metadata",
  ...props
}: ViewportVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current

    if (!video || !("IntersectionObserver" in window)) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          const playback = video.play()

          if (playback) {
            void playback.catch(() => undefined)
          }
          return
        }

        video.pause()
      },
      { threshold: 0.25 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={videoRef}
      className={cn(className)}
      autoPlay
      loop
      muted
      playsInline
      preload={preload}
      aria-hidden="true"
      tabIndex={-1}
      {...props}
    >
      <source src={VIDEO_SOURCE} type="video/mp4" />
    </video>
  )
}
