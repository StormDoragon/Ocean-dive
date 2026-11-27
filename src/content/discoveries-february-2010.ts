import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 2010.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february2010Discoveries: Discovery[] = [
  {
    slug: "western-liaoning-anchiornis-plumage-pigment-pattern",
    "datePublished": "2026-11-27",
    title: "Fossil Pigment Structures Reconstructed a Patterned Feathered Dinosaur",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil discoveries",
    year: 2010,
    dateDiscovered: "2010-02-04",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Western Liaoning, China (fossil-region proxy)",
      lat: 41.06,
      lng: 120.79,
      country: "China",
    },
    discoveringOrg: "Quanguo Li, Ke-Qin Gao and colleagues",
    scientificName: "Anchiornis huxleyi",
    heroImage: "/images/discoveries/2010/western-liaoning-anchiornis-plumage-pigment-pattern.webp",
    imageAlt: "Original editorial diagram for Feathers preserve a map of pigment-related structures. Melanosome shapes: compared with modern feathers. Multiple body regions: inform the reconstructed pattern.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2010/western-liaoning-anchiornis-plumage-pigment-pattern.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Microscopic structures associated with pigment in preserved Anchiornis feathers supported a reconstruction with dark and light patterns and a reddish crest.",
    story: {
      whyThere: "Feathers from several body regions were preserved on one fossil. This made it possible to compare pigment-related structures across the animal.",
      howFound: "The researchers measured the shapes and arrangement of melanosomes and compared them with feathers of living birds. Different body regions gave evidence for different colors.",
      whatMakesUnique: "The result infers parts of the animal’s appearance from pigments still represented by microscopic structures. It does not recover every possible color or surface feature.",
    },
    gallery: ["/images/discoveries/2010/western-liaoning-anchiornis-plumage-pigment-pattern.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/20133521/",
    videoUrls: [],
    relatedSlugs: ["lingyuan-ambopteryx-membranous-wing-fossil"],
    tags: ["feathered dinosaurs", "melanosomes", "fossil colors"],
  },
];
