import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 2022.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july2022Discoveries: Discovery[] = [
  {
    slug: "qikiqtania-wakei",
    title: "Qikiqtania Wakei Returned to Open Water",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil discoveries",
    year: 2022,
    dateDiscovered: "2022-07-20",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-13",
    location: {
      name: "Fram Formation, southern Ellesmere Island, Nunavut",
      lat: 77.170583,
      lng: -86.187983,
      country: "Canada",
    },
    discoveringOrg: "University of Chicago / Academy of Natural Sciences of Drexel University / Nunavut Paleontological Expeditions",
    scientificName: "Qikiqtania wakei",
    classification: "Animalia · Chordata · Sarcopterygii · Elpistostegalia",
    conservationStatus: "Extinct (Late Devonian, approximately 375 million years ago)",
    heroImage: "/images/discoveries/2022/qikiqtania-wakei.webp",
    imageAlt: "Original editorial fossil reconstruction of Qikiqtania wakei swimming above a Late Devonian riverbed, with its pectoral fin highlighted.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "reconstruction",
    imageRelation: "illustration",
    summary: "A Late Devonian fossil from Nunavut revealed Qikiqtania wakei, a close relative of limbed vertebrates whose pectoral fin was specialized for swimming rather than supporting the body on a hard surface. The animal shows that evolution near the fish-to-tetrapod transition explored more than one ecological direction.",
    story: {
      whyThere: "Paleontologists returned repeatedly to the Fram Formation because the same Arctic rocks preserve Tiktaalik and other fossils central to understanding how vertebrates moved from water toward land. The Qikiqtania specimen was collected from a nearby but slightly older floodplain horizon.",
      howFound: "The fossil included jaws, scales, gill-region bones, and a nearly complete pectoral fin. Micro-CT imaging exposed the humerus inside the rock, allowing researchers to compare muscle scars, joint orientation, and structural processes with those of Tiktaalik and early tetrapods.",
      whatMakesUnique: "Its fin lacked anatomical features associated with weight-bearing on the bottom and instead retained a smooth, paddle-like configuration. That combination suggests a secondary return toward open-water swimming within a lineage often portrayed as moving steadily toward land.",
    },
    gallery: ["/images/discoveries/2022/qikiqtania-wakei.webp"],
    paperUrl: "https://www.nature.com/articles/s41586-022-04990-w",
    videoUrls: [],
    relatedSlugs: ["prototaxites-extinct-eukaryotic-lineage", "vasuki-indicus-giant-snake"],
    tags: ["devonian", "tetrapodomorph", "fossil fish", "nunavut", "vertebrate evolution"],
  },
];
