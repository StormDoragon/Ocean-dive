import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during December 2021.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const december2021Discoveries: Discovery[] = [
  {
    slug: "cerro-guido-magallanes-stegouros-seven-pairs-tail-osteoderms",
    "datePublished": "2026-11-27",
    title: "Seven Pairs of Bone Plates Edged This Chilean Dinosaur’s Tail",
    categorySlug: "dinosaurs-fossils",
    subtopic: "New dinosaur species",
    year: 2021,
    dateDiscovered: "2021-12-01",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Río de las Chinas valley, Cerro Guido study-area proxy",
      lat: -50.88,
      lng: -72.55,
      country: "Chile",
    },
    discoveringOrg: "Sergio Soto-Acuña and the Magallanes paleontology team",
    scientificName: "Stegouros elengassen",
    heroImage: "/images/discoveries/2021/cerro-guido-magallanes-stegouros-seven-pairs-tail-osteoderms.webp",
    imageAlt: "Original editorial diagram for A plate-edged tail. 7 pairs: Bony plates. Magallanes: Late Cretaceous site.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2021/cerro-guido-magallanes-stegouros-seven-pairs-tail-osteoderms.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A largely complete skeleton of Stegouros elengassen from southern Chile preserved a flat tail structure formed by seven pairs of bony plates.",
    story: {
      whyThere: "The Late Cretaceous skeleton included part of the skull, much of the body and bony plates around the outer half of the tail. The paired elements projected to the sides and gave the tail a broad outline.",
      howFound: "Skeletal comparisons placed the animal on an early branch of ankylosaurs in the study’s evolutionary analysis. The team compared it with armored dinosaurs known from Antarctica and Australia.",
      whatMakesUnique: "The finding expanded the range of tail shapes known among armored dinosaurs. The pin represents the Chilean study area.",
    },
    gallery: [
      "/images/discoveries/2021/cerro-guido-magallanes-stegouros-seven-pairs-tail-osteoderms.webp",
    ],
    primarySourceUrl: "https://www.nature.com/articles/s41586-021-04147-1",
    videoUrls: [],
    relatedSlugs: ["jameson-land-greenland-issi-saaneq-two-triassic-skulls"],
    tags: ["Ankylosaurs", "Osteoderms", "Magallanes", "late cretaceous"],
  },
];
