---
type: reviewer
date: 2026-07-18
scope: velorah-cinematic-hero
status: passed
---

# Code review — Velorah cinematic hero

## Scope

- React/Vite/Tailwind/shadcn scaffold, hero implementation, tests, and project docs.
- Focus: objective compliance, responsive behavior, accessibility, dependency safety, and external-media failure modes.

## Specification compliance

| Requirement | Status | Evidence |
|---|---|---|
| Fullscreen supplied MP4 | Pass | Absolute cover video; exact URL tested |
| Autoplay, loop, muted, inline | Pass | DOM tests and live-browser media state |
| Instrument Serif and Inter | Pass | Theme variables and computed browser fonts |
| Exact HSL theme | Pass | Semantic tokens in `src/index.css` |
| Responsive glass navigation | Pass | Desktop/tablet/mobile screenshots |
| Exact hero copy and emphasis | Pass | DOM assertions and screenshots |
| Exact liquid-glass treatment | Pass | Shared Button variant and CSS mask |
| Staggered fade-rise motion | Pass | Exact timing classes present |
| No page overlays/blobs/radials | Pass | Source and rendered-page inspection |
| Responsive, reduced-motion, keyboard safe | Pass | Browser metrics and focus tests |

## Edge-case scout

- External video unavailable: deep-navy background preserves content and layout.
- External fonts unavailable: serif/sans-serif fallbacks preserve content.
- Autoplay policy: muted inline playback confirmed in Chromium.
- Small mobile: no horizontal overflow; desktop links hidden; CTA touch target 44px.
- Short landscape: content remains reachable via vertical scroll; no clipping or horizontal overflow.
- Reduced motion: entrance animations disabled.
- Root mount missing: explicit startup error prevents silent failure.

## Code quality

- Source files remain below 200 lines.
- No shared mutable state, async ordering, user input, auth boundary, or data persistence.
- TypeScript strict mode and typed shadcn variants; no `any` escape.
- App-only Vitest discovery prevents tool-skill tests from contaminating coverage.
- Focused tests cover content, media attributes, navigation, CTAs, and skip target.

## Adversarial review

### Accepted and fixed

1. Skip link focus style inherited zero padding from `sr-only`; fixed with focus-state padding.
2. Hash navigation scrolled without moving focus; fixed with a programmatically focusable main target.

### Rejected as blockers

- Remote media/font availability: decorative dependencies have explicit visual/font fallbacks and no protected data.
- Lack of video scrim: objective explicitly prohibits overlays; representative frames were visually inspected.

### Open findings

- Critical: 0
- High: 0
- Medium: 0
- Low: 0

## Known limitation

Studio, About, Journal, and Reach Us destinations are hash placeholders because their page content is outside the approved hero scope.

## Unresolved questions

- None.
