import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during March 2023.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const march2023Discoveries: Discovery[] = [
  {
    slug: "yunnan-honey-bees-young-waggle-dance-social-learning",
    "datePublished": "2026-11-27",
    title: "Young honey bees learn a more accurate waggle dance from other bees",
    categorySlug: "biology",
    subtopic: "Neuroscience",
    year: 2023,
    dateDiscovered: "2023-03-09",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Xishuangbanna Tropical Botanical Garden, Yunnan (research institution map proxy)",
      lat: 21.927,
      lng: 101.25,
      country: "China",
    },
    discoveringOrg: "Shihao Dong, Tao Lin, James C. Nieh and Ken Tan",
    scientificName: "Apis mellifera",
    heroImage: "/images/discoveries/2023/yunnan-honey-bees-young-waggle-dance-social-learning.webp",
    imageAlt: "Original editorial diagram for How young bees refine a waggle dance. Dance angles: improved with experience. Distance encoding: early social effect persisted.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2023/yunnan-honey-bees-young-waggle-dance-social-learning.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Bees that had never followed an experienced dancer made greater errors in their own first waggle dances.",
    story: {
      whyThere: "A honey bee moving across comb can convey where profitable food lies. Features of the waggle portion of the dance carry information about distance and direction.",
      howFound: "The team compared first dances by bees that had access to experienced dancers and bees that had not had a chance to follow others. The latter group gave more variable angles and encoded distance differently.",
      whatMakesUnique: "Angle errors declined with the bees' own experience, while the altered distance encoding persisted in the experiment. The ability to begin dancing and the accuracy of the dance can have different origins.",
    },
    gallery: ["/images/discoveries/2023/yunnan-honey-bees-young-waggle-dance-social-learning.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/36893231/",
    supportingSources: [
      {
        title: "Report from the participating botanical garden",
        url: "https://en.xtbg.ac.cn/ne/ns/202303/t20230310_1186139.html",
        publisher: "Xishuangbanna Tropical Botanical Garden",
        tier: "Tier 2",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["st-andrews-moray-firth-dolphin-signature-whistle-playback"],
    tags: ["honey bees", "animal behavior", "social learning"],
  },
];
