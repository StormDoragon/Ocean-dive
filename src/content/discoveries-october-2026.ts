import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during October 2026.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const october2026Discoveries: Discovery[] = [
  {
    slug: "paludohadros-proudlovii",
    datePublished: "2026-11-26",
    title: "A Surrey Clay Pit Yields a New Early Hadrosauroid",
    categorySlug: "dinosaurs-fossils",
    subtopic: "New dinosaur species",
    year: 2026,
    dateDiscovered: "2026-10-26",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-26",
    location: {
      name: "Smokejacks Brickworks area, Surrey (quarry-area marker)",
      lat: 51.13,
      lng: -0.415,
      country: "United Kingdom",
    },
    discoveringOrg: "Ricardo Sacamoto and the Natural History Museum–University of São Paulo team",
    scientificName: "Paludohadros proudlovii",
    heroImage: "/images/discoveries/2026/paludohadros-proudlovii.webp",
    imageAlt: "Original editorial diagram for Paludohadros proudlovii. Weald Clay: Lower Cretaceous deposit. New species: identified from a partial skeleton.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2026/paludohadros-proudlovii.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Re-examination of a partial skeleton from Smokejacks Brickworks identified a new plant-eating dinosaur, Paludohadros proudlovii. Its fossil came from Lower Cretaceous clay in southern England.",
    story: {
      whyThere: "The Weald Clay Formation preserves a wetland environment. Clay extraction exposed bones that were collected in 2001 and later studied in the Natural History Museum's collections.",
      howFound: "Researchers compared multiple parts of the skeleton, including teeth, the lower jaw, the forelimb and the pelvis. A distinctive combination of ridge shapes in the teeth and differences in other bones separated the specimen from previously named animals.",
      whatMakesUnique: "The new species shows more variety among early duck-billed dinosaur relatives in the Weald than the older classification suggested. Differences from fossils on the Isle of Wight may reflect a difference in age as well as geography.",
    },
    gallery: ["/images/discoveries/2026/paludohadros-proudlovii.webp"],
    primarySourceUrl: "https://www.tandfonline.com/doi/full/10.1080/14772019.2026.2726221",
    videoUrls: [],
    relatedSlugs: ["dreadnoughtus-titanosaur", "bicharracosaurus-dionidei"],
    tags: ["Iguanodontians", "cretaceous", "Surrey", "Fossils"],
  },
];
