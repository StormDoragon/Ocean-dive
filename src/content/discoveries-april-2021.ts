import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during April 2021.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const april2021Discoveries: Discovery[] = [
  {
    slug: "west-lafayette-barium-sulfate-radiative-cooling-coating",
    "datePublished": "2026-11-27",
    title: "A barium sulfate paint reflected 98.1% of sunlight in tests",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 2021,
    dateDiscovered: "2021-04-15",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Purdue University, West Lafayette (research lab map proxy)",
      lat: 40.425,
      lng: -86.918,
      country: "United States",
    },
    discoveringOrg: "Xiangyu Li, Xiulin Ruan and the Purdue radiative-cooling research team",
    heroImage: "/images/discoveries/2021/west-lafayette-barium-sulfate-radiative-cooling-coating.webp",
    imageAlt: "Original editorial diagram for Measuring a radiative cooling coating. 98.1 percent: reported solar reflectance. Infrared emission: lets heat leave the surface.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2021/west-lafayette-barium-sulfate-radiative-cooling-coating.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A paint containing barium sulfate combined strong sunlight reflection with infrared emission in outdoor cooling tests.",
    story: {
      whyThere: "A passive cooling coating needs to absorb very little incoming sunlight while still letting heat escape. The team selected a white scattering pigment and used a range of particle sizes to reflect a broad span of wavelengths.",
      howFound: "The reported paint sample reflected 98.1 percent of incoming sunlight. It also emitted heat through a range of infrared wavelengths that can pass through the atmosphere.",
      whatMakesUnique: "In the team's tests the coated surface could stay cooler than the surrounding air. Actual cooling depends on sunlight, sky conditions, application and how heat flows through the underlying surface.",
    },
    gallery: [
      "/images/discoveries/2021/west-lafayette-barium-sulfate-radiative-cooling-coating.webp",
    ],
    primarySourceUrl: "https://doi.org/10.1021/acsami.1c02368",
    supportingSources: [
      {
        title: "Institutional testing summary",
        url: "https://stories.purdue.edu/the-whitest-paint-is-here-and-its-the-coolest-literally/",
        publisher: "Purdue University",
        tier: "Tier 2",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["berlin-perovskite-silicon-tandem-solar-cell-29-15-percent"],
    tags: ["radiative cooling", "coatings", "solar reflectance"],
  },
];
