import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 1981.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july1981Discoveries: Discovery[] = [
  {
    slug: "woods-hole-riftia-vent-tubeworm-bacterial-symbiosis",
    "datePublished": "2026-11-27",
    title: "Microscopy revealed microbial partners inside giant vent tubeworms",
    categorySlug: "ocean",
    subtopic: "Hydrothermal vents",
    year: 1981,
    dateDiscovered: "1981-07-17",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Woods Hole Oceanographic Institution, Massachusetts (research-team proxy)",
      lat: 41.524,
      lng: -70.672,
      country: "United States",
    },
    discoveringOrg: "Colleen M. Cavanaugh, Stephen Gardiner, Meredith Jones, Holger Jannasch and John Waterbury",
    scientificName: "Riftia pachyptila",
    heroImage: "/images/discoveries/1981/woods-hole-riftia-vent-tubeworm-bacterial-symbiosis.webp",
    imageAlt: "Original editorial diagram for Microbial partners inside a vent worm. Riftia: the animal host. Sulfur oxidation: proposed source of energy.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1981/woods-hole-riftia-vent-tubeworm-bacterial-symbiosis.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Cells within the vent worm Riftia pachyptila suggested a partnership that could turn sulfur chemistry into food.",
    story: {
      whyThere: "Giant Riftia tubeworms live near hot fluids on the seafloor. The researchers examined tissue from the worms and found cells consistent with bacteria living inside them.",
      howFound: "Microscopy and enzyme evidence suggested that these cells could use energy from sulfur compounds to build organic matter. It offered a way to account for nutrition in an animal living beyond the reach of sunlight.",
      whatMakesUnique: "The 1981 paper presented evidence for the partnership. It helped establish why hydrothermal vents can sustain dense animal communities in the deep ocean.",
    },
    gallery: ["/images/discoveries/1981/woods-hole-riftia-vent-tubeworm-bacterial-symbiosis.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/17819907/",
    videoUrls: [],
    relatedSlugs: ["missoula-macrolichen-cortex-budding-yeasts"],
    tags: ["hydrothermal vents", "tubeworms", "symbiosis"],
  },
];
