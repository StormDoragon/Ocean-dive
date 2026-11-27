import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2019.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june2019Discoveries: Discovery[] = [
  {
    slug: "central-himalayas-declassified-satellite-glacier-ice-loss-doubled",
    "datePublished": "2026-11-27",
    title: "Historic satellite photos showed accelerating Himalayan ice loss",
    categorySlug: "earth-science",
    subtopic: "Climate records",
    year: 2019,
    dateDiscovered: "2019-06-19",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Central Himalayas, near the Nepal–Tibet frontier (regional map proxy for the transect)",
      lat: 28.2,
      lng: 85.6,
      country: "Nepal",
    },
    discoveringOrg: "Joshua M. Maurer and the Himalayan glacier study team",
    heroImage: "/images/discoveries/2019/central-himalayas-declassified-satellite-glacier-ice-loss-doubled.webp",
    imageAlt: "Original editorial diagram for Comparing two periods of Himalayan ice loss. 1975–2000 and 2000–2016: comparison periods. About twice as fast: average loss in the later period.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2019/central-himalayas-declassified-satellite-glacier-ice-loss-doubled.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Comparing older and modern satellite imagery found that average glacier ice loss in the sampled region was about twice as fast after 2000.",
    story: {
      whyThere: "The researchers used declassified photographs to recreate the heights of glacier surfaces from decades earlier. They compared those reconstructions with elevations made from more recent satellite observations.",
      howFound: "The study compared 1975–2000 with 2000–2016 across a long stretch of the Himalayas. On average, glaciers lost ice roughly twice as fast in the second interval.",
      whatMakesUnique: "The pattern was consistent with warming across the region, while individual glaciers responded differently. The numerical rate describes the study sample and time windows.",
    },
    gallery: [
      "/images/discoveries/2019/central-himalayas-declassified-satellite-glacier-ice-loss-doubled.webp",
    ],
    primarySourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6584665/",
    videoUrls: [],
    relatedSlugs: ["camp-century-greenland-basal-sediment-ice-free-416000-years"],
    tags: ["glaciers", "Himalayas", "satellite observations"],
  },
];
