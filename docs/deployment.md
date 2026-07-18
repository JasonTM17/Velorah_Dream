# Deployment

## Production

- URL: [https://velorah-dream.vercel.app/](https://velorah-dream.vercel.app/)
- Platform: Vercel
- Scope: `nguyensonbmt06-6377s-projects`
- Project: `velorah-dream`
- Framework preset: Vite

## Build Contract

| Setting | Value |
|---|---|
| Install | `npm install` |
| Build | `npm run build` |
| Output | `dist/` |
| Runtime environment variables | None |
| Minimum Node.js | `^20.19.0` or `>=22.12.0` |

Vercel project metadata lives in `.vercel/`, which is ignored and must never be
committed. The site has no dotenv file, credential, server function, database, or
runtime secret.

## Release

From the repository root:

```bash
npm test
npm run lint
npm run build
vercel --prod --yes
```

The first workstation setup also requires:

```bash
vercel link --yes --project velorah-dream
```

Use the stable alias printed by Vercel, not a generated deployment URL, in
canonical and social metadata.

## External Runtime Dependencies

- Google Fonts serves Instrument Serif and Inter. Browser fallbacks preserve text.
- CloudFront serves the approved looping MP4. Local WebP posters preserve both
  media compositions if the video is delayed or unavailable.
- GitHub Issues receives project briefs. The site stores no submitted data.

## Verification

After every production release:

1. Open `/`, `/#studio`, `/#journal`, and `/#reach-us` at mobile and desktop widths.
2. Confirm canonical, `og:url`, `og:image`, and Twitter image use the stable alias.
3. Confirm hero/reel play only in view, internal anchors resolve, and the project
   brief opens the expected repository channel.
4. Check browser console/page errors and horizontal overflow.
5. Confirm `/velorah-social-card.png` returns the 1200x630 PNG.

## Rollback

List deployments, choose the last known-good production deployment, then roll back:

```bash
vercel ls velorah-dream
vercel rollback <deployment-url-or-id> --yes
```

Verify the stable alias again after rollback. Do not force-push or remove the
failed deployment until the cause is understood.
