import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during March 2018.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const march2018Discoveries: Discovery[] = [
  {
    slug: "alaska-range-mount-hunter-ice-core-summer-melt",
    "datePublished": "2026-11-27",
    title: "Four Centuries of Ice at Mount Hunter Record Stronger Summer Melt",
    categorySlug: "earth-science",
    subtopic: "Ice cores",
    year: 2018,
    dateDiscovered: "2018-03-23",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Mount Hunter, Alaska Range (ice-core site proxy)",
      lat: 62.95,
      lng: -151.09,
      country: "United States",
    },
    discoveringOrg: "Dominic A. Winski and the Mount Hunter ice-core team",
    heroImage: "/images/discoveries/2018/alaska-range-mount-hunter-ice-core-summer-melt.webp",
    imageAlt: "Original editorial diagram for A mountain ice core records summer melting. 400 years: approximate length of the record. About 60×: annual melt increase in the reported comparison.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2018/alaska-range-mount-hunter-ice-core-summer-melt.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Two mountain ice cores preserved melt layers that show a large increase in annual summer melting relative to the preindustrial portion of the record.",
    story: {
      whyThere: "Summer melting can produce layers that freeze again and become visible in a core. The researchers used layers in two cores to reconstruct changing melt across roughly four centuries.",
      howFound: "Comparing the record with modern conditions at the site linked increased melting to warmer summers. The reported water-equivalent melt was about sixty times higher in the recent portion than in the preindustrial comparison.",
      whatMakesUnique: "The record is specific to a high-elevation location in the Alaska Range. It provides a way to compare mountain warming with other temperature records.",
    },
    gallery: ["/images/discoveries/2018/alaska-range-mount-hunter-ice-core-summer-melt.webp"],
    primarySourceUrl: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017JD027539",
    videoUrls: [],
    relatedSlugs: ["tohoku-offshore-seafloor-geodesy-24-metre-displacement"],
    tags: ["glacier melt", "alpine climate", "Alaska Range"],
  },
];
