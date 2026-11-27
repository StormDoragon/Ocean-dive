import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during August 2011.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const august2011Discoveries: Discovery[] = [
  {
    slug: "sendai-hayabusa-itokawa-dust-ordinary-ll-chondrites",
    "datePublished": "2026-11-27",
    title: "Itokawa Dust Linked a Stony Asteroid to Ordinary Meteorites",
    categorySlug: "space",
    subtopic: "Space missions",
    year: 2011,
    dateDiscovered: "2011-08-26",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Tohoku University, Aoba campus, study-team location",
      lat: 38.255,
      lng: 140.835,
      country: "Japan",
    },
    discoveringOrg: "Tomoki Nakamura and the Hayabusa sample analysis team",
    heroImage: "/images/discoveries/2011/sendai-hayabusa-itokawa-dust-ordinary-ll-chondrites.webp",
    imageAlt: "Original editorial diagram for Comparing asteroid dust and meteorites. LL chondrites: Matched meteorite group. Itokawa: Returned dust source.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2011/sendai-hayabusa-itokawa-dust-ordinary-ll-chondrites.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Dust returned by Hayabusa from the asteroid Itokawa matched the mineralogy and chemistry of a group of ordinary meteorites known as LL chondrites.",
    story: {
      whyThere: "Hayabusa brought back tiny grains from Itokawa’s surface. Laboratory measurements let the team compare the minerals and their chemistry directly with meteorites collected on Earth.",
      howFound: "The grains matched LL chondrites altered by heating. The record of heating and later impacts was consistent with Itokawa having formed from pieces of an older, larger body.",
      whatMakesUnique: "The particles supplied direct evidence tying this S-type asteroid to a class of common meteorites. The map marks the lead study team’s Tohoku University location.",
    },
    gallery: ["/images/discoveries/2011/sendai-hayabusa-itokawa-dust-ordinary-ll-chondrites.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/21868667/",
    videoUrls: [],
    relatedSlugs: ["greenbelt-stardust-comet-wild-2-glycine-isotope-measurement"],
    tags: ["Hayabusa", "Itokawa", "Ordinary chondrites", "Sample return"],
  },
];
