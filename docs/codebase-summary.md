# Codebase summary

## Current state

Production-ready cinematic single-page frontend with five anchored sections and a responsive footer. No backend, routing layer, or persistent state.

## Structure

| Path | Responsibility |
|---|---|
| `index.html` | Document metadata and React mount point |
| `src/main.tsx` | Validates the root element and mounts React |
| `src/app.tsx` | Page shell, video hero, and section composition |
| `src/components/site-header.tsx` | Brand, desktop navigation, and header CTA |
| `src/components/site-footer.tsx` | Mobile-visible navigation, contact, and legal copy |
| `src/components/sections/` | Studio, About, Journal, and Reach Us content |
| `src/components/section-heading.tsx` | Shared editorial section heading pattern |
| `src/components/section-reveal.tsx` | One-shot observer reveal with a no-API fallback |
| `src/components/ui/button.tsx` | shadcn-compatible typed button variants |
| `src/content/site-navigation.ts` | Shared header/footer anchor definitions |
| `src/lib/utils.ts` | Tailwind class composition helper |
| `src/index.css` | Tailwind import, theme tokens, glass effect, and motion |
| `src/app.test.tsx` | Full-page DOM, navigation, motion, and accessibility contracts |
| `vitest.config.ts` | App-only test discovery and coverage thresholds |

## Runtime flow

1. Browser loads `index.html` and the Vite bundle.
2. `main.tsx` mounts `App` into `#root`.
3. `App` starts the decorative muted video, renders the header and hero, then composes four editorial sections and the footer.
4. The section reveal component observes content once; it exposes content immediately when the browser API is absent.
5. Tailwind utilities and global CSS apply responsive layout, theme, glass, and reduced-motion behavior.
6. Remote font/video failure falls back to local font families and the deep-navy page background.

## External dependencies

- Google Fonts: Instrument Serif and Inter.
- CloudFront: supplied Velorah hero MP4.
- npm dependencies are pinned through `package-lock.json`.

## Data and security

The app accepts no user input and stores no user data, credentials, or tokens. The only network reads are public font and video resources. Contact links hand off to the visitor's local email client.
