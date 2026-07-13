export const site = {
  name: "Beyond Signal",
  tagline: "Explore every discovery humanity has ever made.",
  description:
    "Beyond Signal is a searchable directory of scientific discovery — from deep-sea species to exoplanets, fossils, and breakthroughs in physics. Browse, search, and map the milestones of human knowledge.",
  // Used for canonical/OpenGraph URLs. Override with NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://beyond-signal.example.com",
  editorialTeam: "Beyond Signal Editorial Team",
} as const;

export const nav = [
  { href: "/discovery", label: "Discovery" },
  { href: "/ask", label: "Ask" },
  { href: "/discoveries", label: "Discoveries" },
  { href: "/timeline", label: "Timeline" },
  { href: "/depth", label: "Depth" },
  { href: "/tree", label: "Tree of Life" },
  { href: "/map", label: "Map" },
  { href: "/about", label: "About" },
] as const;

/**
 * The main explorable areas of the site, surfaced together on the Discovery
 * hub (`/discovery`). Keep this list as the single source of truth for the
 * "every section in one place" grid so new areas only need adding once.
 */
export const sections = [
  {
    href: "/ask",
    label: "Ask",
    emoji: "✨",
    description: "Ask a question about science in plain English and get a sourced answer.",
  },
  {
    href: "/discoveries",
    label: "Discoveries",
    emoji: "🔍",
    description: "Search and filter the full catalog by keyword, species, place, or field.",
  },
  {
    href: "/timeline",
    label: "Timeline",
    emoji: "📅",
    description: "Travel through the history of discovery, year by year.",
  },
  {
    href: "/depth",
    label: "Ocean Depth",
    emoji: "🌊",
    description: "Dive through the ocean and see what was found at every depth.",
  },
  {
    href: "/tree",
    label: "Tree of Life",
    emoji: "🌳",
    description: "Explore the branching tree of living things and where they were found.",
  },
  {
    href: "/map",
    label: "Map & Globe",
    emoji: "🗺",
    description: "See where every discovery was made on a 2D map or a 3D globe.",
  },
  {
    href: "/categories",
    label: "Categories",
    emoji: "🧭",
    description: "Eight fields of science, each its own corner of the universe.",
  },
  {
    href: "/about",
    label: "About",
    emoji: "🛰",
    description: "What Beyond Signal is, how it is built, and how it stays free.",
  },
] as const;
