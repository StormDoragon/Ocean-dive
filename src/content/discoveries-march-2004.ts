import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during March 2004.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const march2004Discoveries: Discovery[] = [
  {
    slug: "baltimore-hubble-ultra-deep-field-faint-galaxies",
    "datePublished": "2026-11-27",
    title: "Hubble’s Ultra Deep Field Reveals Thousands of Faint Galaxies",
    categorySlug: "space",
    subtopic: "Galaxies",
    year: 2004,
    dateDiscovered: "2004-03-09",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Space Telescope Science Institute, Baltimore (analysis-team proxy)",
      lat: 39.333,
      lng: -76.623,
      country: "United States",
    },
    discoveringOrg: "Steven V. W. Beckwith, Massimo Stiavelli and the Hubble Ultra Deep Field team",
    heroImage: "/images/discoveries/2004/baltimore-hubble-ultra-deep-field-faint-galaxies.webp",
    imageAlt: "Original editorial diagram for A long exposure of a small patch of sky. About 10,000: objects, mainly galaxies. One million seconds: combined exposure.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2004/baltimore-hubble-ultra-deep-field-faint-galaxies.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A million seconds of exposure on one small patch of sky allowed Hubble to record roughly 10,000 faint objects, the great majority of them galaxies.",
    story: {
      whyThere: "The survey repeatedly imaged a small field in Fornax. Combining exposures made galaxies visible that were too faint to stand out in shorter images.",
      howFound: "Observations in different filters let researchers look for objects whose light drops sharply between bands. The pattern helped identify distant candidates for further analysis.",
      whatMakesUnique: "Galaxies of very different ages and shapes share the same field of view. The survey helps compare how galaxy populations changed across cosmic history within the limits of its depth and area.",
    },
    gallery: ["/images/discoveries/2004/baltimore-hubble-ultra-deep-field-faint-galaxies.webp"],
    paperUrl: "https://doi.org/10.1086/507302",
    primarySourceUrl: "https://science.nasa.gov/missions/hubble/hubbles-deepest-view-ever-of-the-universe-unveils-earliest-galaxies/",
    videoUrls: [],
    relatedSlugs: ["apache-point-sdss-boss-dr12-galaxy-clustering"],
    tags: ["deep fields", "Hubble Space Telescope", "galaxy evolution"],
  },
];
