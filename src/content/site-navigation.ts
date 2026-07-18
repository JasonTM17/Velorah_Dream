export const navigationItems = [
  { id: "home", label: "Home", href: "#home" },
  { id: "studio", label: "Studio", href: "#studio" },
  { id: "about", label: "About", href: "#about" },
  { id: "journal", label: "Journal", href: "#journal" },
  { id: "reach-us", label: "Reach Us", href: "#reach-us" },
] as const

export type NavigationId = (typeof navigationItems)[number]["id"]
