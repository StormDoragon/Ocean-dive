import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 1994.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february1994Discoveries: Discovery[] = [
  {
    slug: "pasadena-galileo-dactyl-first-asteroid-moon",
    "datePublished": "2026-11-27",
    title: "Galileo Images Reveal a Tiny Moon Beside Asteroid Ida",
    categorySlug: "space",
    subtopic: "Asteroids",
    year: 1994,
    dateDiscovered: "1994-02-17",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "NASA Jet Propulsion Laboratory, Pasadena (mission-team proxy)",
      lat: 34.199,
      lng: -118.172,
      country: "United States",
    },
    discoveringOrg: "Ann Harch and the Galileo imaging team",
    heroImage: "/images/discoveries/1994/pasadena-galileo-dactyl-first-asteroid-moon.webp",
    imageAlt: "Original editorial diagram for A second object beside asteroid Ida. ~1.6 km: largest dimension of Dactyl. 1994: year of discovery in the downloaded images.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1994/pasadena-galileo-dactyl-first-asteroid-moon.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "While reviewing images sent back from the 1993 Galileo flyby, Ann Harch spotted Dactyl, the first confirmed moon of an asteroid.",
    story: {
      whyThere: "Galileo took pictures of asteroid Ida in August 1993, but the spacecraft transferred them to Earth in stages. An image examined in February 1994 showed a small second object near Ida.",
      howFound: "Later analysis cataloged 47 frames containing the pair and measured how the moon moved relative to Ida during the flyby. Dactyl was about 1.6 kilometers across in later measurements.",
      whatMakesUnique: "The images covered a limited part of the orbit, leaving its exact long-term shape uncertain. They gave direct confirmation that an asteroid can have a natural satellite.",
    },
    gallery: ["/images/discoveries/1994/pasadena-galileo-dactyl-first-asteroid-moon.webp"],
    primarySourceUrl: "https://www.sciencedirect.com/science/article/pii/S0019103596900445",
    supportingSources: [
      {
        title: "Physical properties of Dactyl from the Galileo data",
        url: "https://www.nature.com/articles/374783a0",
        publisher: "Nature",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["houston-dawn-vesta-rheasilvia-veneneia-impact-basins"],
    tags: ["asteroid moons", "Galileo", "Dactyl"],
  },
];
