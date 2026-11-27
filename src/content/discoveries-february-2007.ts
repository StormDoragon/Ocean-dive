import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 2007.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february2007Discoveries: Discovery[] = [
  {
    slug: "tai-forest-chimpanzee-nut-cracking-4300-years",
    "datePublished": "2026-11-27",
    title: "Starch and Wear on Ancient Stones Point to Chimpanzee Nut Cracking",
    categorySlug: "archaeology",
    subtopic: "Artifacts",
    year: 2007,
    dateDiscovered: "2007-02-20",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Taï forest region (archaeological study-area proxy)",
      lat: 5.8,
      lng: -7.2,
      country: "Côte d’Ivoire",
    },
    discoveringOrg: "Julio Mercader, Hélène Barton, Jason Gillespie and colleagues",
    scientificName: "Pan troglodytes verus",
    heroImage: "/images/discoveries/2007/tai-forest-chimpanzee-nut-cracking-4300-years.webp",
    imageAlt: "Original editorial diagram for Ancient impact stones preserve traces of nut processing. About 4,300 years: age of the archaeological evidence. Starch and impact wear: help classify the stone use.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2007/tai-forest-chimpanzee-nut-cracking-4300-years.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Excavated stones in Côte d’Ivoire preserved damage and plant residues consistent with chimpanzee nut cracking roughly 4,300 years ago.",
    story: {
      whyThere: "The site lay where chimpanzees use stones to open hard nuts today. Researchers asked whether similar activity could be distinguished in older deposits.",
      howFound: "They examined the surfaces for repeated impact damage and compared starch residues with known plants and modern tools. Dating placed some artifacts thousands of years in the past.",
      whatMakesUnique: "The evidence supports a long-lived regional tool tradition. A worn stone does not identify the individual that used it.",
    },
    gallery: ["/images/discoveries/2007/tai-forest-chimpanzee-nut-cracking-4300-years.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/17360606/",
    videoUrls: [],
    relatedSlugs: ["oxford-new-caledonian-crow-wire-hook-forming"],
    tags: ["chimpanzees", "stone tools", "starch residues"],
  },
];
