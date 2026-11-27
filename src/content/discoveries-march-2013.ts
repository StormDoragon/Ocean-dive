import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during March 2013.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const march2013Discoveries: Discovery[] = [
  {
    slug: "challenger-deep-sediment-oxygen-carbon-turnover",
    "datePublished": "2026-11-27",
    title: "Challenger Deep Sediments Showed Higher Oxygen Consumption Than a Nearby Shallower Site",
    categorySlug: "ocean",
    subtopic: "Deep-sea expeditions",
    year: 2013,
    dateDiscovered: "2013-03-17",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Challenger Deep (lander study-region proxy)",
      lat: 11.37,
      lng: 142.59,
      country: "Pacific Ocean",
      depthMeters: 10817,
    },
    discoveringOrg: "Ronnie N. Glud, Frank Wenzhöfer and colleagues",
    heroImage: "/images/discoveries/2013/challenger-deep-sediment-oxygen-carbon-turnover.webp",
    imageAlt: "Original editorial diagram for Oxygen measurements reveal active trench sediments. 10,817 m: depth of one profiling lander measurement. Oxygen consumption: higher than the nearby shallower comparison.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2013/challenger-deep-sediment-oxygen-carbon-turnover.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Seafloor instruments measured relatively high oxygen consumption in trench sediment, evidence of active processing of organic matter.",
    story: {
      whyThere: "A pressure-tolerant lander measured oxygen at the sediment surface in the deepest basin and at a nearby site roughly six kilometers down.",
      howFound: "The deepest sediments consumed oxygen faster than the shallower comparison site. The team interpreted this as evidence of active carbon turnover associated with deposition in the trench.",
      whatMakesUnique: "The comparison describes the sampled sites and their measured activity. It does not imply that more depth always means higher metabolism.",
    },
    gallery: ["/images/discoveries/2013/challenger-deep-sediment-oxygen-carbon-turnover.webp"],
    primarySourceUrl: "https://www.nature.com/articles/ngeo1773",
    videoUrls: [],
    relatedSlugs: ["mariana-and-pacific-trenches-ingested-synthetic-particles"],
    tags: ["Challenger Deep", "sediment oxygen", "carbon cycling"],
  },
];
