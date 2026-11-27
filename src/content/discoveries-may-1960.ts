import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 1960.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may1960Discoveries: Discovery[] = [
  {
    slug: "mauna-loa-keeling-atmospheric-carbon-dioxide-seasonal-record",
    "datePublished": "2026-11-27",
    title: "Early Mauna Loa Measurements Revealed a Seasonal Carbon Dioxide Cycle",
    categorySlug: "earth-science",
    subtopic: "Climate records",
    year: 1960,
    dateDiscovered: "1960-05-01",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Mauna Loa Observatory, Hawaiʻi (monitoring-site proxy)",
      lat: 19.536,
      lng: -155.576,
      country: "United States",
    },
    discoveringOrg: "Charles David Keeling",
    heroImage: "/images/discoveries/1960/mauna-loa-keeling-atmospheric-carbon-dioxide-seasonal-record.webp",
    imageAlt: "Original editorial diagram for A consistent record separates cycle and trend. Seasonal cycle: emerged from repeated readings. Year-to-year rise: suggested by the early series.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1960/mauna-loa-keeling-atmospheric-carbon-dioxide-seasonal-record.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Calibrated measurements found a repeating seasonal pattern in atmospheric carbon dioxide and suggested a year-to-year increase in the early record.",
    story: {
      whyThere: "Carbon dioxide near strong local sources can vary. The monitoring program collected air at remote stations, including high on Mauna Loa.",
      howFound: "Repeated measurements showed a cycle through the year. A comparison of annual averages also hinted at a rise that needed a longer record to establish.",
      whatMakesUnique: "The observations show how consistent observations can distinguish seasonal variation from a longer-term trend.",
    },
    gallery: [
      "/images/discoveries/1960/mauna-loa-keeling-atmospheric-carbon-dioxide-seasonal-record.webp",
    ],
    primarySourceUrl: "https://scrippsco2.ucsd.edu/assets/publications/keeling_tellus_1960.pdf",
    videoUrls: [],
    relatedSlugs: ["alta-floresta-amazon-aircraft-carbon-flux"],
    tags: ["atmospheric carbon dioxide", "Mauna Loa", "long-term observations"],
  },
];
