# Codebase summary

## Current state

Production static React/Vite single page with five anchored sections, a fixed section-aware header, accessible mobile disclosure, two viewport-managed video surfaces, five local film stills in two sizes, three Journal notes, a real project-brief handoff, and a responsive footer. No backend, router, form submission, or persistent state.

## Structure

| Path | Responsibility |
|---|---|
| `index.html` | Metadata, favicon/share identity, font/video preconnects, and React mount point |
| `public/velorah-stills/` | Ten optimized 720/1440 WebP frames from the approved film |
| `public/velorah-*` | Local favicon plus SVG/PNG social-card assets |
| `src/main.tsx` | Validates the root element and mounts React |
| `src/app.tsx` | Page shell, video hero, and section composition |
| `src/components/site-header.tsx` | Fixed desktop navigation, active state, mobile disclosure, and CTA |
| `src/hooks/use-page-navigation.ts` | Observer state plus rAF fast-scroll recovery |
| `src/hooks/use-initial-hash-anchor.ts` | Post-mount direct-fragment alignment |
| `src/components/viewport-video.tsx` | Shared silent inline media plus viewport play/pause policy |
| `src/components/cinematic-image.tsx` | Dimensioned responsive lazy image primitive |
| `src/components/site-footer.tsx` | Always-visible navigation, project brief, and legal copy |
| `src/components/sections/` | Studio reel, About, Journal, and Reach Us content |
| `src/components/section-reveal.tsx` | One-shot observer reveal plus fast-scroll/no-API recovery |
| `src/components/ui/button.tsx` | shadcn-compatible typed button variants |
| `src/content/site-navigation.ts` | Typed header/footer anchor definitions |
| `src/content/site-media.ts` | Shared MP4 source and typed film-still catalog |
| `src/content/site-contact.ts` | Enabled repository project-brief destination |
| `src/index.css` | Tailwind import, tokens, glass, motion, and reduced-motion rules |
| `src/**/*.test.tsx` | Page, header, media, reveal, and accessibility contracts |

## Runtime flow

1. The document starts font/media connections and declares canonical PNG/SVG identity assets before mounting the bundle.
2. `App` composes Home, Studio, About, Journal, Reach Us, and the footer.
3. `usePageNavigation` observes a narrow viewport band and uses a throttled scroll fallback when a jump skips observer entries. Without the API, state remains Home/transparent.
4. The header component renders inline desktop links or a mobile disclosure. Opening focuses Home; selection, Escape, or a `md` resize closes it; Escape returns focus to the menu button.
5. Hero and Studio instantiate the shared media component with one MP4. Hero preloads automatically; the reel preloads metadata. Each plays at 25% intersection and pauses otherwise.
6. Section reveals become permanently visible on first intersection. A passive scroll fallback exposes skipped sections; missing observer support exposes all content immediately.
7. Reduced-motion CSS disables entrance/reveal/disclosure animation and smooth scrolling. It does not disable video playback.

## External boundaries

- Google Fonts: Instrument Serif and Inter.
- CloudFront: one public MP4 shared by hero and Studio reel.
- GitHub Issues: enabled repository channel for new project briefs.
- Vercel: static production hosting at `https://velorah-dream.vercel.app/`.
- npm dependencies: pinned through `package-lock.json`.

The app accepts no input and stores no user data, credentials, or tokens. Project-brief links hand off to GitHub in a new tab.

## Verification

Current evidence: 20 tests across 6 files; 98.24% statements, 91.54% branches, 100% functions, and 98.16% lines. Lint, build, audit, docs validation, GIF inspection, and five-viewport Chromium QA pass. See the [automated report](../plans/260718-2159-velorah-rich-sections-gif-vercel/reports/tester-2026-07-18-rich-release.md), [browser QA](../plans/260718-2159-velorah-rich-sections-gif-vercel/reports/browser-qa-2026-07-18-rich-release.md), and [GIF evidence](../plans/260718-2159-velorah-rich-sections-gif-vercel/reports/gif-evidence-2026-07-18.md).
