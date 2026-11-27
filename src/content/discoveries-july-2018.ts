import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 2018.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july2018Discoveries: Discovery[] = [
  {
    slug: "lantian-shangchen-loess-plateau-early-stone-artifacts",
    "datePublished": "2026-11-27",
    title: "Stone artifacts pointed to early hominin activity on China's Loess Plateau",
    categorySlug: "archaeology",
    subtopic: "Human origins",
    year: 2018,
    dateDiscovered: "2018-07-11",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Lantian County, Shaanxi (regional map proxy for Shangchen)",
      lat: 34.154,
      lng: 109.322,
      country: "China",
    },
    discoveringOrg: "Zhaoyu Zhu and the Shangchen research team",
    heroImage: "/images/discoveries/2018/lantian-shangchen-loess-plateau-early-stone-artifacts.webp",
    imageAlt: "Original editorial diagram for Dating the earliest Shangchen artifact layers. About 2.1 Ma: oldest artifact horizon estimated. Magnetic record: used to correlate sediment layers.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2018/lantian-shangchen-loess-plateau-early-stone-artifacts.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Stone artifacts distributed through layered sediments at Shangchen indicated hominin presence in northern China around 2.1 million years ago.",
    story: {
      whyThere: "Deposits of windblown dust and buried soils alternate at Shangchen. The team documented stone artifacts from several layers and looked at how the pieces had been broken or chipped.",
      howFound: "The researchers matched changes in the magnetic direction recorded in the sediments with known intervals of Earth's magnetic history. They estimated that the oldest artifact layers were about 2.1 million years old.",
      whatMakesUnique: "The study ties the evidence to geological layers and makes an early occupation of East Asia plausible. Who made the tools and whether groups occupied the area continuously remain open questions.",
    },
    gallery: ["/images/discoveries/2018/lantian-shangchen-loess-plateau-early-stone-artifacts.webp"],
    primarySourceUrl: "https://www.nature.com/articles/s41586-018-0299-4",
    videoUrls: [],
    relatedSlugs: ["setif-ain-boucherit-oldowan-stone-tools-cut-marks"],
    tags: ["stone tools", "Loess Plateau", "magnetostratigraphy"],
  },
];
