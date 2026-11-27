import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 2009.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july2009Discoveries: Discovery[] = [
  {
    slug: "foz-do-amazonas-deep-sea-fan-transcontinental-river-sediment-record",
    "datePublished": "2026-11-27",
    title: "Seafloor sediments helped date the rise of a transcontinental Amazon",
    categorySlug: "earth-science",
    subtopic: "Climate records",
    year: 2009,
    dateDiscovered: "2009-07-01",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Foz do Amazonas shelf, offshore northern Brazil (regional map proxy for the sampled basin)",
      lat: 1.7,
      lng: -48.08,
      country: "Brazil",
    },
    discoveringOrg: "J. Figueiredo, Carina Hoorn and the Amazon deep-sea fan study team",
    heroImage: "/images/discoveries/2009/foz-do-amazonas-deep-sea-fan-transcontinental-river-sediment-record.webp",
    imageAlt: "Original editorial diagram for The Amazon's history in offshore sediment. 11.8 to 11.3 Ma: first study's onset estimate. 9.4 to 9 Ma: estimate from a later record.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2009/foz-do-amazonas-deep-sea-fan-transcontinental-river-sediment-record.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A study of offshore sediments proposed that the Amazon began draining across the continent in the late Miocene, with estimates varying across studies.",
    story: {
      whyThere: "Sediment carried out of the Amazon basin accumulates on the seabed off northern Brazil. The research team compared fossil ages, isotope information and well records from the outer shelf and the upper deep-sea fan.",
      howFound: "The study identified a shift in sediment supply and inferred the start of cross-continent drainage between about 11.8 and 11.3 million years ago. It proposed that the river approached its present form later.",
      whatMakesUnique: "A later offshore study using a separate record obtained a younger estimate, around 9.4 to 9 million years ago. The two reconstructions show how dating an ancient drainage network depends on the sediment record and interpretation.",
    },
    gallery: [
      "/images/discoveries/2009/foz-do-amazonas-deep-sea-fan-transcontinental-river-sediment-record.webp",
    ],
    primarySourceUrl: "https://dare.uva.nl/id/1aa82e4e-a4a6-4c9b-8f4d-d4bd81060eb1",
    supportingSources: [
      {
        title: "Later marine record and younger timing estimate",
        url: "https://doi.org/10.1016/j.gloplacha.2017.02.005",
        publisher: "Global and Planetary Change",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["lake-bosumtwi-ghana-million-year-sediment-chronology"],
    tags: ["Amazon River", "sediment cores", "Miocene"],
  },
];
