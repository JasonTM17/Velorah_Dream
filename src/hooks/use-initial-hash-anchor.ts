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
    let alignmentFrame: number | undefined
    let currentTarget: HTMLElement | null = null
    let isTrackingLayout = false
    let layoutObserver: ResizeObserver | undefined
    let trackingTimeout: number | undefined

    const stopTrackingLayout = () => {
      isTrackingLayout = false
      layoutObserver?.disconnect()
      layoutObserver = undefined

      if (trackingTimeout !== undefined) {
        window.clearTimeout(trackingTimeout)
        trackingTimeout = undefined
      }

      if (alignmentFrame !== undefined) {
        window.cancelAnimationFrame(alignmentFrame)
        alignmentFrame = undefined
      }
    }

    const alignTarget = () => {
      if (!isTrackingLayout || !currentTarget) {
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

        const target = currentTarget

        if (!target) {
          return
        }

        const root = document.documentElement
        const previousScrollBehavior = root.style.scrollBehavior

        root.style.scrollBehavior = "auto"
        target.scrollIntoView({ block: "start" })
        root.style.scrollBehavior = previousScrollBehavior
        window.dispatchEvent(new Event("scroll"))
      })
    }

    const startTrackingCurrentHash = () => {
      stopTrackingLayout()
      currentTarget = getHashTarget()

      if (!currentTarget) {
        return
      }

      isTrackingLayout = true
      alignTarget()

      if ("ResizeObserver" in window) {
        layoutObserver = new ResizeObserver(alignTarget)
        layoutObserver.observe(document.body)
      }

      trackingTimeout = window.setTimeout(
        stopTrackingLayout,
        HASH_ALIGNMENT_WINDOW_MS,
      )
    }

    startTrackingCurrentHash()

    window.addEventListener("load", alignTarget)
    window.addEventListener("hashchange", startTrackingCurrentHash)
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

    return () => {
      stopTrackingLayout()
      window.removeEventListener("load", alignTarget)
      window.removeEventListener("hashchange", startTrackingCurrentHash)
      window.removeEventListener("pointerdown", stopTrackingLayout)
      window.removeEventListener("wheel", stopTrackingLayout)
      window.removeEventListener("touchstart", stopTrackingLayout)
      window.removeEventListener("keydown", stopTrackingLayout)
    }
  }, [])
}
