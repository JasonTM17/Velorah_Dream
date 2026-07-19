# GIF Motion Evidence

> Historical pre-refresh capture. The current four-artifact evidence set is in
> [`gif-evidence-2026-07-19-editorial-refresh.md`](./gif-evidence-2026-07-19-editorial-refresh.md).

## Capture Method

The browser recorder action was denied by the active automation policy. The safe
fallback captured deterministic screenshots from the live Chromium runtime and
assembled them through an FFmpeg palette pipeline. Every GIF therefore reflects
real rendered video/CSS/navigation states; no synthetic UI frames were used.

## Artifacts

| File | Dimensions | Frames | Duration | Rate | Size | Loop |
|---|---:|---:|---:|---:|---:|---:|
| `assets/generated/velorah-hero-motion.gif` | 800x450 | 24 | 6.00s | 4 fps | 2,433,452 B | Infinite |
| `assets/generated/velorah-full-site-motion.gif` | 800x450 | 22 | 7.33s | 3 fps | 1,179,116 B | Infinite |
| `assets/generated/velorah-mobile-navigation.gif` | 375x812 | 16 | 5.33s | 3 fps | 970,861 B | Infinite |

ImageMagick reports `Iterations: 0` for all three files, which is GIF infinite
looping. FFprobe independently confirmed dimensions, duration, and frame count.

## SHA-256

- Hero: `14196A79AD5B7D00626C85343B1F61DBF9DC758E3B121C29ABA1729B98B14A2C`
- Full site: `F38D2BE2CAF551541DC00256446D9702B3EBA6204481E129FDC157BF1D5000B6`
- Mobile: `652EE38633AA82874950771D529BD2D29B7F5B3C8F1F94A32EE526F01FC7B99E`

## Visual Inspection

- Hero evidence shows the supplied film playing behind the exact 0/.2/.4-second
  copy sequence and liquid-glass CTA.
- Full-site evidence traverses Studio, About, Journal, Reach Us, and footer.
- Mobile evidence shows hero load, disclosure open/focus states, Journal, and
  Reach Us navigation at 375px.
- Contact sheets: `screenshots/full-site-motion-contact-sheet.jpg` and
  `screenshots/mobile-navigation-contact-sheet.jpg`.

## Result

All three requested GIFs are valid, inspectable, optimized for repository use,
and committed in `dac4958`.

## Unresolved Questions

None.
