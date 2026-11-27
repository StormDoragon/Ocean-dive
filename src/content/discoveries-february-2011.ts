import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 2011.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february2011Discoveries: Discovery[] = [
  {
    slug: "moffett-field-kepler-11-six-transiting-planets",
    "datePublished": "2026-11-27",
    title: "Kepler Detected Six Planets Crossing the Same Sun-Like Star",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2011,
    dateDiscovered: "2011-02-02",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "NASA Ames Research Center, Moffett Field (mission-team proxy)",
      lat: 37.415,
      lng: -122.056,
      country: "United States",
    },
    discoveringOrg: "Jack J. Lissauer and the Kepler-11 discovery team",
    heroImage: "/images/discoveries/2011/moffett-field-kepler-11-six-transiting-planets.webp",
    imageAlt: "Original editorial diagram for Six planets transit one Sun-like star. Six signals: separate repeating dips in starlight. 10–47 days: orbital periods of the five inner planets.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2011/moffett-field-kepler-11-six-transiting-planets.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Six sets of repeating transits revealed the Kepler-11 system, with five tightly packed planets completing orbits in 10 to 47 days.",
    story: {
      whyThere: "Kepler recorded repeated dips in the star’s light. The distinct rhythms revealed members of a single compact system.",
      howFound: "The transits arrived slightly earlier or later than a simple schedule predicted. Those shifts helped estimate the masses of the inner planets through their mutual gravitational effects.",
      whatMakesUnique: "The chance of seeing so many transits rises when orbits share almost the same plane. The paired mass and size measurements indicated substantial light-gas envelopes for the five inner planets.",
    },
    gallery: ["/images/discoveries/2011/moffett-field-kepler-11-six-transiting-planets.webp"],
    primarySourceUrl: "https://www.nature.com/articles/nature09760",
    videoUrls: [],
    relatedSlugs: ["trappist-1-system"],
    tags: ["NASA Kepler", "transit timing", "planetary systems"],
  },
];
