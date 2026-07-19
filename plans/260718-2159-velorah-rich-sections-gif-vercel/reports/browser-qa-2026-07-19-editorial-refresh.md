# Browser QA Report — Editorial Refresh

## Scope

- Runtime: final public Vercel alias at `https://velorah-dream.vercel.app/`
- Browser: Google Chrome 150 through Playwright
- Viewports: 320x568, 375x812, 768x1024, 812x375, 1440x900
- Date: 2026-07-19

## Responsive Matrix

| Check | 320 | 375 | 768 | 812L | 1440 |
|---|---:|---:|---:|---:|---:|
| Horizontal overflow | 0 | 0 | 0 | 0 | 0 |
| Direct `#about` top | 96px | 96px | 96px | 96px | 96px |
| Direct-hash active item | About | About | About | About | About |
| Fast-scroll reveals | 18/18 | 18/18 | 18/18 | 18/18 | 18/18 |
| Loaded images after traversal | 8/8 | 8/8 | 8/8 | 8/8 | 8/8 |
| Active item at page end | Reach Us | Reach Us | Reach Us | Reach Us | Reach Us |
| Videos at page end | Both paused | Both paused | Both paused | Both paused | Both paused |

Every page returned HTTP 200. The Home state showed the hero playing and the Studio reel paused at every viewport. Both videos were muted, looping, ready, and paused after the page traversal.

## Editorial Content

- About exposes three Working model definition rows and four ordered method steps with visible outcomes.
- Journal exposes three articles, two native note disclosures, three recurring questions, and three loaded editorial images.
- The featured Journal body remains visible without interaction; only the two secondary notes use disclosure state.
- No viewport left a reveal block hidden after fast section traversal.

## Navigation and Accessibility

- Direct `/#about` re-aligned after fonts/layout settled and retained exactly 96px fixed-header clearance at all five viewports.
- The 812x375 landscape case retained `About` as the active navigation item instead of the preceding Studio section.
- Navigating from About to Journal 120ms after load finished at `#journal`, 96px clearance, and active Journal after layout settled; no stale-target snap-back occurred.
- At 375px, opening the menu focused Home and exposed five 44px link rows.
- Escape removed the disclosure and restored focus to the “Open navigation menu” control.
- Resizing an open mobile disclosure to 768px removed it; the desktop navigation replaced the CSS-hidden menu control.
- Journal summaries retained unique accessible names containing their entry titles.

## Reduced Motion

Chrome emulation with `prefers-reduced-motion: reduce` confirmed:

- document scroll behavior is `auto`;
- Journal summary and toggle transition durations are `0s`;
- the closed toggle uses the identity matrix;
- opening the native disclosure immediately applies a 45-degree matrix, preserving a visible `+` to `×` state change without motion.

## Runtime Integrity

- Page errors: 0
- Console errors: 0
- Console warnings: 0
- Broken/lazy images after traversal: 0
- Horizontal overflow cases: 0

## Production Identity

- App CSS: `index-B34OlyQ3.css`, HTTP 200, 33,540 bytes
- App JavaScript: `index-BuzDPlOY.js`, HTTP 200
- Canonical and `og:url`: `https://velorah-dream.vercel.app/`
- Open Graph/Twitter image: repository-owned `/velorah-social-card.png`, HTTP 200, `image/png`
- Project-brief links resolve to the enabled repository Issues route.

## Visual Evidence

The final PNGs below were recaptured from the public alias after fonts loaded,
the target hash settled to exactly 96px below the fixed header, and the reveal
queue completed. Each section capture was checked against its active navigation
label before staging; the mobile menu capture records the expanded disclosure.

- `assets/images/showcase/velorah-desktop-home.jpg`
- `assets/images/showcase/velorah-desktop-about.jpg`
- `assets/images/showcase/velorah-desktop-journal.jpg`
- `assets/images/showcase/velorah-mobile-navigation.jpg`
- `assets/images/showcase/velorah-mobile-journal.jpg`
- `screenshots/production-desktop-1440-home.png`
- `screenshots/production-desktop-1440-about.png`
- `screenshots/production-desktop-1440-journal.png`
- `screenshots/production-desktop-1440-reach-us.png`
- `screenshots/production-mobile-375-home.png`
- `screenshots/production-mobile-375-menu.png`
- `screenshots/production-mobile-375-about.png`
- `screenshots/production-mobile-375-journal.png`
- `screenshots/production-mobile-375-reach-us.png`
- `screenshots/full-site-motion-contact-sheet.jpg`
- `screenshots/mobile-navigation-contact-sheet.jpg`
- `screenshots/editorial-sections-motion-contact-sheet.jpg`

## Result

The final production alias matches the reviewed source and passes the complete responsive, motion, navigation, accessibility, media, and metadata matrix.

## Unresolved Questions

None.
