# Browser QA Report

## Scope

- Artifact: current `dist/` served by `vite preview` at `127.0.0.1:4174`
- Browser: Chromium through Playwright MCP
- Viewports: 320x568, 375x812, 768x1024, 812x375, 1440x900
- Date: 2026-07-18

## Responsive Matrix

| Check | 320 | 375 | 768 | 812L | 1440 |
|---|---:|---:|---:|---:|---:|
| Horizontal overflow | 0 | 0 | 0 | 0 | 0 |
| Studio anchor top | 96px | 96px | 96px | 96px | 96px |
| Mobile menu | Flex | Flex | Hidden | Hidden | Hidden |
| Header CTA target | 137x44 | 137x44 | 145x44 | 145x44 | 145x44 |
| Studio reel in view | Plays | Plays | Plays | Plays | Plays |
| Videos at page end | Both paused | Both paused | Both paused | Both paused | Both paused |
| Fast-scroll reveals | 23/23 | 23/23 | 23/23 | 23/23 | 23/23 |

At page end, fast-scroll section state resolves to `Reach Us`, the header surface
is solid, and intermediate reveal blocks are not left hidden. Sequential section
navigation loaded every lazy image (`incompleteImages: 0`) at all five widths.

## Navigation and Accessibility

- Direct `/#studio` resolves to Studio, 96px below the fixed header.
- Direct `/#reach-us` resolves to Reach Us (99px measured after font layout).
- Five mobile-menu links each measure 44px high.
- Menu open focuses Home; Escape closes it and returns focus to the menu button.
- Resizing an open 320px menu to 768px closes and removes the disclosure.
- Current header item is the sole `aria-current="location"` item.
- All internal hash destinations exist; heading order is one H1 followed by
  section H2s and nested H3/H4 content.

## Motion and Media

- Home state: hero video playing, Studio reel paused.
- Reel-centered state: hero paused, Studio reel playing.
- Page-end state: both videos paused.
- Reduced motion: hero animation `none`, section/arrow transitions `0s`, section
  transforms `none`, and document scroll behavior `auto`.
- Missing-IntersectionObserver content fallback is covered by the component suite.

## Runtime Integrity

- Chromium page errors: 0.
- Chromium console errors/warnings on production preview: 0/0.
- Broken hash links: 0.
- Dead `mailto:` actions: 0.
- Project brief uses the repository's enabled GitHub Issues channel in a new tab.

## Evidence

- `screenshots/final-desktop-1440-full-page.png`
- `screenshots/final-desktop-1440-home.png`
- `screenshots/final-desktop-1440-studio.png`
- `screenshots/final-desktop-1440-journal.png`
- `screenshots/final-desktop-1440-reach-us.png`
- `screenshots/final-mobile-375-home.png`
- `screenshots/final-mobile-375-menu.png`
- `screenshots/final-mobile-375-reach-us.png`

## Boundary

These are local production-build measurements. Phase 4 repeats critical checks
against the public Vercel URL before making production claims.

## Unresolved Questions

None.
