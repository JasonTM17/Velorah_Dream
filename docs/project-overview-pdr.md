# Velorah Dream product requirements

## Overview

Velorah Dream is a single-screen brand experience for deep thinkers, bold creators, and quiet rebels. The page uses one fullscreen film, restrained glass controls, and editorial typography to create a calm cinematic entry point.

## Audience

- Creative professionals seeking focused digital tools.
- Visitors encountering the Velorah brand for the first time.
- Mobile and desktop users, including keyboard and reduced-motion users.

## Functional requirements

- Display the supplied MP4 as a fullscreen muted, looping, inline background video.
- Present the Velorah logo, five navigation labels, and header CTA above the film.
- Present the supplied hero headline, supporting copy, and primary CTA.
- Hide navigation links below the `md` breakpoint while keeping brand and CTA available.
- Render both CTAs with the shared liquid-glass button variant.

## Quality requirements

- Use React, Vite, TypeScript, Tailwind CSS, and a shadcn/ui-compatible Button.
- Preserve exact HSL tokens, Instrument Serif/Inter pairing, and staged fade-rise timing.
- Avoid decorative overlays, blobs, and radial gradients.
- Prevent horizontal overflow at 375px, 768px, and 1440px widths.
- Keep content accessible when remote fonts or video are unavailable.
- Provide visible focus, skip navigation, and reduced-motion behavior.
- Pass lint, unit tests, coverage thresholds, and production build.

## Out of scope

- Backend services, authentication, persistence, analytics, or forms.
- Additional Studio, About, Journal, or Reach Us page content.
- Theme switching or alternative visual modes.

## Acceptance evidence

See the active plan reports under `plans/260718-1608-velorah-cinematic-hero/reports/` for automated and browser verification.

## Unresolved questions

- None.
