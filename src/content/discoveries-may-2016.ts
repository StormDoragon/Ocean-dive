import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 2016.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may2016Discoveries: Discovery[] = [
  {
    slug: "papahanaumokuakea-bank-9-three-and-a-half-metre-glass-sponge",
    "datePublished": "2026-11-27",
    title: "An Underwater Survey Measured a Sponge More Than 3.5 Meters Long",
    categorySlug: "ocean",
    subtopic: "Deep-sea expeditions",
    year: 2016,
    dateDiscovered: "2016-05-24",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Ridge north of Bank 9, Papahānaumokuākea",
      lat: 27.13082,
      lng: -175.57085,
      country: "United States",
      depthMeters: 2117,
    },
    discoveringOrg: "Daniel Wagner and Christopher D. Kelley",
    heroImage: "/images/discoveries/2016/papahanaumokuakea-bank-9-three-and-a-half-metre-glass-sponge.webp",
    imageAlt: "Original editorial diagram for A sponge measured by video. >3.5 m: Estimated length. 2,117 m: Observation depth.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2016/papahanaumokuakea-bank-9-three-and-a-half-metre-glass-sponge.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A NOAA expedition filmed an enormous sponge at 2,117 meters in the Northwestern Hawaiian Islands. Video measurements put its length above 3.5 meters.",
    story: {
      whyThere: "Vehicles deployed from the Okeanos Explorer passed over a sponge on a ridge in Papahānaumokuākea. The team used laser scales and overhead imagery to estimate its dimensions.",
      howFound: "A nearby smaller specimen provided a possible comparison with glass sponges. Researchers left the much larger colony intact, so its precise species and age remain unknown.",
      whatMakesUnique: "The colony exceeded the dimensions of the largest sponge the authors found in the literature. The map and depth identify the 2015 dive observation reported in 2016.",
    },
    gallery: [
      "/images/discoveries/2016/papahanaumokuakea-bank-9-three-and-a-half-metre-glass-sponge.webp",
    ],
    primarySourceUrl: "https://link.springer.com/article/10.1007/s12526-016-0508-z",
    videoUrls: [],
    relatedSlugs: ["greenland-coastal-waters-shark-eye-lens-radiocarbon-centuries-long-life"],
    tags: ["glass sponges", "Papahānaumokuākea", "seafloor ecology", "NOAA Ocean Exploration"],
  },
];
