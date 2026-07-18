---
phase: 3
title: "Verification Documentation and Release"
status: pending
effort: "1.5h"
priority: P1
dependencies:
  - 1
  - 2
---

# Phase 3: Verification Documentation and Release

## Overview

Prove the full website behavior in tests and a production browser, synchronize project truth, then deliver focused commits to the user-owned GitHub repository.

## Requirements

- Functional: all navigation/video/metadata flows verified at required viewports.
- Non-functional: worktree clean, coverage thresholds pass, no secrets, no console/page errors, remote push is fast-forward only.

## Architecture

Vitest covers deterministic component/hook contracts. Agent-browser verifies native media, focus, resize, anchor offsets, reduced motion, responsive screenshots, console, overflow, and vitals. CK reports preserve evidence under this plan.

## Related Code Files

- Modify: `README.md`
- Modify: `docs/codebase-summary.md`
- Modify: `docs/design-guidelines.md`
- Modify: `docs/project-overview-pdr.md`
- Modify: `docs/project-roadmap.md`
- Modify: `docs/system-architecture.md`
- Create: `plans/260718-2001-velorah-professional-web-polish/reports/*`

## Implementation Steps

1. Run tests, coverage, lint, production build, npm audit, and docs validation.
2. Test 1440×900, 768×900, 375×812, and 812×375 in Chromium; capture desktop/mobile evidence.
3. Verify active section, mobile menu open/Escape/selection/resize, focus order, video visibility playback, reduced motion, anchors, metadata assets, overflow, console, and vitals.
4. Run spec compliance, edge-case, quality, and adversarial reviews; fix accepted findings and re-run relevant gates.
5. Synchronize README/docs and all CK phase/plan statuses; write QA/review/progress/journal reports.
6. Keep feature, tests, identity, docs, and plan/report changes in focused conventional commits with secret scan.
7. Verify `origin`, inspect remote history, push `main` without force, and confirm `origin/main` matches local HEAD.

## Success Criteria

- [ ] Automated and browser gates pass with fresh evidence.
- [ ] No regression to exact hero, anchors, accessibility, performance, or public build contract.
- [ ] Docs and CK status match implemented reality; no unresolved findings remain.
- [ ] All commits exist on `origin/main`; local worktree is clean.

## Risk Assessment

- Remote may contain unrelated history. Fetch and compare before push; never force main. Stop for user decision on divergence.
- Browser media autoplay can differ by policy. Keep muted/inline attributes and test actual Chromium state.

## Security Considerations

Scan staged diffs for keys/tokens/credentials. Never include auth output or local machine secrets in reports or commits.
