# Design guidelines

## Direction

Minimal, cinematic, and quiet. The film provides atmosphere; typography, editorial rules, and negative space carry the page. UI chrome stays secondary. The same source returns in Studio as a cropped process reel, creating continuity without adding decoration.

## Typography

| Role | Family | Weight |
|---|---|---|
| Display and logo | Instrument Serif | 400 |
| Body and controls | Inter | 400/500 |

Hero type uses `text-5xl sm:text-7xl md:text-8xl`, `0.95` line-height, and `-2.46px` tracking. Muted emphasis stays upright, not italic. Fonts load from the document stylesheet after preconnect hints.

## Color tokens

| Token | HSL |
|---|---|
| Background | `201 100% 13%` |
| Foreground | `0 0% 100%` |
| Muted foreground | `240 4% 66%` |
| Primary | `0 0% 100%` |
| Primary foreground | `0 0% 4%` |
| Secondary / muted / accent | `0 0% 10%` |
| Border / input | `0 0% 18%` |

## Layout and navigation

- Full viewport uses mobile-safe `svh`/`dvh` units.
- Header content and editorial sections stay within `max-w-7xl` with adaptive gutters.
- The header is fixed: transparent over Home and tinted navy with one hairline after the hero ratio falls below 55%.
- Desktop navigation appears at `md`. Narrow screens retain brand and CTA plus a 44px disclosure control.
- Current desktop/mobile anchor uses foreground color and `aria-current="location"`.
- Mobile links are at least 44px tall; opening focuses Home; Escape closes and returns focus; selection and desktop resize close.
- Footer navigation remains visible at every width as a second route to all sections.
- Anchored sections use 96px scroll clearance; direct fragments align after mount.
- Studio, principles, and Journal use ruled rows rather than interchangeable cards.
- The Studio reel is a wide asymmetric figure with its caption outside the media; no overlay copy or card shell.

## Glass controls

Use the shared `glass` Button variant. It combines 1% white fill, 4px backdrop blur, subtle inset light, and a masked vertical border gradient. Do not add outer glow.

## Motion and media

- Headline enters at `0s`, copy at `0.2s`, CTA at `0.4s`; duration is `0.8s ease-out` with 24px travel.
- Below-hero content reveals once with 32px vertical travel.
- Film stills settle from `1.035` scale and use restrained `1.018` pointer hover.
- Mobile disclosure uses a 0.2s transform/opacity entrance and a transform-only icon morph.
- Hover scales glass controls to `1.03`; active state scales to `0.98`.
- Hero and reel share the supplied silent looping MP4. Hero uses `preload="auto"`; reel uses `preload="metadata"`.
- Video attempts playback at 25% visibility, pauses outside view, and contains autoplay rejection.
- Reduced-motion mode removes CSS entrance/reveal/disclosure/hover animation and smooth scrolling. It does not stop video.

## Identity

- `public/velorah-mark.svg` is the local tab icon.
- `public/velorah-social-card.svg` is the editable share source.
- `public/velorah-social-card.png` is the 1200x630 Open Graph/Twitter asset.
- Canonical and share URLs use `https://velorah-dream.vercel.app/`.

## Prohibited treatments

- Decorative blobs, grain overlays, page-wide scrims, or radial gradients.
- Gradient display text.
- Generic card grids, decorative section backgrounds, or ornaments without product purpose.
- Full-screen mobile menu overlays or hover-only meaning.
