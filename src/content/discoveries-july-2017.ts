import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 2017.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july2017Discoveries: Discovery[] = [
  {
    slug: "western-arnhem-land-madjedbebe-early-occupation-estimate",
    "datePublished": "2026-11-27",
    title: "New Excavations Push the Estimated Age of Madjedbebe Back to 65,000 Years",
    categorySlug: "archaeology",
    subtopic: "Human origins",
    year: 2017,
    dateDiscovered: "2017-07-20",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Western Arnhem Land (regional proxy for Madjedbebe)",
      lat: -12.7,
      lng: 132.8,
      country: "Australia",
    },
    discoveringOrg: "Chris Clarkson, Zenobia Jacobs and the Madjedbebe research team",
    heroImage: "/images/discoveries/2017/western-arnhem-land-madjedbebe-early-occupation-estimate.webp",
    imageAlt: "Original editorial diagram for Stone artefacts in dated shelter sediment. About 65,000 years: estimate for early occupation at the site. Luminescence: used to date sediment grains.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2017/western-arnhem-land-madjedbebe-early-occupation-estimate.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Excavations at a northern Australian rockshelter linked stone artefacts to sediment dated to around 65,000 years ago.",
    story: {
      whyThere: "The team recorded stone tools, ochre and other materials across the deposits. It looked for evidence that artefacts had moved relative to the sediment around them.",
      howFound: "Optically stimulated luminescence measured the time since mineral grains were last exposed to light. The resulting chronology assigned the earliest occupation layer an age around 65,000 years.",
      whatMakesUnique: "The estimate concerns the dated layer at Madjedbebe. Establishing a broader arrival date requires evidence from other sites and depends on how the deposits are interpreted.",
    },
    gallery: [
      "/images/discoveries/2017/western-arnhem-land-madjedbebe-early-occupation-estimate.webp",
    ],
    primarySourceUrl: "https://www.nature.com/articles/nature22968",
    videoUrls: [],
    relatedSlugs: ["schoningen-spear-horizon-amino-acid-geochronology"],
    tags: ["Sahul", "luminescence dating", "rockshelters"],
  },
];
