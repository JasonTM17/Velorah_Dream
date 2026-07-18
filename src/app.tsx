import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { JournalSection } from "@/components/sections/journal-section"
import { StudioSection } from "@/components/sections/studio-section"
import { Button } from "@/components/ui/button"
import { ViewportVideo } from "@/components/viewport-video"
import { filmStills } from "@/content/site-media"

export function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <a
        className="sr-only z-30 rounded-full bg-background text-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:px-4 focus:py-3"
        href="#main-content"
      >
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main-content" tabIndex={-1} className="outline-none">
        <section
          id="home"
          aria-labelledby="hero-heading"
          className="relative isolate flex min-h-[100svh] overflow-hidden bg-background md:min-h-[100dvh]"
        >
          <ViewportVideo
            className="absolute inset-0 z-0 h-full w-full object-cover"
            poster={filmStills.gathering.src}
            preload="auto"
          />

          <div className="relative z-10 flex min-h-[100svh] w-full flex-col items-center justify-center px-6 py-[90px] text-center sm:pb-32 sm:pt-28 md:min-h-[100dvh] md:pb-40 md:pt-32">
            <h1
              id="hero-heading"
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
              <a href="#studio">Begin Journey</a>
            </Button>
          </div>
        </section>

        <StudioSection />
        <AboutSection />
        <JournalSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  )
}
