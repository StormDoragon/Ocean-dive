import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during April 2024.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const april2024Discoveries: Discovery[] = [
  {
    slug: "vasuki-indicus-giant-snake",
    datePublished: "2026-07-17",
    title: "Vasuki Indicus, a Giant Eocene Snake",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil discoveries",
    year: 2024,
    dateDiscovered: "2024-04-18",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-13",
    location: {
      name: "Panandhro Lignite Mine, Kutch, Gujarat",
      lat: 23.68,
      lng: 68.78,
      country: "India",
    },
    discoveringOrg: "Indian Institute of Technology Roorkee",
    scientificName: "Vasuki indicus",
    classification: "Animalia · Chordata · Reptilia · Madtsoiidae",
    conservationStatus: "Extinct (middle Eocene, approximately 47 million years ago)",
    heroImage: "/images/discoveries/2024/vasuki-indicus-giant-snake.webp",
    imageAlt: "Original editorial reconstruction of the giant Eocene snake Vasuki indicus in a warm Indian wetland, with one fossil vertebra enlarged for scale.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "reconstruction",
    imageRelation: "illustration",
    summary: "Twenty-seven associated vertebrae from western India were described as Vasuki indicus, a giant madtsoiid snake that lived about 47 million years ago. Scaling from the vertebrae produced a broad estimated length of roughly 11 to 15 metres, placing it among the largest snakes known but leaving substantial uncertainty.",
    story: {
      whyThere: "The fossil-bearing lignite mine preserves a warm, swampy Eocene ecosystem from a time when India was approaching Asia. Researchers examined vertebrae collected from the mine's Naredi Formation to understand the diversity and dispersal of Gondwanan snakes.",
      howFound: "The team compared vertebral proportions, joint surfaces, and diagnostic ridges with madtsoiid snakes from India, Africa, Madagascar, and South America. Body length was estimated using relationships between vertebral width and total length in living and fossil snakes.",
      whatMakesUnique: "Vasuki combines enormous size with a geographic position relevant to Gondwanan dispersal. The authors interpreted it as a slow-moving ambush predator, but the incomplete skeleton means exact length, mass, and ecology cannot be reconstructed with precision.",
    },
    gallery: ["/images/discoveries/2024/vasuki-indicus-giant-snake.webp"],
    paperUrl: "https://www.nature.com/articles/s41598-024-58377-0",
    videoUrls: [],
    relatedSlugs: ["qikiqtania-wakei", "perucetus-colossus"],
    tags: ["vasuki", "giant snake", "eocene", "india", "madtsoiid"],
  },
];
