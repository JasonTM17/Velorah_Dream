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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        element.dataset.visible = "true"
        observer.unobserve(element)
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
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
