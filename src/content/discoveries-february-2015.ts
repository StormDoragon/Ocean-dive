import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 2015.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february2015Discoveries: Discovery[] = [
  {
    slug: "bodele-sahara-atlantic-dust-amazon-phosphorus-estimates",
    "datePublished": "2026-11-27",
    title: "Satellite observations quantified Saharan dust reaching the Amazon",
    categorySlug: "earth-science",
    subtopic: "Climate records",
    year: 2015,
    dateDiscovered: "2015-02-24",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Bodélé Depression, Chad (map proxy for one African dust source region)",
      lat: 16.84,
      lng: 17.64,
      country: "Chad",
    },
    discoveringOrg: "Hongbin Yu and the CALIPSO dust transport study team",
    heroImage: "/images/discoveries/2015/bodele-sahara-atlantic-dust-amazon-phosphorus-estimates.webp",
    imageAlt: "Original editorial diagram for Estimating the dust that crosses the Atlantic. About 28 million tonnes: estimated Amazon deposit per year. 2007–2013: years observed by satellite.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2015/bodele-sahara-atlantic-dust-amazon-phosphorus-estimates.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Seven years of satellite observations supported an estimated 28 million tonnes of African dust deposited in the Amazon basin per year on average.",
    story: {
      whyThere: "Winds lift dust over North Africa and carry some of it across the Atlantic. CALIPSO lidar measured dust layers at different heights, giving the researchers a view of how the plume changed on the way.",
      howFound: "Using observations from 2007 through 2013, the team estimated that around 28 million tonnes of African dust settled in the Amazon basin per year on average. The amount varied among years.",
      whatMakesUnique: "Dust carries phosphorus that may help replenish some nutrients lost from rainforest soils. Both the delivered mass and nutrient estimate depend on the sampling years and on assumptions used to convert observations to deposition.",
    },
    gallery: [
      "/images/discoveries/2015/bodele-sahara-atlantic-dust-amazon-phosphorus-estimates.webp",
    ],
    primarySourceUrl: "https://agupubs.onlinelibrary.wiley.com/doi/10.1002/2015GL063040",
    supportingSources: [
      {
        title: "Satellite visualization and research context",
        url: "https://svs.gsfc.nasa.gov/11775",
        publisher: "NASA Scientific Visualization Studio",
        tier: "Tier 2",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["southeast-australia-black-summer-smoke-self-lofting-vortex"],
    tags: ["dust transport", "Amazon", "phosphorus"],
  },
];
