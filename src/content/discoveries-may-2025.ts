import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 2025.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may2025Discoveries: Discovery[] = [
  {
    slug: "mosura-fentoni",
    title: "Mosura Fentoni, a Three-Eyed Cambrian Predator",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil discoveries",
    year: 2025,
    dateDiscovered: "2025-05-14",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-13",
    location: {
      name: "Marble Canyon, Burgess Shale, British Columbia",
      lat: 51.43,
      lng: -116.48,
      country: "Canada",
    },
    discoveringOrg: "Royal Ontario Museum / University of Manitoba",
    scientificName: "Mosura fentoni",
    classification: "Animalia · Panarthropoda · Radiodonta",
    conservationStatus: "Extinct (Cambrian, approximately 506 million years ago)",
    heroImage: "/images/discoveries/2025/mosura-fentoni.webp",
    imageAlt: "Original editorial reconstruction of the three-eyed Cambrian radiodont Mosura fentoni swimming above the Burgess Shale seafloor, with respiratory segments highlighted.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "reconstruction",
    imageRelation: "illustration",
    summary: "More than 60 Burgess Shale fossils revealed Mosura fentoni, a roughly six-centimetre radiodont with three eyes, grasping frontal appendages, and a body divided into a broad swimming region and a specialized rear section carrying respiratory structures. The anatomy expands the known diversity of early arthropod relatives.",
    story: {
      whyThere: "Royal Ontario Museum expeditions excavated Marble Canyon because its fine-grained Cambrian rocks preserve soft tissues that normally decay. The site has produced many animals related to the evolutionary radiation of arthropods.",
      howFound: "Researchers prepared and photographed compression fossils preserving eyes, limbs, gut traces, body flaps, and gill-like structures. They compared the consistent anatomy across dozens of specimens with known radiodont groups and used phylogenetic analysis to place the new species.",
      whatMakesUnique: "Mosura combined a compact predatory front end with 26 trunk segments and a differentiated respiratory rear region. That degree of body specialization shows that arthropod relatives were experimenting with complex regional anatomy more than 500 million years ago.",
    },
    gallery: ["/images/discoveries/2025/mosura-fentoni.webp"],
    paperUrl: "https://doi.org/10.1098/rsos.242161",
    videoUrls: [],
    relatedSlugs: ["perucetus-colossus", "prototaxites-extinct-eukaryotic-lineage"],
    tags: ["mosura", "radiodont", "burgess shale", "cambrian", "fossil"],
  },
];
