import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2004.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june2004Discoveries: Discovery[] = [
  {
    slug: "dome-c-epica-ice-core-eight-glacial-cycles",
    "datePublished": "2026-11-27",
    title: "Dome C Ice Extends Antarctica’s Climate Record Across Eight Glacial Cycles",
    categorySlug: "earth-science",
    subtopic: "Ice cores",
    year: 2004,
    dateDiscovered: "2004-06-10",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "EPICA Dome C, East Antarctica (drilling site)",
      lat: -75.1,
      lng: 123.4,
      country: "Antarctica",
    },
    discoveringOrg: "European Project for Ice Coring in Antarctica",
    heroImage: "/images/discoveries/2004/dome-c-epica-ice-core-eight-glacial-cycles.webp",
    imageAlt: "Original editorial diagram for Eight glacial cycles in one Antarctic record. 740,000 years: span of the 2004 published core record. Older warm periods: differed from more recent ones.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2004/dome-c-epica-ice-core-eight-glacial-cycles.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "The published Dome C core provided a record spanning about 740,000 years and showed that some older Antarctic interglacials were less warm than recent ones.",
    story: {
      whyThere: "Annual snow that accumulates and compresses into ice preserves chemical clues to the conditions under which it fell. Deeper layers in the Dome C core extended the comparison beyond the climate record available from Vostok at the time.",
      howFound: "Several interglacials in the older portion of the core were cooler in Antarctica than those of the more recent cycles. Warm conditions nonetheless occupied a larger share of some of those earlier cycles.",
      whatMakesUnique: "The study showed that consecutive glacial cycles can differ in shape and duration. Its 740,000-year estimate describes the record in the 2004 publication.",
    },
    gallery: ["/images/discoveries/2004/dome-c-epica-ice-core-eight-glacial-cycles.webp"],
    primarySourceUrl: "https://www.nature.com/articles/nature02599",
    supportingSources: [
      {
        title: "Dome C drill site and timescale dataset",
        url: "https://www.ncei.noaa.gov/access/metadata/landing-page/bin/iso?id=noaa-icecore-6081",
        publisher: "NOAA NCEI",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["north-grip-ice-core-moisture-sources-abrupt-switch"],
    tags: ["Antarctic ice cores", "glacial cycles", "climate proxies"],
  },
];
