import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during January 2008.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const january2008Discoveries: Discovery[] = [
  {
    slug: "kiyu-san-jose-josephoartigasia-giant-rodent-skull",
    "datePublished": "2026-11-27",
    title: "A Fossil Skull From Uruguay Reveals an Exceptionally Large Rodent",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil discoveries",
    year: 2008,
    dateDiscovered: "2008-01-15",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Kiyú, San José Formation",
      lat: -34.69,
      lng: -56.74,
      country: "Uruguay",
    },
    discoveringOrg: "Andrés Rinderknecht and R. Ernesto Blanco",
    scientificName: "Josephoartigasia monesi",
    heroImage: "/images/discoveries/2008/kiyu-san-jose-josephoartigasia-giant-rodent-skull.webp",
    imageAlt: "Original editorial diagram for A skull reveals a giant rodent. ~1,000 kg: approximate original mass estimate. Uruguay: source of the preserved skull.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2008/kiyu-san-jose-josephoartigasia-giant-rodent-skull.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "An unusually complete skull supported naming Josephoartigasia monesi and showed that at least some extinct South American rodents reached extraordinary sizes.",
    story: {
      whyThere: "The fossil came from the San José Formation in Uruguay, from rocks interpreted as part of an ancient coastal or estuarine setting. The skull preserved details unavailable in many earlier giant-rodent fossils.",
      howFound: "Its skull and teeth helped place it with extinct relatives of the living pacarana. The authors used proportions in living rodents to estimate body mass.",
      whatMakesUnique: "The original estimate was close to a metric ton. Extrapolating from skull dimensions in a much smaller living sample makes the exact figure uncertain.",
    },
    gallery: ["/images/discoveries/2008/kiyu-san-jose-josephoartigasia-giant-rodent-skull.webp"],
    primarySourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2599941/",
    videoUrls: [],
    relatedSlugs: ["linxia-basin-paraceratherium-linxiaense-oligocene-giant-rhino"],
    tags: ["giant rodents", "San José Formation", "fossil skulls"],
  },
];
