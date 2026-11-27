import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during January 2012.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const january2012Discoveries: Discovery[] = [
  {
    slug: "east-scotia-ridge-e2-e9-antarctic-vent-communities",
    "datePublished": "2026-11-27",
    title: "East Scotia Ridge Vents Host a Distinctive Southern Ocean Community",
    categorySlug: "ocean",
    subtopic: "Hydrothermal vents",
    year: 2012,
    dateDiscovered: "2012-01-03",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "East Scotia Ridge E2 (one of two vent fields)",
      lat: -56.088,
      lng: -30.32,
      country: "Southern Ocean",
      depthMeters: 2600,
    },
    discoveringOrg: "Alex D. Rogers, Paul A. Tyler and colleagues",
    heroImage: "/images/discoveries/2012/east-scotia-ridge-e2-e9-antarctic-vent-communities.webp",
    imageAlt: "Original editorial diagram for A new pattern of life at Southern Ocean vents. E2 and E9: two segments surveyed. Animal communities: differed from other ocean basins.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2012/east-scotia-ridge-e2-e9-antarctic-vent-communities.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Observations at two deep vent fields found dense groups of yeti crabs and other animals in combinations unlike familiar vent communities elsewhere.",
    story: {
      whyThere: "A remotely operated vehicle visited two segments of the East Scotia Ridge. Cameras recorded black smokers, cooler diffuse flow and the distribution of animals around them.",
      howFound: "The survey saw dense groups of yeti crabs, stalked barnacles and other invertebrates. Several animal groups common at vents in warmer oceans were absent from the surveyed sites.",
      whatMakesUnique: "Comparing the two fields with vent records elsewhere led the team to propose a distinct Southern Ocean vent region. The authors identified dispersal barriers as a possible explanation.",
    },
    gallery: ["/images/discoveries/2012/east-scotia-ridge-e2-e9-antarctic-vent-communities.webp"],
    primarySourceUrl: "https://journals.plos.org/plosbiology/article?id=10.1371%2Fjournal.pbio.1001234",
    supportingSources: [
      {
        title: "E2 vent coordinates and depth",
        url: "https://volcano.si.edu/reports_bgvn.cfm?IssueMonth=03&IssueYear=2012",
        publisher: "Smithsonian Global Volcanism Program",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["south-sandwich-kemp-caldera-sulfur-chimney-fauna"],
    tags: ["Southern Ocean", "yeti crabs", "vent biogeography"],
  },
];
