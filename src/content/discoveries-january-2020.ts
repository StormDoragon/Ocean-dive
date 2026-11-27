import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during January 2020.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const january2020Discoveries: Discovery[] = [
  {
    slug: "greenbelt-tess-toi-700-d-first-earth-size-habitable-zone",
    "datePublished": "2026-11-27",
    title: "TESS identified a near-Earth-size planet in the TOI 700 habitable zone",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2020,
    dateDiscovered: "2020-01-07",
    reviewStatus: "source-verified",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "NASA Goddard Space Flight Center, Greenbelt (TESS mission map proxy)",
      lat: 38.995,
      lng: -76.848,
      country: "United States",
    },
    discoveringOrg: "Emily A. Gilbert and the TESS TOI 700 team",
    heroImage: "/images/discoveries/2020/greenbelt-tess-toi-700-d-first-earth-size-habitable-zone.webp",
    imageAlt: "Original editorial diagram for A small planet in the TOI 700 system. About 37 days: orbital period. Habitable zone: estimated from the star's radiation.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2020/greenbelt-tess-toi-700-d-first-earth-size-habitable-zone.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Repeat brightness dips and follow-up observations validated TOI 700 d, a small planet receiving roughly comparable stellar energy to Earth.",
    story: {
      whyThere: "TESS watched the same patch of sky long enough to detect repeated passages across this relatively small star. Follow-up observations and analysis supported a planetary explanation.",
      howFound: "The discovery team estimated that TOI 700 d orbits roughly every 37 days. Its size and received energy made it the first planet of this kind found by TESS in a star's habitable zone.",
      whatMakesUnique: "The zone describes the amount of heating that could allow liquid water under suitable conditions. The measurements leave the surface and atmosphere open.",
    },
    gallery: [
      "/images/discoveries/2020/greenbelt-tess-toi-700-d-first-earth-size-habitable-zone.webp",
    ],
    primarySourceUrl: "https://www.nasa.gov/universe/nasa-planet-hunter-finds-its-1st-earth-size-habitable-zone-world/",
    supportingSources: [
      {
        title: "Peer-reviewed validation study",
        url: "https://ntrs.nasa.gov/citations/20210012798",
        publisher: "NASA Technical Reports Server",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["birmingham-kepler-444-ancient-star-five-small-planets"],
    tags: ["TESS", "habitable zone", "transits"],
  },
];
