export const site = {
  name: "Beyond Signal",
  tagline: "Explore every discovery humanity has ever made.",
  description:
    "Beyond Signal is a searchable directory of scientific discovery — from deep-sea species to exoplanets, fossils, and breakthroughs in physics. Browse, search, and map the milestones of human knowledge.",
  // Used for canonical/OpenGraph URLs. Override with NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://beyond-signal.example.com",
} as const;

export const nav = [
  { href: "/ask", label: "Ask" },
  { href: "/discoveries", label: "Discoveries" },
  { href: "/timeline", label: "Timeline" },
  { href: "/depth", label: "Depth" },
  { href: "/tree", label: "Tree of Life" },
  { href: "/map", label: "Map" },
  { href: "/about", label: "About" },
] as const;
