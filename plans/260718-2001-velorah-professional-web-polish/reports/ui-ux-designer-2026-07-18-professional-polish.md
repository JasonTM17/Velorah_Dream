---
type: ui-ux-designer
date: 2026-07-18
scope: velorah-professional-web-polish
status: ready
---

# Velorah professional polish audit

## Evidence

- Existing page already owns a distinctive thesis: supplied moving night-sky film, restrained glass, Instrument Serif, navy field, and editorial hairlines.
- Desktop composition is coherent; below-hero sections become long static text runs.
- Header is absolute, so primary navigation disappears after the hero.
- Active state is stored as static content (`Home: true`) rather than page state.
- Mobile header exposes brand and CTA but no immediate section navigation.
- Document has title/description/theme color, but no favicon or social preview identity.

## Direction

Keep **quiet cinematic editorial**. Reject the database suggestion for kinetic brutalism, blue/orange accents, marquees, and aggressive motion: it would erase the verified brand and violate the no-slop brief.

- Design variance: 6/10 — asymmetry lives in section grids and reel caption.
- Motion intensity: 5/10 — video plus one-shot reveals; no perpetual UI animation.
- Visual density: 4/10 — generous whitespace and ruled rows remain the system.
- Signature: one film appears first as a world, later as a cropped studio process reel.

## Production upgrades

### Persistent navigation

- Keep the current 7xl horizontal geometry and exact link/CTA wording.
- Fix header at the top. Transparent over the hero; after hero departure use tinted navy translucency, one hairline, and fixed-element blur only.
- Current section gets foreground color and `aria-current="location"`; inactive links remain muted.
- Avoid animated top/height/padding. Transition opacity/color only when header surface state changes.

### Mobile disclosure

- Preserve the header CTA and add a 44×44 custom SVG menu control.
- Open a right-aligned navy panel below the header, not a full-screen decorative overlay.
- Links are at least 44px tall. Focus first link on open; Escape closes and returns focus; selection and desktop resize close.
- Menu icon morph may use transform only; reduced motion removes it.

### Moving studio reel

- Place below Studio disciplines as a wide asymmetric figure: full-width film first, small index/caption beneath in separate DOM.
- No overlay copy, gradient, glow, grain, card shell, or generic rounded surface.
- Use the supplied source; crop via `object-cover` and a different object position.
- Pause every video outside its viewport. Reel preloads metadata only. Maintain aspect ratio to protect CLS.

### Identity

- Favicon: white Instrument-style V silhouette on exact navy.
- Social card: navy canvas, quiet white wordmark, one sentence; no stock imagery or invented claims.
- Add `og:title`, `og:description`, `og:type`, `og:image`, `twitter:card`, and local favicon. Do not invent canonical URL before deployment is known.

## Guardrails

- Exact hero copy, source, typography, token values, glass formula, and timing stay unchanged.
- No dependency, router, CMS, backend, fake article links, legal placeholders, blob, radial gradient, decorative page overlay, or repeated generic cards.
- Touch targets ≥44px; visible focus; no hover-only meaning; heading order stays H1→H2→H3.
- Test 375, 768, 812 landscape, 1440; 200% zoom; reduced motion; no overflow.
- Video play promise rejection is handled; observer disconnects on unmount; no scroll event listener.

## Unresolved questions

- Production domain and raster social-card pipeline are unknown; keep metadata URLs relative for this static build.
