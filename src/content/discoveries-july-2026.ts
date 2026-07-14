import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 2026.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july2026Discoveries: Discovery[] = [
  {
    slug: "demogorgon-cavefish",
    title: "Demogorgonichthys Arcanus, the Demon Cavefish",
    categorySlug: "biology",
    subtopic: "New species",
    year: 2026,
    dateDiscovered: "2026-07-09",
    reviewStatus: "preliminary",
    sourceTier: "Tier 3",
    sourceAccessedAt: "2026-07-13",
    location: {
      name: "Redstone Arsenal karst region, Huntsville, Alabama",
      lat: 34.68,
      lng: -86.65,
      country: "United States",
    },
    discoveringOrg: "University of Alabama in Huntsville / Redstone Arsenal natural-resources team",
    scientificName: "Demogorgonichthys arcanus",
    classification: "Animalia · Chordata · Actinopterygii · Amblyopsidae",
    conservationStatus: "Not evaluated; known from a highly restricted cave system",
    heroImage: "/images/discoveries/2026/demogorgon-cavefish.webp",
    imageAlt: "Original editorial reconstruction of the pale, eyeless Demogorgon cavefish swimming through a dark Alabama karst passage; the cave entrance is intentionally not depicted.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "reconstruction",
    imageRelation: "illustration",
    summary: "Researchers described Demogorgonichthys arcanus, a new cavefish from the Redstone Arsenal karst near Huntsville. The pale subterranean predator differs from the Southern cavefish in head shape and fin-ray anatomy, and its coexistence with another predatory cavefish makes the small groundwater habitat ecologically unusual.",
    story: {
      whyThere: "Biologists conduct recurring surveys in the arsenal's protected cave and groundwater systems to track rare subterranean species and water quality. The fish was first photographed during a February 2025 survey in a cave whose precise entrance is withheld to protect the habitat.",
      howFound: "Researchers documented body proportions, skull and fin features, pigmentation, sensory anatomy, and genetic evidence before comparing the specimens with recognized North American cavefish lineages. The description was then reported as a distinct genus and species.",
      whatMakesUnique: "Two specialized predatory cavefish appear to share the same confined subterranean system, an uncommon arrangement at the top of a cave food web. The discovery also underscores how groundwater contamination could threaten species whose entire known range may be extremely small.",
    },
    gallery: ["/images/discoveries/2026/demogorgon-cavefish.webp"],
    primarySourceUrl: "https://www.axios.com/local/huntsville/2026/07/09/huntsville-researchers-discover-demon-cavefish-redstone-arsenal",
    videoUrls: [],
    relatedSlugs: ["alaska-golden-orb-discovery", "microeledone-galapagensis"],
    tags: ["cavefish", "new species", "alabama", "subterranean biodiversity", "karst"],
  },
];
