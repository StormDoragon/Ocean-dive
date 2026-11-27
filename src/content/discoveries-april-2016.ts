import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during April 2016.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const april2016Discoveries: Discovery[] = [
  {
    slug: "sarmiento-sarmientosaurus-skull-and-endocast",
    "datePublished": "2026-11-27",
    title: "A Preserved Sarmientosaurus Skull Revealed Details of a Titanosaur’s Braincase",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil discoveries",
    year: 2016,
    dateDiscovered: "2016-04-26",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Sarmiento area, Chubut (study-area proxy)",
      lat: -45.59,
      lng: -69.07,
      country: "Argentina",
    },
    discoveringOrg: "Rubén D. F. Martínez, Matthew C. Lamanna and colleagues",
    scientificName: "Sarmientosaurus musacchioi",
    heroImage: "/images/discoveries/2016/sarmiento-sarmientosaurus-skull-and-endocast.webp",
    imageAlt: "Original editorial diagram for A skull preserves the spaces around the sensory organs. CT scans: reveal internal skull structures. Inner ear: informs an estimate of habitual head posture.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2016/sarmiento-sarmientosaurus-skull-and-endocast.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A nearly complete skull from Patagonia let researchers reconstruct the brain cavity and inner ear of a titanosaur from the early Late Cretaceous.",
    story: {
      whyThere: "Titanosaur fossils often preserve large body bones while leaving little of the head. This specimen retained a substantial skull and connected neck material.",
      howFound: "CT scans exposed cavities and channels inside the skull. Their shapes helped the team examine the balance organs and compare them with other sauropods.",
      whatMakesUnique: "The inner-ear orientation supports a downward habitual head posture in the study’s reconstruction. Such estimates depend on how living posture relates to the fossil anatomy.",
    },
    gallery: ["/images/discoveries/2016/sarmiento-sarmientosaurus-skull-and-endocast.webp"],
    primarySourceUrl: "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0151661",
    videoUrls: [],
    relatedSlugs: ["bajada-colorada-bajadasaurus-forward-curving-neck-spines"],
    tags: ["titanosaurs", "ct scanning", "braincases"],
  },
];
