# Design guidelines

## Direction

Minimal, cinematic, and quiet. The background film provides all atmosphere. Typography and negative space carry the composition; UI chrome stays secondary.

## Typography

| Role | Family | Weight |
|---|---|---|
| Display and logo | Instrument Serif | 400 |
| Body and controls | Inter | 400/500 |

Hero type uses `text-5xl sm:text-7xl md:text-8xl`, `0.95` line-height, and `-2.46px` tracking. Muted emphasis stays upright, not italic.

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

## Layout

- Full viewport uses mobile-safe `svh`/`dvh` units.
- Header content stays within `max-w-7xl` with adaptive gutters.
- Hero content remains centered with a `max-w-7xl` heading and `max-w-2xl` copy.
- Desktop navigation appears at `md`; brand and CTA remain at all widths.
- Short landscape viewports may scroll vertically rather than compressing the specified display type.

## Glass controls

Use the shared `glass` Button variant. It combines 1% white fill, 4px backdrop blur, subtle inset light, and a masked vertical border gradient. Do not add outer glow.

## Motion and interaction

- Headline enters at `0s`, copy at `0.2s`, CTA at `0.4s`.
- Entrance duration is `0.8s ease-out` with 24px vertical travel.
- Hover scales glass controls to `1.03`; active state scales to `0.98`.
- Reduced-motion mode removes entrance animations and shortens interaction transitions.
- Keyboard users receive a visible skip link and focus treatment.

## Prohibited treatments

- Decorative blobs or grain overlays.
- Page-wide scrims or radial gradients.
- Gradient display text.
- Additional cards, sections, or ornaments without a revised product brief.
