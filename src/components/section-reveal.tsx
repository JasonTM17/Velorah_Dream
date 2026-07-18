import { useEffect, useRef, type HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

export function SectionReveal({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
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
      {...props}
    >
      {children}
    </div>
  )
}
