import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 1995.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july1995Discoveries: Discovery[] = [
  {
    slug: "boulder-jila-rubidium-first-dilute-gas-bose-einstein-condensate",
    "datePublished": "2026-11-27",
    title: "A Rubidium Gas Condensed Into a Shared Quantum State",
    categorySlug: "physics",
    subtopic: "Quantum research",
    year: 1995,
    dateDiscovered: "1995-07-14",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "JILA, Boulder laboratory location",
      lat: 40.007,
      lng: -105.269,
      country: "United States",
    },
    discoveringOrg: "JILA",
    heroImage: "/images/discoveries/1995/boulder-jila-rubidium-first-dilute-gas-bose-einstein-condensate.webp",
    imageAlt: "Original editorial diagram for A shared quantum state. 170 nK: Transition region. 15+ s: Condensate held.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1995/boulder-jila-rubidium-first-dilute-gas-bose-einstein-condensate.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A JILA team observed a Bose–Einstein condensate in a dilute gas of rubidium atoms. A narrow velocity peak emerged as the gas crossed its transition near 170 nanokelvin.",
    story: {
      whyThere: "The researchers confined rubidium-87 atoms and cooled the thin cloud until a new component appeared in the observed distribution. At the transition, many atoms began to occupy the same quantum state.",
      howFound: "Images taken after release from the trap showed a narrow central component against a broad thermal cloud. The component also expanded differently along different directions, giving a second clue to its identity.",
      whatMakesUnique: "The experiment opened a way to investigate collective quantum behavior in gases with controllable density and temperature. The map identifies the Boulder laboratory.",
    },
    gallery: [
      "/images/discoveries/1995/boulder-jila-rubidium-first-dilute-gas-bose-einstein-condensate.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/17789847/",
    videoUrls: [],
    relatedSlugs: ["stanford-sodium-atom-interferometer-separated-matter-wave-paths"],
    tags: ["Bose–Einstein condensate", "Rubidium", "ultracold atoms", "Quantum physics"],
  },
];
