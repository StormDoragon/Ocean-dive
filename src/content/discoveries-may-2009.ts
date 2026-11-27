import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 2009.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may2009Discoveries: Discovery[] = [
  {
    slug: "schelklingen-hohle-fels-aurignacian-mammoth-ivory-figure",
    "datePublished": "2026-11-27",
    title: "A Mammoth-Ivory Figure Came From the Base of Hohle Fels",
    categorySlug: "archaeology",
    subtopic: "Artifacts",
    year: 2009,
    dateDiscovered: "2009-05-14",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Hohle Fels locality near Schelklingen",
      lat: 48.379,
      lng: 9.756,
      country: "Germany",
    },
    discoveringOrg: "Nicholas J. Conard, University of Tübingen",
    heroImage: "/images/discoveries/2009/schelklingen-hohle-fels-aurignacian-mammoth-ivory-figure.webp",
    imageAlt: "Original editorial diagram for A carved human figure. 35,000+: Years old. Mammoth ivory: Carving material.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2009/schelklingen-hohle-fels-aurignacian-mammoth-ivory-figure.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "An ivory figure excavated at Hohle Fels in 2008 came from a basal Aurignacian deposit. The report placed its carving at least 35,000 years ago.",
    story: {
      whyThere: "Excavation in the Swabian Jura recovered fragments of a small human figure carved from mammoth ivory. Its recorded position connected it with early Aurignacian activity in the cave.",
      howFound: "The age of the archaeological context made the carving a particularly early example of representational art. The paper compared it with younger female figures from Europe’s Gravettian period.",
      whatMakesUnique: "The find provides a record of the artist’s work. Its purpose and significance for the people who made it remain uncertain.",
    },
    gallery: [
      "/images/discoveries/2009/schelklingen-hohle-fels-aurignacian-mammoth-ivory-figure.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/19444215/",
    supportingSources: [
      {
        title: "Caves and Ice Age Art in the Swabian Jura",
        url: "https://whc.unesco.org/en/list/1527/",
        publisher: "UNESCO World Heritage Centre",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["lagoa-santa-lapa-do-santo-burial-26-early-holocene-ritual"],
    tags: ["Hohle Fels", "Aurignacian", "Ice Age art", "Ivory carving"],
  },
];
