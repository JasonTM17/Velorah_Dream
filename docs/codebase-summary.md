# Codebase summary

## Current state

Production static React/Vite single page with five anchored sections, a fixed section-aware header, keyboard-safe mobile disclosure, two viewport-managed video surfaces, five local film stills in two responsive sizes, an expanded semantic About narrative, a three-entry Journal, a real project-brief handoff, and a responsive footer. No backend, router, CMS, form submission, or persistent state.

## Structure

| Path | Responsibility |
|---|---|
| `index.html` | Metadata, favicon/share identity, font/video preconnects, and React mount point |
| `public/velorah-stills/` | Ten optimized 720/1440 WebP frames from the approved film |
| `public/velorah-*` | Local favicon plus SVG/PNG social-card assets |
| `assets/generated/` | Repository GIF evidence; not imported by the runtime app |
| `assets/images/showcase/` | Repository README screenshots; not imported by the runtime app |
| `src/main.tsx` | Validates the root element and mounts React |
| `src/app.tsx` | Page shell, video hero, and ordered section composition |
| `src/components/site-header.tsx` | Fixed desktop navigation, active state, mobile disclosure, and CTA |
| `src/hooks/use-page-navigation.ts` | Observer state plus rAF fast-scroll and short-landscape recovery |
| `src/hooks/use-initial-hash-anchor.ts` | Direct-fragment alignment while initial layout settles |
| `src/components/viewport-video.tsx` | Shared silent inline media plus viewport play/pause policy |
| `src/components/cinematic-image.tsx` | Dimensioned responsive lazy image primitive |
| `src/components/site-footer.tsx` | Always-visible navigation, project brief, and legal copy |
| `src/components/sections/` | Studio reel, About, Journal, and Reach Us rendering |
| `src/components/section-reveal.tsx` | One-shot observer reveal plus fast-scroll/no-API recovery |
| `src/components/ui/button.tsx` | shadcn-compatible typed button variants |
| `src/content/about-content.ts` | About narrative, three-part Working model, four-step method, outcomes, and closing statement |
| `src/content/journal-content.ts` | Current thread, three typed entries, body copy, and recurring questions |
| `src/content/site-navigation.ts` | Typed header/footer anchor definitions |
| `src/content/site-media.ts` | Shared MP4 source and typed film-still catalog |
| `src/content/site-contact.ts` | Enabled repository project-brief destination |
| `src/index.css` | Tailwind import, tokens, glass, motion, Journal toggle, and reduced-motion rules |
| `src/**/*.test.tsx` | Page, header, media, reveal, hash, Button, and accessibility contracts |

## Runtime flow

1. The document starts font/media connections and declares canonical PNG/SVG identity assets before mounting the bundle.
2. `App` composes Home, Studio, About, Journal, Reach Us, and the footer in that order.
3. `useInitialHashAnchor` aligns direct fragments immediately and re-aligns during the two-second font/body layout-settling window. User input cancels the current corrective work; `hashchange` retargets the hook and starts a fresh settling cycle for the new fragment. Section `scroll-margin` keeps the target 96px below the fixed header.
4. `usePageNavigation` observes from the same 96px header offset and uses a throttled scroll fallback when a jump skips observer entries. The fallback uses at least a 97px probe, preserving active state in short landscape viewports. Without the API, state remains Home/transparent.
5. The header renders inline desktop links or a mobile disclosure. Opening focuses Home; selection, Escape, or a `md` resize closes it; Escape returns focus to the menu button.
6. Hero and Studio instantiate the shared media component with one MP4. Hero preloads automatically; the reel preloads metadata. Each requests playback at 25% intersection and pauses otherwise.
7. Section reveals become permanently visible on first intersection. A passive scroll fallback exposes skipped sections; missing observer support exposes all content immediately.
8. About renders static content from `about-content.ts`: a three-entry definition list, four-step ordered list with outcomes, and closing statement.
9. Journal renders its first entry and all three body paragraphs directly. The other two entries use native `details`/`summary`; visually hidden title text gives each disclosure a unique accessible name. Three question rows close the section.
10. Reduced-motion CSS disables entrance, reveal, mobile-menu, image, Journal-toggle, contact-arrow, and smooth-scroll transitions. It does not disable video playback.

## External boundaries

- Google Fonts: Instrument Serif and Inter.
- CloudFront: one public MP4 shared by hero and Studio reel.
- GitHub Issues: enabled repository channel for new project briefs.
- Vercel: static production hosting at `https://velorah-dream.vercel.app/`.
- npm dependencies: pinned through `package-lock.json`.

The app accepts no form input and stores no user data, credentials, or tokens. Project-brief links hand off to GitHub in a new tab.

## Verification

Current release evidence records 24 passing tests across 6 files, enforced coverage thresholds, lint, production build, zero-vulnerability audit, docs validation, GIF inspection, and five-viewport Chromium QA. See the [automated report](../plans/260718-2159-velorah-rich-sections-gif-vercel/reports/tester-2026-07-19-editorial-refresh.md), [browser QA](../plans/260718-2159-velorah-rich-sections-gif-vercel/reports/browser-qa-2026-07-19-editorial-refresh.md), and [GIF evidence](../plans/260718-2159-velorah-rich-sections-gif-vercel/reports/gif-evidence-2026-07-19-editorial-refresh.md).
