import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during April 2020.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const april2020Discoveries: Discovery[] = [
  {
    slug: "mahajanga-madagascar-adalatherium-gondwanatherian-skeleton",
    "datePublished": "2026-11-27",
    title: "A nearly complete Malagasy fossil revealed an unusual Cretaceous mammal",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Ancient mammals",
    year: 2020,
    dateDiscovered: "2020-04-29",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Mahajanga Basin, northwestern Madagascar (regional map proxy for Maevarano fossils)",
      lat: -15.84,
      lng: 46.63,
      country: "Madagascar",
    },
    discoveringOrg: "David W. Krause and the Adalatherium research team",
    scientificName: "Adalatherium hui",
    heroImage: "/images/discoveries/2020/mahajanga-madagascar-adalatherium-gondwanatherian-skeleton.webp",
    imageAlt: "Original editorial diagram for The skeleton of Adalatherium. Nearly complete: unusual preservation for its group. Distinctive anatomy: documented across skull and body.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2020/mahajanga-madagascar-adalatherium-gondwanatherian-skeleton.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A well-preserved skeleton gave researchers an unusually detailed view of an extinct southern mammal named Adalatherium hui.",
    story: {
      whyThere: "Other mammals from the extinct gondwanatherian group are often known from fragments. The Malagasy discovery preserved the lower jaw and much of the body of a single individual.",
      howFound: "The new specimen had a combination of distinctive skull, tooth and limb features. Those details let researchers compare the body plan with better-known mammal lineages.",
      whatMakesUnique: "The team proposed that long geographic isolation contributed to the animal's unusual anatomy. The skeleton establishes the combination of features, while their evolutionary causes are inferred.",
    },
    gallery: [
      "/images/discoveries/2020/mahajanga-madagascar-adalatherium-gondwanatherian-skeleton.webp",
    ],
    primarySourceUrl: "https://www.nature.com/articles/s41586-020-2234-8",
    supportingSources: [
      {
        title: "Description and geological provenance of the specimen",
        url: "https://www.tandfonline.com/doi/full/10.1080/02724634.2020.1805455",
        publisher: "Journal of Vertebrate Paleontology",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["napudet-west-turkana-alesi-infant-miocene-ape-skull"],
    tags: ["gondwana", "cretaceous", "fossil mammals"],
  },
];
