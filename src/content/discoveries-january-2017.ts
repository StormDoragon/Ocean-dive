import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during January 2017.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const january2017Discoveries: Discovery[] = [
  {
    slug: "very-large-array-frb-121102-direct-localization",
    "datePublished": "2026-11-27",
    title: "A Repeating Radio Burst Is Tied to a Faint Extragalactic Source",
    categorySlug: "space",
    subtopic: "Galaxies",
    year: 2017,
    dateDiscovered: "2017-01-05",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Very Large Array, New Mexico (primary localization site)",
      lat: 34.079,
      lng: -107.618,
      country: "United States",
    },
    discoveringOrg: "Shami Chatterjee, Casey J. Law and colleagues",
    heroImage: "/images/discoveries/2017/very-large-array-frb-121102-direct-localization.webp",
    imageAlt: "Original editorial diagram for A radio flash gains a precise address. About 100 mas: burst-to-counterpart separation limit. Repeated flashes: directly imaged by the array.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2017/very-large-array-frb-121102-direct-localization.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "The Very Large Array imaged bursts from FRB 121102 directly, narrowing the source to a small area that also showed steady radio emission and a faint optical counterpart.",
    story: {
      whyThere: "A radio burst lasts a few milliseconds, so an instrument has to capture its position while it happens. Multiple antennas observed repeated flashes from this source and compared their signals.",
      howFound: "The burst positions fell within about 100 milliarcseconds of a compact radio counterpart. Follow-up also found faint optical light at the same position, providing direct evidence for a source outside the Milky Way.",
      whatMakesUnique: "The localization determined where to study the source. Its physical engine was still unclear in the paper, which discussed several interpretations of the nearby steady radio emission.",
    },
    gallery: ["/images/discoveries/2017/very-large-array-frb-121102-direct-localization.webp"],
    primarySourceUrl: "https://www.nature.com/articles/nature20797",
    videoUrls: [],
    relatedSlugs: ["parkes-lorimer-archival-millisecond-radio-burst"],
    tags: ["fast radio bursts", "radio interferometry", "host galaxies"],
  },
];
