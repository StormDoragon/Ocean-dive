import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during December 2019.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const december2019Discoveries: Discovery[] = [
  {
    slug: "lake-turkana-early-herders-flexible-stone-tools",
    "datePublished": "2026-11-27",
    title: "Stone Tools Show How Early Herding Communities Adapted Around Lake Turkana",
    categorySlug: "archaeology",
    subtopic: "Artifacts",
    year: 2019,
    dateDiscovered: "2019-12-10",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Southwestern Lake Turkana (regional proxy for three studied sites)",
      lat: 2.68,
      lng: 36.09,
      country: "Kenya",
    },
    discoveringOrg: "Steven T. Goldstein",
    heroImage: "/images/discoveries/2019/lake-turkana-early-herders-flexible-stone-tools.webp",
    imageAlt: "Original editorial diagram for Early herders used flexible tool strategies. 3 sites: compared around Lake Turkana. 5,000–4,000 years ago: approximate period of the assemblages.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2019/lake-turkana-early-herders-flexible-stone-tools.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A quantitative comparison of stone artefacts found a shared emphasis on flexible tools among early herders in the Lake Turkana Basin.",
    story: {
      whyThere: "Early herding communities around the lake left material from roughly 5,000 to 4,000 years ago. Changes in water levels and available resources shaped their setting.",
      howFound: "The study compared evidence from Dongodien, Jarigole and Lothagam North. It examined how people selected, worked and conserved stone.",
      whatMakesUnique: "A relatively consistent strategy across the three sites emphasized tools useful for varied tasks. The author links that flexibility to ways herding communities adapted to unfamiliar conditions.",
    },
    gallery: ["/images/discoveries/2019/lake-turkana-early-herders-flexible-stone-tools.webp"],
    paperUrl: "https://doi.org/10.15184/aqy.2019.178",
    primarySourceUrl: "https://www.cambridge.org/core/journals/antiquity/article/lithic-technological-strategies-of-the-earliest-herders-at-lake-turkana-northern-kenya/0931AEA12C986267411F6982D075A913",
    videoUrls: [],
    relatedSlugs: ["oued-laou-kach-kouch-bronze-age-farming-settlement"],
    tags: ["East African pastoralism", "stone tools", "Lake Turkana"],
  },
];
