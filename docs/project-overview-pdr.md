# Velorah Dream product requirements

## Overview

Velorah Dream is a complete single-page brand experience for deep thinkers, bold creators, and quiet rebels. A fullscreen film creates the entry point, then a restrained editorial system carries visitors through the studio offering, philosophy, journal perspective, and contact path.

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
- Provide substantive Studio, About, Journal, and Reach Us sections.
- Make every navigation item resolve to a real in-page target.
- Expose all section links in the footer for narrow screens.
- Provide a `mailto:` contact action for `hello@velorah.com`.
- Reveal section content once as it enters the viewport, without an animation dependency.

## Quality requirements

- Use React, Vite, TypeScript, Tailwind CSS, and a shadcn/ui-compatible Button.
- Preserve exact HSL tokens, Instrument Serif/Inter pairing, and staged fade-rise timing.
- Avoid decorative overlays, blobs, and radial gradients.
- Prevent horizontal overflow at 375px, 768px, and 1440px widths.
- Keep content accessible when remote fonts or video are unavailable.
- Provide visible focus, skip navigation, and reduced-motion behavior.
- Pass lint, unit tests, coverage thresholds, and production build.
- Preserve semantic heading order and accessible section names.
- Keep reveal content visible when the browser observer API is unavailable or reduced motion is requested.

## Out of scope

- Backend services, authentication, persistence, analytics, or forms.
- Standalone journal detail pages or a content management system.
- Email delivery infrastructure beyond the operating system `mailto:` action.
- Theme switching or alternative visual modes.

## Acceptance evidence

See the active plan reports under `plans/260718-1608-velorah-cinematic-hero/reports/` for automated and browser verification.

## Unresolved questions

- None.
