import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during August 2026.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const august2026Discoveries: Discovery[] = [
  {
    slug: "trinidad-tobago-deep-sea-cold-seeps",
    title: "A Trinidad and Tobago Expedition Confirms 25 Deep-Sea Cold Seeps",
    categorySlug: "ocean",
    subtopic: "Deep-sea expeditions",
    year: 2026,
    dateDiscovered: "2026-08-25",
    reviewStatus: "source-verified",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-11-26",
    location: {
      name: "Port of Spain (regional proxy for the offshore survey)",
      lat: 10.66,
      lng: -61.51,
      country: "Trinidad and Tobago",
    },
    discoveringOrg: "Diva Amon, SpeSeas and the Schmidt Ocean Institute expedition team",
    heroImage: "/images/discoveries/2026/trinidad-tobago-deep-sea-cold-seeps.webp",
    imageAlt: "Original editorial diagram for Trinidad and Tobago. 219 bubble streams: acoustic leads found in mapping. 25 cold seeps: ecosystems confirmed by video.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2026/trinidad-tobago-deep-sea-cold-seeps.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A locally led expedition used seafloor mapping and a remotely operated vehicle to verify 25 cold-seep ecosystems in the waters of Trinidad and Tobago.",
    story: {
      whyThere: "Fluids rich in methane can rise from marine sediments and support ecosystems where sunlight is absent. The survey covered offshore areas in the country's marine territory. Port of Spain is a regional marker.",
      howFound: "Acoustic data identified 219 bubble streams that could indicate a seep. The team used the remotely operated vehicle SuBastian to inspect potential sites and directly confirmed 25 ecosystems.",
      whatMakesUnique: "Direct observations distinguished animal communities from acoustic leads. Some seeps supported dense beds of mussels and tubeworms. The team's suspected new species are a separate result that still requires taxonomic confirmation.",
    },
    gallery: ["/images/discoveries/2026/trinidad-tobago-deep-sea-cold-seeps.webp"],
    primarySourceUrl: "https://schmidtocean.org/first-caribbean-led-expedition-to-explore-trinidad-and-tobagos-deep-sea-unveils-rich-ecosystems/",
    videoUrls: [],
    relatedSlugs: ["lost-city-hydrothermal-field"],
    tags: ["Cold seeps", "deep sea", "Caribbean", "chemosynthesis"],
  },
];
