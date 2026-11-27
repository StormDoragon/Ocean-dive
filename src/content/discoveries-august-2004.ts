import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during August 2004.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const august2004Discoveries: Discovery[] = [
  {
    slug: "sea-of-galilee-ohalo-ii-cereal-grinding-starch",
    "datePublished": "2026-11-27",
    title: "Starch Grains Show Wild Cereals Were Ground at Ohalo II",
    categorySlug: "archaeology",
    subtopic: "Artifacts",
    year: 2004,
    dateDiscovered: "2004-08-05",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Southern Sea of Galilee shoreline (site-area proxy)",
      lat: 32.73,
      lng: 35.57,
      country: "Israel",
    },
    discoveringOrg: "Dolores R. Piperno, Ehud Weiss, Irene Holst and Dani Nadel",
    heroImage: "/images/discoveries/2004/sea-of-galilee-ohalo-ii-cereal-grinding-starch.webp",
    imageAlt: "Original editorial diagram for Starch preserves evidence of grain processing. About 23,000 years: age of the lakeshore camp. Grinding stone: retained microscopic cereal starch.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2004/sea-of-galilee-ohalo-ii-cereal-grinding-starch.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Starch residues from a stone tool supported the processing of wild cereals at a lakeshore camp about 23,000 years ago.",
    story: {
      whyThere: "At Ohalo II the archaeological deposits preserved plant remains and tools associated with people living by the lake.",
      howFound: "The researchers identified starch on a grinding stone consistent with cereals gathered from wild stands. They compared the grain shapes with modern reference samples.",
      whatMakesUnique: "The residues demonstrate an early investment in processing edible seeds. The study does not show that these people grew domesticated cereal crops.",
    },
    gallery: ["/images/discoveries/2004/sea-of-galilee-ohalo-ii-cereal-grinding-starch.webp"],
    primarySourceUrl: "https://www.nature.com/articles/nature02734",
    videoUrls: [],
    relatedSlugs: ["shubayqa-1-natufian-charred-bread-fragments"],
    tags: ["starch grains", "wild cereals", "grinding stones"],
  },
];
