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
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/C2026_A1_JWST_MIRI.jpg/1280px-C2026_A1_JWST_MIRI.jpg",
    imageAlt:
      "James Webb Space Telescope MIRI image of comet C/2026 A1 (MAPS), showing its bright nucleus and diffuse tail.",
    imageCredit: "NASA/ESA/CSA JWST MIRI; processing by Melina Thévenot",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:C2026_A1_JWST_MIRI.jpg",
    imageLicense: "Wikimedia Commons source",
    imageType: "telescope image",
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
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/C2026_A1_JWST_MIRI.jpg/1280px-C2026_A1_JWST_MIRI.jpg",
      "/images/textures/grid.svg",
    ],
    paperUrl: "https://arxiv.org/abs/2602.17626",
    videoUrls: [],
    relatedSlugs: ["trappist-1-system", "m87-black-hole-image"],
    tags: ["comet", "sungrazer", "kreutz", "atacama", "solar system"],
  },
];
