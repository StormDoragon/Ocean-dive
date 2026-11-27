import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during January 2015.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const january2015Discoveries: Discovery[] = [
  {
    slug: "gobaad-wakrita-neolithic-pottery-lake-fishing",
    "datePublished": "2026-11-27",
    title: "Pottery and fish remains revealed everyday life at Wakrita",
    categorySlug: "archaeology",
    subtopic: "Ancient civilizations",
    year: 2015,
    dateDiscovered: "2015-01-13",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Gobaad basin near Lake Abbé (regional map proxy for Wakrita)",
      lat: 11.13,
      lng: 41.99,
      country: "Djibouti",
    },
    discoveringOrg: "Xavier Gutherz, Joséphine Lesur and the Wakrita excavation team",
    heroImage: "/images/discoveries/2015/gobaad-wakrita-neolithic-pottery-lake-fishing.webp",
    imageAlt: "Original editorial diagram for Fishing and pottery in the Gobaad basin. Ceramic patterns: compared with Asa Koma. Fish remains: evidence of aquatic food use.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2015/gobaad-wakrita-neolithic-pottery-lake-fishing.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Excavations at Wakrita documented a local pottery tradition and evidence of fishing near Lake Abbé in the Horn of Africa.",
    story: {
      whyThere: "The settlement occupied a watercourse in the Gobaad basin. Excavations begun in 2005 recovered enough pottery to characterize recurring forms and decoration.",
      howFound: "The researchers compared these features with pottery from nearby Asa Koma. The similarities helped define a regional archaeological tradition, while fish remains showed that people drew on aquatic resources.",
      whatMakesUnique: "Combining pottery and food remains gave a fuller picture of Neolithic activities in the basin. The evidence describes the sampled settlement, and diets at other Horn of Africa sites may have differed.",
    },
    gallery: ["/images/discoveries/2015/gobaad-wakrita-neolithic-pottery-lake-fishing.webp"],
    primarySourceUrl: "https://www.tandfonline.com/doi/abs/10.1179/0093469014Z.000000000110",
    videoUrls: [],
    relatedSlugs: ["sidon-college-site-bronze-age-ritual-vessels-egypt"],
    tags: ["neolithic", "pottery", "fishing"],
  },
];
