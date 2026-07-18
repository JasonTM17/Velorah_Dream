import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"

const VIDEO_SOURCE =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"

export function App() {
  return (
    <div className="relative isolate flex min-h-[100svh] overflow-hidden bg-background text-foreground md:min-h-[100dvh]">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src={VIDEO_SOURCE} type="video/mp4" />
      </video>

      <a
        className="sr-only z-20 rounded-full bg-background text-foreground focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:px-4 focus:py-3"
        href="#main-content"
      >
        Skip to main content
      </a>

      <div className="relative z-10 flex min-h-[100svh] w-full flex-col md:min-h-[100dvh]">
        <SiteHeader />

        <main
          id="main-content"
          tabIndex={-1}
          className="flex flex-1 flex-col items-center justify-center px-6 py-[90px] text-center sm:pb-32 sm:pt-28 md:pb-40 md:pt-32"
        >
          <h1
            id="home"
            className="animate-fade-rise max-w-7xl text-balance text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-7xl md:text-8xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Where <em className="not-italic text-muted-foreground">dreams</em>{" "}
            rise{" "}
            <em className="not-italic text-muted-foreground">
              through the silence.
            </em>
          </h1>

          <p className="animate-fade-rise-delay mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            We&apos;re designing tools for deep thinkers, bold creators, and
            quiet rebels. Amid the chaos, we build digital spaces for sharp
            focus and inspired work.
          </p>

          <Button
            asChild
            variant="glass"
            className="animate-fade-rise-delay-2 mt-12 h-auto rounded-full px-14 py-5 text-base text-foreground"
          >
            <a id="journey" href="#studio">
              Begin Journey
            </a>
          </Button>
        </main>
      </div>
    </div>
  )
}
