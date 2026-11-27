import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during October 2013.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const october2013Discoveries: Discovery[] = [
  {
    slug: "tromso-reindeer-tapetum-winter-blue-reflection",
    "datePublished": "2026-11-27",
    title: "An Arctic reindeer's retinal reflector turns blue in winter",
    categorySlug: "biology",
    subtopic: "Neuroscience",
    year: 2013,
    dateDiscovered: "2013-10-30",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Tromsø region (regional map proxy for the Arctic reindeer study)",
      lat: 69.65,
      lng: 18.96,
      country: "Norway",
    },
    discoveringOrg: "Karl-Arne Stokkan and the Arctic reindeer vision research team",
    scientificName: "Rangifer tarandus",
    heroImage: "/images/discoveries/2013/tromso-reindeer-tapetum-winter-blue-reflection.webp",
    imageAlt: "Original editorial diagram for A seasonal change in the retinal reflector. Golden: summer reflection. Deep blue: winter reflection.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2013/tromso-reindeer-tapetum-winter-blue-reflection.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Researchers found a seasonal color change in the reflective layer behind reindeer retinas that can alter the eye's response in low light.",
    story: {
      whyThere: "The tapetum lucidum reflects light back through the retina. The researchers compared it in Arctic reindeer sampled in different seasons and saw its reflected color change from golden in summer to deep blue in winter.",
      howFound: "They found that tiny collagen structures in the layer were more tightly packed in winter eyes. That changes which wavelengths the layer reflects and is consistent with a seasonal shift in retinal sensitivity.",
      whatMakesUnique: "The authors suggested that internal eye pressure could help drive the structural change. The measurements showed the seasonal difference, while its relative benefits for navigation, feeding and finding predators were not separately tested.",
    },
    gallery: ["/images/discoveries/2013/tromso-reindeer-tapetum-winter-blue-reflection.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/24174115/",
    supportingSources: [
      {
        title: "Research report and Tromsø study context",
        url: "https://royalsociety.org/news/2013/arctic-reindeer-eyesight-adaption/",
        publisher: "Royal Society",
        tier: "Tier 2",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["yunnan-honey-bees-young-waggle-dance-social-learning"],
    tags: ["reindeer", "vision", "Arctic adaptations"],
  },
];
