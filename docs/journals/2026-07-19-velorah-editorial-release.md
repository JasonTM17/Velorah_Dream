---
type: journal
date: 2026-07-19
session: velorah-editorial-release
severity: medium
component: release-evidence-browser-qa-and-navigation
status: resolved
---

# Velorah Editorial Release: Evidence Before Confidence

## Context

Released expanded About and Journal sections to Vercel, rebuilt motion evidence, and verified the public alias.

## What Happened

Twice, release evidence was wrong. A local capture hit an Aethera process rather than Velorah. We replaced every affected frame before commit. The first Velorah full-site GIF also followed the wrong scroll sequence; original-resolution contact-sheet inspection forced a clean recapture.

Agent-browser sessions fanned out until they created process pressure. Cleanup targeted only temporary agent-browser Chrome; killing all Chrome was rejected to protect unrelated user state.

Independent review found real code defects before release: reduced-motion CSS removed the Journal toggle's open-state distinction, and direct-hash correction could race a visitor's newer hash choice. These were fixed before the final redeploy.

## The Brutal Truth

This was embarrassing and exhausting: productive-looking tooling generated evidence we could not trust. We treated media as finished before proving source identity and sequence. Relief came only when contact sheets, regression tests, and public hashes agreed.

## Technical Evidence

- Released revision `83b899450769b6901b16f30ef5d88b01bb5215f1`.
- Full-site GIF: 800x450, 24 frames, 8.00s, SHA-256 `3BDCD94D409A0B0EFABD40C8763FFBB038BCED6D1D42B9A4554A995ECD0A617C`.
- Gates: 24/24 tests, 0 lint findings, successful build, 0 high-level audit vulnerabilities.
- Production served `index-B34OlyQ3.css` and `index-BuzDPlOY.js`; five viewports returned HTTP 200, zero overflow, and zero console/page errors.
- Early About-to-Journal navigation settled on `#journal` with 96px clearance; reduced motion kept `0s` transitions while immediately rotating the open toggle 45 degrees.

## Decisions and Rejected Alternatives

| Decision | Rejected alternative | Why |
|---|---|---|
| Recapture from the verified Velorah runtime and inspect contact sheets | Keep or cosmetically patch suspect frames | Wrong-source evidence is not evidence. |
| Cancel stale observers, timers, and frames on hash changes | Accept occasional snap-back as minor polish | It overrides explicit visitor intent. |
| Verify public hashes at five viewports after redeploy | Trust local or prior output | Production identity must be proven. |

## Root Cause and Lessons

Capture identity and browser-session lifecycle were not gated. Reduced motion was confused with removing state feedback, and hash alignment lacked complete async cancellation. Future releases must verify frame-one source, inspect sequences before staging, and test interruption, not only happy-path settling.

## Next Steps

| Action | Owner | When |
|---|---|---|
| Check page identity and expected asset hashes before capture | QA operator | Before every evidence run |
| Limit browser fan-out and clean only tagged temporary sessions | Automation operator | During and immediately after each run |
| Require contact-sheet approval before staging GIFs | Release reviewer | Before every motion-evidence commit |
| Retain reduced-motion and stale/new-hash regression checks | Test owner | In every release gate |
| Recheck five viewports and public CSS/JS hashes | Deployment operator | Immediately after alias changes |

## Unresolved Questions

None.
