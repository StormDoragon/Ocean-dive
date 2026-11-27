import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 2014.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july2014Discoveries: Discovery[] = [
  {
    slug: "monterey-submarine-canyon-graneledone-53-month-egg-brooding",
    "datePublished": "2026-11-27",
    title: "A Deep-Sea Octopus Guarded the Same Eggs for 53 Months",
    categorySlug: "ocean",
    subtopic: "Ocean mysteries",
    year: 2014,
    dateDiscovered: "2014-07-30",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Monterey Submarine Canyon, regional proxy for brooding site",
      lat: 36.7,
      lng: -122.3,
      country: "United States",
      depthMeters: 1397,
    },
    discoveringOrg: "Bruce Robison, Brad Seibel and Jeffrey Drazen",
    scientificName: "Graneledone boreopacifica",
    heroImage: "/images/discoveries/2014/monterey-submarine-canyon-graneledone-53-month-egg-brooding.webp",
    imageAlt: "Original editorial diagram for Four years with one clutch. 53 months: Observed brooding period. 1,397 m: Rock ledge depth.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2014/monterey-submarine-canyon-graneledone-53-month-egg-brooding.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Repeated visits to a rock ledge 1,397 meters deep followed one Graneledone boreopacifica female as she guarded the same developing clutch for 53 months.",
    story: {
      whyThere: "A remotely operated vehicle visited a rocky outcrop in Monterey Submarine Canyon. When the team returned in 2007, a female it had recorded previously was guarding newly laid eggs on the rock.",
      howFound: "The researchers used the animal’s distinctive scars to identify her on later dives. The steady growth of the eggs let them follow the same clutch until the brooding female was gone and empty cases remained.",
      whatMakesUnique: "The record describes one observed clutch under cold deep-water conditions. The map marks the canyon as a regional proxy and the listed depth is the observed rock ledge.",
    },
    gallery: [
      "/images/discoveries/2014/monterey-submarine-canyon-graneledone-53-month-egg-brooding.webp",
    ],
    primarySourceUrl: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0103437",
    videoUrls: [],
    relatedSlugs: ["monterey-bay-bathochordaeus-laser-scanned-mucus-feeding-filters"],
    tags: ["Deep-sea octopus", "egg brooding", "Monterey Canyon", "animal behavior"],
  },
];
