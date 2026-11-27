import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during December 2020.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const december2020Discoveries: Discovery[] = [
  {
    slug: "berlin-perovskite-silicon-tandem-solar-cell-29-15-percent",
    "datePublished": "2026-11-27",
    title: "A perovskite–silicon tandem solar cell reached 29.15% efficiency",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 2020,
    dateDiscovered: "2020-12-11",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Helmholtz-Zentrum Berlin, Adlershof (lead research institution map proxy)",
      lat: 52.429,
      lng: 13.535,
      country: "Germany",
    },
    discoveringOrg: "Amran Al-Ashouri and the tandem solar cell team",
    heroImage: "/images/discoveries/2020/berlin-perovskite-silicon-tandem-solar-cell-29-15-percent.webp",
    imageAlt: "Original editorial diagram for A two-layer solar cell. 29.15 percent: certified efficiency of the test device. Perovskite and silicon: harvest different parts of the spectrum.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2020/berlin-perovskite-silicon-tandem-solar-cell-29-15-percent.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Improved charge extraction helped a laboratory-scale tandem solar cell convert 29.15% of incident light energy into electricity under standard testing.",
    story: {
      whyThere: "A tandem solar cell stacks layers that absorb different parts of the sunlight spectrum. The team coupled a perovskite top cell with a silicon bottom cell and worked on extracting charge from the upper layer.",
      howFound: "The resulting laboratory device achieved a certified 29.15 percent efficiency. A stability test also examined how the cell performed over hundreds of hours under the reported conditions.",
      whatMakesUnique: "The result demonstrated the performance of one small device. Module-scale yield and operating life outdoors require different tests.",
    },
    gallery: [
      "/images/discoveries/2020/berlin-perovskite-silicon-tandem-solar-cell-29-15-percent.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/33303611/",
    supportingSources: [
      {
        title: "Institutional description and certified efficiency",
        url: "https://helmholtz-berlin.de/pubbin/news_seite?nid=22360&sprache=en",
        publisher: "Helmholtz-Zentrum Berlin",
        tier: "Tier 2",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["west-lafayette-barium-sulfate-radiative-cooling-coating"],
    tags: ["solar cells", "perovskites", "tandem photovoltaics"],
  },
];
