import {
  useEffect,
  useRef,
  type CSSProperties,
  type HTMLAttributes,
} from "react"

import { cn } from "@/lib/utils"

interface SectionRevealProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number
}

interface RevealStyle extends CSSProperties {
  "--reveal-delay"?: string
}

export function SectionReveal({
  className,
  children,
  delay = 0,
  style,
  ...props
}: SectionRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return
    }

    if (!("IntersectionObserver" in window)) {
      element.dataset.visible = "true"
      return
    }

    const revealElement = element
    let hasRevealed = false

    function revealIfPastViewport() {
      if (
        revealElement.getBoundingClientRect().top <
        window.innerHeight * 1.1
      ) {
        reveal()
      }
    }

    function reveal() {
      if (hasRevealed) {
        return
      }

      hasRevealed = true
      revealElement.dataset.visible = "true"
      observer.unobserve(revealElement)
      window.removeEventListener("scroll", revealIfPastViewport)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        reveal()
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      },
    )

    observer.observe(revealElement)
    window.addEventListener("scroll", revealIfPastViewport, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", revealIfPastViewport)
    }
  }, [])

  return (
    <div
      ref={elementRef}
      className={cn("section-reveal", className)}
      data-visible="false"
      style={
        {
          "--reveal-delay": `${delay}ms`,
          ...style,
        } as RevealStyle
      }
      {...props}
    >
      {children}
    </div>
  )
}
