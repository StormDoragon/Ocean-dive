import type { Discovery } from "./types";

export const january2026Discoveries: Discovery[] = [
  {
    slug: "comet-c-2026-a1-maps",
    title: "C/2026 A1 (MAPS), an Early-Spotted Sungrazer",
    categorySlug: "space",
    subtopic: "Comets",
    year: 2026,
    dateDiscovered: "2026-01-13",
    location: {
      name: "AMACS1 Observatory, San Pedro de Atacama, Chile",
      lat: -22.91,
      lng: -68.2,
      country: "Chile",
    },
    discoveringOrg: "MAPS survey / AMACS1 Observatory",
    scientificName: "C/2026 A1 (MAPS)",
    classification: "Astronomy · Kreutz-family sungrazing comet",
    conservationStatus: undefined,
    heroImage: "/images/categories/space.svg",
    summary:
      "A Kreutz sungrazer detected unusually far from the Sun, giving astronomers a rare multi-month warning before its extremely close solar pass.",
    story: {
      whyThere:
        "The MAPS survey was repeatedly imaging the southern sky for faint comets and other small Solar System bodies.",
      howFound:
        "A faint moving object in Atacama images was confirmed as a Kreutz sungrazer and formally designated C/2026 A1.",
      whatMakesUnique:
        "It was discovered farther from the Sun than previous ground-found Kreutz sungrazers, creating an unusually long observing window for this fragile comet family.",
    },
    gallery: ["/images/categories/space.svg", "/images/textures/grid.svg"],
    paperUrl: "https://arxiv.org/abs/2602.17626",
    videoUrls: [],
    relatedSlugs: ["trappist-1-system", "m87-black-hole-image"],
    tags: ["comet", "sungrazer", "kreutz", "atacama", "solar system"],
  },
];
