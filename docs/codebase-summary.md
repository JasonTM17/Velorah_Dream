# Codebase summary

## Current state

Production-polished static React/Vite single page with five anchored sections, a fixed section-aware header, accessible mobile disclosure, two viewport-managed video surfaces, and a responsive footer. No backend, router, form submission, or persistent state.

## Structure

| Path | Responsibility |
|---|---|
| `index.html` | Metadata, favicon/share identity, font/video preconnects, and React mount point |
| `public/velorah-*.svg` | Local favicon and social-card assets |
| `src/main.tsx` | Validates the root element and mounts React |
| `src/app.tsx` | Page shell, video hero, and section composition |
| `src/components/site-header.tsx` | Fixed desktop navigation, active state, mobile disclosure, and CTA |
| `src/hooks/use-page-navigation.ts` | Section and hero state through intersection observers |
| `src/components/viewport-video.tsx` | Shared silent inline media plus viewport play/pause policy |
| `src/components/site-footer.tsx` | Always-visible navigation, contact, and legal copy |
| `src/components/sections/` | Studio reel, About, Journal, and Reach Us content |
| `src/components/section-reveal.tsx` | One-shot observer reveal with a no-API fallback |
| `src/components/ui/button.tsx` | shadcn-compatible typed button variants |
| `src/content/site-navigation.ts` | Typed header/footer anchor definitions |
| `src/content/site-media.ts` | Shared public MP4 source |
| `src/index.css` | Tailwind import, tokens, glass, motion, and reduced-motion rules |
| `src/**/*.test.tsx` | Page, header, media, reveal, and accessibility contracts |

## Runtime flow

1. The document starts font/media connections and declares local SVG identity assets before mounting the bundle.
2. `App` composes Home, Studio, About, Journal, Reach Us, and the footer.
3. `usePageNavigation` observes a narrow viewport band for the active section and the hero ratio for header surface state. Without the API, state remains Home/transparent.
4. The header component renders inline desktop links or a mobile disclosure. Opening focuses Home; selection, Escape, or a `md` resize closes it; Escape returns focus to the menu button.
5. Hero and Studio instantiate the shared media component with one MP4. Hero preloads automatically; the reel preloads metadata. Each plays at 25% intersection and pauses otherwise.
6. Section reveals become permanently visible on first intersection; missing observer support exposes them immediately.
7. Reduced-motion CSS disables entrance/reveal/disclosure animation and smooth scrolling. It does not disable video playback.

## External boundaries

- Google Fonts: Instrument Serif and Inter.
- CloudFront: one public MP4 shared by hero and Studio reel.
- npm dependencies: pinned through `package-lock.json`.

The app accepts no input and stores no user data, credentials, or tokens. Contact links hand off to the visitor's email client.

## Verification

At the current milestone: 14 tests across 5 focused files; 98.87% statements, 92% branches, 100% functions, and 98.79% lines in the configured coverage scope. Lint, build, audit, docs validation, and multi-viewport Chromium QA pass. See the [automated report](../plans/260718-2001-velorah-professional-web-polish/reports/tester-2026-07-18-professional-polish.md) and [browser QA](../plans/260718-2001-velorah-professional-web-polish/reports/browser-qa-2026-07-18-professional-polish.md).
