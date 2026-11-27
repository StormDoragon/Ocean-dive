import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during October 2002.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const october2002Discoveries: Discovery[] = [
  {
    slug: "paranal-sgr-a-s2-stellar-orbit-compact-mass",
    "datePublished": "2026-11-27",
    title: "A Close Stellar Orbit Measured the Mass at the Milky Way’s Center",
    categorySlug: "space",
    subtopic: "Black holes",
    year: 2002,
    dateDiscovered: "2002-10-17",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "ESO Paranal Observatory (participating observing-site proxy)",
      lat: -24.627,
      lng: -70.404,
      country: "Chile",
    },
    discoveringOrg: "Reinhard Schödel, Thomas Ott, Reinhard Genzel and colleagues",
    heroImage: "/images/discoveries/2002/paranal-sgr-a-s2-stellar-orbit-compact-mass.webp",
    imageAlt: "Original editorial diagram for A tight orbit confines several million solar masses. About 15 years: orbital period in the original fit. About 17 light-hours: closest approach in that fit.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2002/paranal-sgr-a-s2-stellar-orbit-compact-mass.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Infrared positions traced the star S2 through a close passage around the galaxy’s center. The fitted orbit required several million solar masses in a very small region.",
    story: {
      whyThere: "Dust obscures the galactic center in visible light. Infrared imaging followed stars crowded around Sagittarius A*.",
      howFound: "The team tracked S2 as its direction changed sharply. The original fit put its closest approach at about 17 light-hours and its period at about 15 years.",
      whatMakesUnique: "An orbit this tight limits the space that the central mass occupies. It supports a central supermassive black hole.",
    },
    gallery: ["/images/discoveries/2002/paranal-sgr-a-s2-stellar-orbit-compact-mass.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/12384690/",
    videoUrls: [],
    relatedSlugs: ["cambridge-chandra-sgr-a-rapid-xray-flare"],
    tags: ["Sagittarius A*", "stellar orbits", "infrared astronomy"],
  },
];
