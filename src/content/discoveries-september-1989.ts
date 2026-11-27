import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during September 1989.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const september1989Discoveries: Discovery[] = [
  {
    slug: "santa-catalina-basin-whale-fall-vent-like-community",
    "datePublished": "2026-11-27",
    title: "A Whale Skeleton Supported Animals Resembling Hydrothermal-Vent Fauna",
    categorySlug: "ocean",
    subtopic: "Deep-sea expeditions",
    year: 1989,
    dateDiscovered: "1989-09-07",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Santa Catalina Basin, southern California (dive-area proxy)",
      lat: 33.25,
      lng: -118.58,
      country: "United States",
      depthMeters: 1240,
    },
    discoveringOrg: "Craig R. Smith, Helmut Kukert, Robert A. Wheatcroft, Peter A. Jumars and Jody W. Deming",
    heroImage: "/images/discoveries/1989/santa-catalina-basin-whale-fall-vent-like-community.webp",
    imageAlt: "Original editorial diagram for A whale skeleton supports vent-like fauna. 1,240 m: documented water depth at the skeleton. Fallen organic matter: supports a specialized seafloor habitat.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1989/santa-catalina-basin-whale-fall-vent-like-community.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A natural whale fall off California hosted an unusual assemblage of deep-sea animals, some resembling those associated with sulfur-rich hydrothermal vents.",
    story: {
      whyThere: "The sinking whale delivered a large pulse of organic matter to a muddy deep-sea basin. A submersible enabled close observations of the skeleton and its surroundings.",
      howFound: "The assemblage around the bones included animals with counterparts in other sulfide-rich environments. Work on the same skeleton also documented different stages of decomposition and preservation.",
      whatMakesUnique: "A whale fall provides a local habitat without requiring a geological hot spring. The discovery helped explain why animals associated with chemical energy can occur on isolated sources of organic matter.",
    },
    gallery: ["/images/discoveries/1989/santa-catalina-basin-whale-fall-vent-like-community.webp"],
    primarySourceUrl: "https://doi.org/10.1038/341027a0",
    supportingSources: [
      {
        title: "Detailed primary report on the same skeleton and site depth",
        url: "https://doi.org/10.1017/S0094837300010368",
        publisher: "Paleobiology",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["sao-paulo-ridge-osedax-braziliensis-abyssal-whale-fall"],
    tags: ["whale fall", "chemosynthesis", "Santa Catalina Basin"],
  },
];
