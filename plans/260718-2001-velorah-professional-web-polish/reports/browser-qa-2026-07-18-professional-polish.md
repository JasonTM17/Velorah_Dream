---
type: browser-qa
date: 2026-07-18
scope: velorah-professional-web-polish
status: passed
---

# Browser QA — professional polish

## Environment

- Vite development build at `http://127.0.0.1:5173/`
- Chromium through agent-browser
- Viewports: 1440×900, 768×900, 375×812, 320×812, 812×375

## Results

| Contract | Evidence | Result |
|---|---|---|
| Persistent header | Transparent on Home; `data-surface="solid"` after hero | Pass |
| Section state | Home, Studio, and Reach Us became the sole `aria-current="location"` item after native anchor/scroll transitions | Pass |
| Mobile disclosure | Menu focuses Home; Escape returns focus; mobile-link, logo, CTA, and 768px resize paths close it | Pass |
| Anchor clearance | At 812×375 Reach Us H2 top was 209px while header bottom was 93px | Pass |
| Moving media | Home: hero playing/reel paused; Studio reel in view: hero paused/reel playing | Pass |
| Media fallback | Hero `preload=auto`; reel `preload=metadata`; both share one MP4 source | Pass |
| Identity | Favicon and social-card requests returned HTTP 200; OG/Twitter tags present | Pass |
| Overflow | 0px at 1440, 768, 375, 320, and 812 landscape | Pass |
| Reduced motion | Media query matched; document scroll behavior became `auto`; hero animation name became `none` | Pass |
| Console | Vite/React informational messages only; no page errors | Pass |
| Reveals | 15/15 reveal wrappers became visible after natural viewport entry | Pass |

## Fresh vitals

Measured after moving font loading to document preconnect/stylesheet hints:

- TTFB: 37.3ms
- FCP: 408ms
- LCP: 408ms
- CLS: 0
- LCP element: header link

## Screenshots

- `screenshots/desktop-1440x900-full-revealed.png`
- `screenshots/mobile-375x812-home.png`
- `screenshots/mobile-375x812-menu.png`
- `screenshots/tablet-768x900-reach-us.png`
- `screenshots/landscape-812x375-anchor-reach-us.png`

## Unresolved questions

- None.
