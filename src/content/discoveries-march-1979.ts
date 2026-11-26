import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during March 1979.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const march1979Discoveries: Discovery[] = [
  {
    slug: "galapagos-rift-first-hydrothermal-vents",
    "datePublished": "2026-11-26",
    title: "Galápagos Rift Dives Reveal Ecosystems Fueled by Vent Chemistry",
    categorySlug: "ocean",
    subtopic: "Hydrothermal vents",
    year: 1979,
    dateDiscovered: "1979-03-16",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-26",
    location: {
      name: "Eastern Galápagos Rift (regional marker for 1977 dives)",
      lat: 0.8,
      lng: -86.17,
      country: "Ecuador",
    },
    discoveringOrg: "John Corliss and the Galápagos Rift expedition team",
    heroImage: "/images/discoveries/1979/galapagos-rift-first-hydrothermal-vents.webp",
    imageAlt: "Original editorial diagram for 1977 Galápagos Rift expedition. Warm springs: observed on the seabed. Chemical energy: supported a distinct food web.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1979/galapagos-rift-first-hydrothermal-vents.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "The 1977 expedition photographed and sampled warm seafloor springs with dense animal communities. Its 1979 paper explained how chemical energy could support a deep-sea food web.",
    story: {
      whyThere: "The Galápagos Rift is a volcanic spreading ridge. Cracks let seawater circulate beneath the seabed and return heated and chemically altered.",
      howFound: "Towed cameras provided the first close views and led researchers back with Alvin. Samples let the team assess how dissolved materials and heat move from the rock into seawater.",
      whatMakesUnique: "The vent food web depended on microbes that use chemical energy. That explained how an animal community could thrive without local photosynthesis and redirected research into the diversity of deep-sea ecosystems.",
    },
    gallery: ["/images/discoveries/1979/galapagos-rift-first-hydrothermal-vents.webp"],
    paperUrl: "https://doi.org/10.1126/science.203.4385.1073",
    primarySourceUrl: "https://www.usgs.gov/publications/submarine-thermal-springs-galapagos-rift",
    supportingSources: [
      {
        title: "1977 expedition account",
        url: "https://www.whoi.edu/feature/history-hydrothermal-vents/discovery/1977.html",
        publisher: "Woods Hole Oceanographic Institution",
        tier: "Tier 2",
        sourceType: "institutional",
        accessedAt: "2026-11-26",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["lost-city-hydrothermal-field", "trinidad-tobago-deep-sea-cold-seeps"],
    tags: ["hydrothermal vents", "Galápagos Rift", "chemosynthesis", "deep sea"],
  },
];
