# GIF Motion Evidence — Editorial Refresh

## Scope

- Source: current Velorah React runtime at `http://127.0.0.1:4173/`
- Browser: Chromium automation against the real rendered UI
- Date: 2026-07-19
- Coverage: animated hero, full site, mobile navigation, and the expanded About/Journal sections

## Capture Method

Deterministic Chromium screenshots were captured from real rendered states and assembled with FFmpeg `palettegen`/`paletteuse`. ImageMagick then optimized frame deltas without changing the visual sequence. No synthetic interface frames or unrelated-site captures remain in the repository artifacts.

## Artifacts

| File | Dimensions | Frames | Duration | Rate | Size | Loop |
|---|---:|---:|---:|---:|---:|---:|
| `assets/generated/velorah-hero-motion.gif` | 800x450 | 24 | 6.00s | 4 fps | 2,433,452 B | Infinite |
| `assets/generated/velorah-full-site-motion.gif` | 800x450 | 24 | 8.00s | 3 fps | 297,681 B | Infinite |
| `assets/generated/velorah-mobile-navigation.gif` | 375x812 | 18 | 6.00s | 3 fps | 540,641 B | Infinite |
| `assets/generated/velorah-editorial-sections-motion.gif` | 800x450 | 24 | 8.00s | 3 fps | 214,559 B | Infinite |

FFprobe independently confirmed every dimension, duration, frame count, and frame rate. ImageMagick reports `Iterations: 0`, the GIF value for infinite looping.

## SHA-256

- Hero: `14196A79AD5B7D00626C85343B1F61DBF9DC758E3B121C29ABA1729B98B14A2C`
- Full site: `3BDCD94D409A0B0EFABD40C8763FFBB038BCED6D1D42B9A4554A995ECD0A617C`
- Mobile navigation: `5C68137005CC752B7E242DFE524DC0B535C6544DAF410DF2A90A4120B6EDC4CB`
- Editorial sections: `D854FB61259C189452A6A7A6546752FE8322A62478D7D82D9D3E30BA28C684D9`

## Visual Inspection

- Hero evidence preserves the supplied looping film, exact headline, liquid-glass actions, and staggered `0/.2/.4s` entrance sequence.
- Full-site evidence traverses Home, Studio, expanded About, expanded Journal, Reach Us, and the footer in the approved order.
- Mobile evidence shows the closed and open navigation disclosure, About, Journal, a native note disclosure row, and the responsive footer at 375px.
- Editorial evidence focuses on About's working model and method plus Journal's current thread, featured entry, and additional notes.
- Every contact sheet was inspected at original resolution. The copy, brand, imagery, and navigation all belong to Velorah; obsolete contact text is absent.

## Contact Sheets

- `screenshots/full-site-motion-contact-sheet.jpg`
- `screenshots/mobile-navigation-contact-sheet.jpg`
- `screenshots/editorial-sections-motion-contact-sheet.jpg`

## Result

All four motion artifacts are valid, optimized, repository-ready, and aligned with the current expanded editorial sections. Public Vercel runtime checks are recorded separately in the production browser-QA report.

## Unresolved Questions

None.
