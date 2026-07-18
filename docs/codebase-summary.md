# Codebase summary

## Current state

Production-ready single-page frontend. No backend, routing layer, or persistent state.

## Structure

| Path | Responsibility |
|---|---|
| `index.html` | Document metadata and React mount point |
| `src/main.tsx` | Validates the root element and mounts React |
| `src/app.tsx` | Full-viewport video and hero composition |
| `src/components/site-header.tsx` | Brand, desktop navigation, and header CTA |
| `src/components/ui/button.tsx` | shadcn-compatible typed button variants |
| `src/lib/utils.ts` | Tailwind class composition helper |
| `src/index.css` | Tailwind import, theme tokens, glass effect, and motion |
| `src/app.test.tsx` | Hero DOM and accessibility contract tests |
| `vitest.config.ts` | App-only test discovery and coverage thresholds |

## Runtime flow

1. Browser loads `index.html` and the Vite bundle.
2. `main.tsx` mounts `App` into `#root`.
3. `App` starts the decorative muted video and renders the header and hero above it.
4. Tailwind utilities and global CSS apply responsive layout, theme, glass, and motion.
5. Remote font/video failure falls back to local font families and the deep-navy page background.

## External dependencies

- Google Fonts: Instrument Serif and Inter.
- CloudFront: supplied Velorah hero MP4.
- npm dependencies are pinned through `package-lock.json`.

## Data and security

The app accepts no user input and stores no user data, credentials, or tokens. The only network reads are public font and video resources.
