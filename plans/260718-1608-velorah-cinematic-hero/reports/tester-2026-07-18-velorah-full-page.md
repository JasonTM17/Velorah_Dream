---
type: tester
date: 2026-07-18
scope: velorah-full-page
status: passed
---

# Test report — Velorah full page

## Automated gates

| Gate | Result |
|---|---|
| Component tests | 9/9 passed |
| Lines | 97.43% (threshold 80%) |
| Branches | 92.3% (threshold 70%) |
| Functions | 100% (threshold 80%) |
| Statements | 97.5% (threshold 80%) |
| ESLint | Pass |
| TypeScript + Vite build | Pass; 32 modules transformed |
| npm audit | 0 vulnerabilities |

Production output: 74.26kB JavaScript gzip and 5.81kB CSS gzip.

## Browser matrix

| Viewport | Result | Evidence |
|---|---|---|
| 1440×900 | Pass | [Full desktop](./screenshots/full-page-desktop-1440x900.png) |
| 768×900 | Pass | [Tablet hero](./screenshots/full-page-tablet-768x900.png) |
| 375×812 | Pass | [Full mobile](./screenshots/full-page-mobile-375x812.png) |
| 812×375 | Pass; vertical scroll expected | [Short landscape](./screenshots/full-page-landscape-812x375.png) |

- Horizontal overflow: 0px at all tested widths.
- Header CTA height: 44px at 375px and 768px.
- Primary navigation: hidden at 375px; footer navigation remains visible.
- All 14 reveal wrappers became visible after natural section scrolling and stayed visible.
- Direct `#journal` navigation stopped at the intended 80px offset.
- Video: ready state 4, playing, muted, looping, and inline.
- Reduced motion: hero animation `none`; reveal opacity 1, transform `none`, transition 0s.
- Keyboard: first Tab exposes skip link; Enter moves focus to `main-content`.
- Console messages: 0. Uncaught page errors: 0.
- Browser vitals: CLS 0, FCP 112ms, LCP start 112ms, TTFB 3.2ms in local production preview.

## Unresolved questions

- None.
