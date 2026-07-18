import { useEffect } from "react"

function getHashTarget() {
  const hash = window.location.hash.slice(1)

  if (!hash) {
    return null
  }

  try {
    return document.getElementById(decodeURIComponent(hash))
  } catch {
    return null
  }
}

export function useInitialHashAnchor() {
  useEffect(() => {
    const target = getHashTarget()

    if (!target) {
      return
    }

    const frame = window.requestAnimationFrame(() => {
      const root = document.documentElement
      const previousScrollBehavior = root.style.scrollBehavior

      root.style.scrollBehavior = "auto"
      target.scrollIntoView({ block: "start" })
      root.style.scrollBehavior = previousScrollBehavior
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])
}
