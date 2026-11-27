import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2016.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june2016Discoveries: Discovery[] = [
  {
    slug: "pasadena-k2-33b-young-neptune-sized-planet-short-orbit",
    "datePublished": "2026-11-27",
    title: "A young star already hosted a planet in a 5.4-day orbit",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2016,
    dateDiscovered: "2016-06-20",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Caltech, Pasadena (lead research team map proxy)",
      lat: 34.138,
      lng: -118.126,
      country: "United States",
    },
    discoveringOrg: "Trevor J. David and the K2-33 study team",
    heroImage: "/images/discoveries/2016/pasadena-k2-33b-young-neptune-sized-planet-short-orbit.webp",
    imageAlt: "Original editorial diagram for A close orbit around a very young star. 5–10 million years: estimated age of the system. 5.4 days: planet's orbital period.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2016/pasadena-k2-33b-young-neptune-sized-planet-short-orbit.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Transit measurements revealed a planet larger than Neptune close to a star estimated to be only 5 to 10 million years old.",
    story: {
      whyThere: "The extended Kepler mission recorded repeated dips in the light of a young star. Follow-up tests helped establish that an orbiting planet caused the signal.",
      howFound: "The planet crosses the star about every 5.4 days. Its estimated radius was roughly one and a half times Neptune's, and the star's stellar group gave the team an estimate for its young age.",
      whatMakesUnique: "The very short orbit was already in place at a young stage of the system's history. Several formation and migration paths remain possible.",
    },
    gallery: ["/images/discoveries/2016/pasadena-k2-33b-young-neptune-sized-planet-short-orbit.webp"],
    primarySourceUrl: "https://www.nature.com/articles/nature18293",
    videoUrls: [],
    relatedSlugs: ["birmingham-kepler-444-ancient-star-five-small-planets"],
    tags: ["young planetary systems", "transits", "K2 mission"],
  },
];
