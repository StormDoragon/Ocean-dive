import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during April 2015.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const april2015Discoveries: Discovery[] = [
  {
    slug: "qinglong-hebei-yi-qi-jurassic-dinosaur-wing-membrane",
    "datePublished": "2026-11-27",
    title: "A Jurassic Dinosaur Preserved a Wrist Rod and Traces of a Wing Membrane",
    categorySlug: "dinosaurs-fossils",
    subtopic: "New dinosaur species",
    year: 2015,
    dateDiscovered: "2015-04-29",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Qinglong County, regional proxy for the Mutoudeng specimen",
      lat: 40.41,
      lng: 118.95,
      country: "China",
    },
    discoveringOrg: "Xing Xu and the Yi qi research team",
    scientificName: "Yi qi",
    heroImage: "/images/discoveries/2015/qinglong-hebei-yi-qi-jurassic-dinosaur-wing-membrane.webp",
    imageAlt: "Original editorial diagram for A different wing structure. Wrist rods: Unusual support elements. Membrane traces: Preserved soft tissue.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2015/qinglong-hebei-yi-qi-jurassic-dinosaur-wing-membrane.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A small Jurassic dinosaur from Hebei preserved an unusual elongated element near each wrist and patches of sheet-like tissue. The team interpreted them as parts of a membrane-supported wing.",
    story: {
      whyThere: "The fossil included limb bones, feathers and traces of flattened soft tissue. An elongated element extended from each wrist and could have supported a membrane.",
      howFound: "Researchers named the dinosaur Yi qi and placed it among small maniraptorans. Its anatomy suggests that close relatives of birds evolved several different structures for moving through air.",
      whatMakesUnique: "The fossil preserves only part of the tissue, leaving the original wing outline and flight performance uncertain. The pin marks Qinglong County as the locality proxy.",
    },
    gallery: ["/images/discoveries/2015/qinglong-hebei-yi-qi-jurassic-dinosaur-wing-membrane.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/25924069/",
    videoUrls: [],
    relatedSlugs: ["trotternish-skye-dearc-jurassic-pterosaur-juvenile-wingspan"],
    tags: ["Maniraptorans", "Wing membranes", "jurassic", "Hebei"],
  },
];
