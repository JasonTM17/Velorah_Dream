export const VIDEO_SOURCE =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"

export interface FilmStill {
  alt: string
  height: number
  src: string
  srcSet: string
  width: number
}

function createFilmStill(index: string, alt: string): FilmStill {
  const assetBase = `/velorah-stills/velorah-still-${index}`

  return {
    alt,
    height: 806,
    src: `${assetBase}-1440.webp`,
    srcSet: `${assetBase}-720.webp 720w, ${assetBase}-1440.webp 1440w`,
    width: 1440,
  }
}

export const filmStills = {
  gathering: createFilmStill(
    "01",
    "Three creators working at luminous screens among wildflowers beneath a star-filled sky.",
  ),
  focus: createFilmStill(
    "02",
    "A creator facing a glowing screen between books and flowers under a deep night sky.",
  ),
  signal: createFilmStill(
    "03",
    "A quiet outdoor workspace illuminated by screens, flowers, and starlight.",
  ),
  movement: createFilmStill(
    "04",
    "Creators gathered in a dreamlike field of flowers, books, and digital light.",
  ),
  horizon: createFilmStill(
    "05",
    "Three creators framed by books and warm flowers beneath an expansive starry sky.",
  ),
} as const
