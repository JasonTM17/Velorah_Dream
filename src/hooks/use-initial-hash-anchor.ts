import { useEffect } from "react"

const HASH_ALIGNMENT_WINDOW_MS = 2_000

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

    let alignmentFrame: number | undefined
    let isTrackingLayout = true
    let layoutObserver: ResizeObserver | undefined

    const stopTrackingLayout = () => {
      isTrackingLayout = false
      layoutObserver?.disconnect()

      if (alignmentFrame !== undefined) {
        window.cancelAnimationFrame(alignmentFrame)
        alignmentFrame = undefined
      }
    }

    const alignTarget = () => {
      if (!isTrackingLayout) {
        return
      }

      if (alignmentFrame !== undefined) {
        window.cancelAnimationFrame(alignmentFrame)
      }

      alignmentFrame = window.requestAnimationFrame(() => {
        alignmentFrame = undefined

        if (!isTrackingLayout) {
          return
        }

        const root = document.documentElement
        const previousScrollBehavior = root.style.scrollBehavior

        root.style.scrollBehavior = "auto"
        target.scrollIntoView({ block: "start" })
        root.style.scrollBehavior = previousScrollBehavior
      })
    }

    alignTarget()

    if ("ResizeObserver" in window) {
      layoutObserver = new ResizeObserver(alignTarget)
      layoutObserver.observe(document.body)
    }

    window.addEventListener("load", alignTarget)
    window.addEventListener("hashchange", stopTrackingLayout)
    window.addEventListener("pointerdown", stopTrackingLayout, {
      passive: true,
    })
    window.addEventListener("wheel", stopTrackingLayout, { passive: true })
    window.addEventListener("touchstart", stopTrackingLayout, {
      passive: true,
    })
    window.addEventListener("keydown", stopTrackingLayout)

    if (document.fonts) {
      void document.fonts.ready.then(alignTarget)
    }

    const trackingTimeout = window.setTimeout(
      stopTrackingLayout,
      HASH_ALIGNMENT_WINDOW_MS,
    )

    return () => {
      stopTrackingLayout()
      window.clearTimeout(trackingTimeout)
      window.removeEventListener("load", alignTarget)
      window.removeEventListener("hashchange", stopTrackingLayout)
      window.removeEventListener("pointerdown", stopTrackingLayout)
      window.removeEventListener("wheel", stopTrackingLayout)
      window.removeEventListener("touchstart", stopTrackingLayout)
      window.removeEventListener("keydown", stopTrackingLayout)
    }
  }, [])
}
