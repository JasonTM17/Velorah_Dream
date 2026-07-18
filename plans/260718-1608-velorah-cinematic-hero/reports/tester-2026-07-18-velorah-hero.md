---
type: tester
date: 2026-07-18
scope: velorah-cinematic-hero
status: passed
---

# Test report — Velorah cinematic hero

## Test results overview

- Total: 5
- Passed: 5
- Failed: 0
- Skipped: 0
- Coverage run: 13.86s

## Coverage metrics

| Metric | Value | Threshold | Status |
|---|---:|---:|---|
| Lines | 100% | 80% | Pass |
| Branches | 100% | 70% | Pass |
| Functions | 100% | 80% | Pass |
| Statements | 100% | 80% | Pass |

## UI test results

| Viewport | Result | Evidence |
|---|---|---|
| 1440×900 | Pass | [Desktop screenshot](./screenshots/desktop-1440x900.png) |
| 768×900 | Pass | [Tablet screenshot](./screenshots/tablet-768x900.png) |
| 375×812 | Pass | [Mobile screenshot](./screenshots/mobile-375x812.png) |
| 812×375 | Pass; vertical scroll expected | [Landscape screenshot](./screenshots/landscape-812x375.png) |

- Console messages: 0
- Uncaught page errors: 0
- Horizontal overflow: 0px at tested widths
- Mobile navigation: hidden at 375px
- Header CTA: 44px rendered height at 375px
- Video: ready state 4, muted, looping, inline, actively playing
- Fonts: Inter body and Instrument Serif heading resolved
- Reduced motion: all three entrance animations resolve to `none`
- Keyboard: skip link renders at 48px height and moves focus to `main-content`

## Build and dependency status

- Lint: pass, exit 0
- Production build: pass, 24 modules transformed
- JavaScript bundle: 71.48kB gzip
- CSS bundle: 4.66kB gzip
- npm audit: 0 vulnerabilities
- Documentation validation: pass

## Critical issues

- None.

## Recommendations

- Recheck remote video/font availability during deployment smoke tests.

## Unresolved questions

- None.
