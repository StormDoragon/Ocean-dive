import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 2001.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may2001Discoveries: Discovery[] = [
  {
    slug: "lufeng-hadrocodium-skull-jaw-middle-ear-evolution",
    "datePublished": "2026-11-27",
    title: "A Tiny Jurassic Skull Linked Changes in the Jaw, Braincase and Ear",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil discoveries",
    year: 2001,
    dateDiscovered: "2001-05-25",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Lufeng Basin, Yunnan (fossil-region proxy)",
      lat: 25.13,
      lng: 102.08,
      country: "China",
    },
    discoveringOrg: "Zhe-Xi Luo, Alfred W. Crompton and Ai-Lin Sun",
    scientificName: "Hadrocodium wui",
    heroImage: "/images/discoveries/2001/lufeng-hadrocodium-skull-jaw-middle-ear-evolution.webp",
    imageAlt: "Original editorial diagram for A small skull records changes in early mammalian anatomy. Braincase shape: compared with related fossils. Lower jaw: lacks the ancestral attachment groove.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2001/lufeng-hadrocodium-skull-jaw-middle-ear-evolution.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A small early mammaliaform skull had a relatively expanded braincase and a jaw lacking a groove associated with attachment of the ancestral middle ear.",
    story: {
      whyThere: "The specimen recovered from Early Jurassic rocks preserves a remarkably small skull and jaw.",
      howFound: "The researchers compared the shape of its braincase and the lower jaw with related fossils. They inferred that the ear had separated from the jaw in this animal.",
      whatMakesUnique: "The reconstruction depends on the skull features preserved. The result helps establish when anatomical changes associated with modern mammalian hearing appeared.",
    },
    gallery: ["/images/discoveries/2001/lufeng-hadrocodium-skull-jaw-middle-ear-evolution.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/11375489/",
    videoUrls: [],
    relatedSlugs: ["las-hoyas-spinolestes-early-mammal-hair-and-spines"],
    tags: ["mammaliaforms", "middle ear", "Jurassic fossils"],
  },
];
