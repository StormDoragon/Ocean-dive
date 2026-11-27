import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 1991.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july1991Discoveries: Discovery[] = [
  {
    slug: "stanford-sodium-atom-interferometer-separated-matter-wave-paths",
    "datePublished": "2026-11-27",
    title: "Separated Sodium Atom Waves Formed an Interferometer",
    categorySlug: "physics",
    subtopic: "Quantum research",
    year: 1991,
    dateDiscovered: "1991-07-08",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Stanford University laboratory location",
      lat: 37.427,
      lng: -122.17,
      country: "United States",
    },
    discoveringOrg: "Stanford University",
    heroImage: "/images/discoveries/1991/stanford-sodium-atom-interferometer-separated-matter-wave-paths.webp",
    imageAlt: "Original editorial diagram for Matter waves meet again. 2.4 mm: Maximum separation. Sodium: Atomic wave packets.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1991/stanford-sodium-atom-interferometer-separated-matter-wave-paths.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A Stanford experiment split sodium matter waves with light, separated the packets by up to 2.4 millimeters and recombined them to measure gravitational acceleration.",
    story: {
      whyThere: "Mark Kasevich and Steven Chu used light pulses to give sodium atoms different possible paths through the apparatus. The paths accumulated different phases before a final pulse brought the matter waves back together.",
      howFound: "The population detected after recombination changed as the phase shifted. Gravity influenced that phase, allowing the experiment to extract a measurement of local acceleration.",
      whatMakesUnique: "The study connected an interference effect to a measurable force. The pin marks Stanford University, where the experiment was based.",
    },
    gallery: [
      "/images/discoveries/1991/stanford-sodium-atom-interferometer-separated-matter-wave-paths.webp",
    ],
    primarySourceUrl: "https://link.aps.org/doi/10.1103/PhysRevLett.67.181",
    videoUrls: [],
    relatedSlugs: ["grenoble-silicon-quantized-hall-resistance-plateaus"],
    tags: ["Atom interferometer", "Sodium atoms", "matter waves", "Gravimetry"],
  },
];
