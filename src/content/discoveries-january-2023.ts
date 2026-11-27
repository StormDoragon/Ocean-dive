import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during January 2023.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const january2023Discoveries: Discovery[] = [
  {
    slug: "rio-negro-sopladora-hyloscirtus-tolkieni-stream-treefrog",
    "datePublished": "2026-11-27",
    title: "A Distinctive Stream Treefrog Is Described From Ecuador",
    categorySlug: "biology",
    subtopic: "New species",
    year: 2023,
    dateDiscovered: "2023-01-19",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Río Negro–Sopladora region (park-scale proxy)",
      lat: -2.84,
      lng: -78.57,
      country: "Ecuador",
    },
    discoveringOrg: "Juan C. Sánchez-Nivicela, José M. Falcón-Reibán and Diego F. Cisneros-Heredia",
    scientificName: "Hyloscirtus tolkieni",
    heroImage: "/images/discoveries/2023/rio-negro-sopladora-hyloscirtus-tolkieni-stream-treefrog.webp",
    imageAlt: "Original editorial diagram for Markings on an Ecuadorian stream frog. 64.9 mm: length of the described adult female. Yellow and dark spots: part of the diagnostic pattern.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2023/rio-negro-sopladora-hyloscirtus-tolkieni-stream-treefrog.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A female frog from Ecuador’s eastern Andes helped researchers recognize a stream treefrog with an unusual combination of surface markings and broad toe fringes.",
    story: {
      whyThere: "The frog’s back carries yellow flecks and smaller dark spots across a pale network on a gray-green background. Its underside is yellow with prominent dark markings.",
      howFound: "Comparisons with other Hyloscirtus species considered the shape of the head and fingers along with the colors. The adult female used in the original description measured 64.9 millimetres from snout to vent.",
      whatMakesUnique: "The original paper was based on a single specimen. That leaves variation in coloration, body size and ecology for follow-up surveys.",
    },
    gallery: [
      "/images/discoveries/2023/rio-negro-sopladora-hyloscirtus-tolkieni-stream-treefrog.webp",
    ],
    primarySourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10208809/",
    videoUrls: [],
    relatedSlugs: ["western-arunachal-trimeresurus-salazar-green-pit-viper"],
    tags: ["treefrogs", "Andes", "amphibian taxonomy"],
  },
];
