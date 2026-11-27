import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 2008.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may2008Discoveries: Discovery[] = [
  {
    slug: "gogo-formation-materpiscis-embryo-live-birth",
    "datePublished": "2026-11-27",
    title: "A Fossil Fish Preserved an Embryo Inside Its Body",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil discoveries",
    year: 2008,
    dateDiscovered: "2008-05-29",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Gogo Formation, Kimberley (fossil-region proxy)",
      lat: -18.24,
      lng: 125.62,
      country: "Australia",
    },
    discoveringOrg: "John A. Long, Kate Trinajstic and colleagues",
    scientificName: "Materpiscis attenboroughi",
    heroImage: "/images/discoveries/2008/gogo-formation-materpiscis-embryo-live-birth.webp",
    imageAlt: "Original editorial diagram for Fossil anatomy records internal development. Embryonic skeleton: preserved within an adult. Associated structure: interpreted as an umbilical connection.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2008/gogo-formation-materpiscis-embryo-live-birth.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A Late Devonian armored fish preserved a small developing fish inside its body, with an associated structure interpreted as an umbilical connection.",
    story: {
      whyThere: "The fossil beds in Western Australia preserve some animals in three dimensions. Preparation revealed small skeletal elements within one adult specimen.",
      howFound: "Comparisons showed that the small bones belonged to an embryo. The location and associated structures supported internal development rather than a swallowed meal.",
      whatMakesUnique: "The specimen documents live-bearing reproduction in this extinct group. It does not show that every armored fish reproduced in the same way.",
    },
    gallery: ["/images/discoveries/2008/gogo-formation-materpiscis-embryo-live-birth.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/18509443/",
    videoUrls: [],
    relatedSlugs: ["las-hoyas-spinolestes-early-mammal-hair-and-spines"],
    tags: ["placoderms", "Devonian fossils", "embryo preservation"],
  },
];
