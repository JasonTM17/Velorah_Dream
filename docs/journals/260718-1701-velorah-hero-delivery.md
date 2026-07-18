---
type: journal
date: 2026-07-18
tags: [frontend, testing, delivery]
---

# Velorah hero delivery

## Context

Built the first Velorah page from an empty governed workspace: React/Vite/Tailwind/shadcn scaffold, cinematic video hero, tests, browser QA, docs, and Git history.

## What happened

- Implemented the exact video, typography, color, glass, spacing, and motion brief.
- Kept the design restrained despite generic design-system suggestions for extra sections, parallax, and alternate colors.
- Browser QA caught two skip-link defects that unit tests alone did not: focused padding collapsed to 24px, then hash navigation left focus on `body`.
- Fixed both issues and locked the focus-target contract with a fifth component test.

## Friction

`npm run test:coverage` twice exceeded 120 seconds with no useful terminal output. That was frustrating because the focused suite already passed and the silence initially looked like a V8 coverage deadlock.

Process evidence told the real story: `coverage/.tmp` accumulated 57 reports from tests bundled inside `.agents`, `.claude`, and `.codex`. Vitest had no app-only discovery pattern. Adding `include: ["src/**/*.test.{ts,tsx}"]` reduced the same coverage run to seconds and restored deterministic output.

## Decisions

- Use Tailwind 4 through the official Vite plugin; no legacy PostCSS config.
- Pin current compatible packages; keep TypeScript at 6.0.3 because `typescript-eslint` does not yet accept TypeScript 7.
- Keep short landscape layouts scrollable instead of shrinking the specified 8xl editorial headline.
- Treat remote media as decorative: deep navy and font fallbacks preserve content if the network fails.

## Validation

- 5/5 tests passed.
- 100% measured lines, functions, statements, and branches.
- Lint, production build, dependency audit, and documentation validation passed.
- Four responsive viewports, reduced motion, video playback, console, and keyboard focus checked in Chromium.

## Lesson

In tool-heavy repositories, every test runner needs an explicit project boundary. Default discovery is not harmless when hidden workflow directories contain executable fixtures and tests.

## Next

No follow-up required for the approved hero scope. Secondary navigation content needs a separate product brief.
