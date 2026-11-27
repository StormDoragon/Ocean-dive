import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during October 1992.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const october1992Discoveries: Discovery[] = [
  {
    slug: "nevada-devils-hole-calcite-half-million-year-climate-record",
    "datePublished": "2026-11-27",
    title: "Cave Calcite Preserves a Half-Million-Year Climate Record",
    categorySlug: "earth-science",
    subtopic: "Climate records",
    year: 1992,
    dateDiscovered: "1992-10-09",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Devils Hole, Nevada (study area proxy)",
      lat: 36.43,
      lng: -116.28,
      country: "United States",
    },
    discoveringOrg: "Isaac J. Winograd, Tyler B. Coplen and colleagues",
    heroImage: "/images/discoveries/1992/nevada-devils-hole-calcite-half-million-year-climate-record.webp",
    imageAlt: "Original editorial diagram for A long record preserved in a short calcite core. 36 cm: length of the analysed section. About 500,000 years: represented in the dated record.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1992/nevada-devils-hole-calcite-half-million-year-climate-record.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Oxygen-isotope changes in a 36-centimetre section of vein calcite offered a long continental record of environmental change.",
    story: {
      whyThere: "Calcite grew from groundwater and retained a record of changes in oxygen isotopes. The researchers analysed a section roughly the length of a ruler.",
      howFound: "They used uranium-series dating to place the isotope changes in time. The record broadly resembled features from Antarctic ice and ocean sediments while raising questions about the timing of particular changes.",
      whatMakesUnique: "The cave archive provides a land-based comparison for records in other materials. Linking an isotope change to a particular temperature or mechanism requires an interpretation of local groundwater and climate.",
    },
    gallery: [
      "/images/discoveries/1992/nevada-devils-hole-calcite-half-million-year-climate-record.webp",
    ],
    primarySourceUrl: "https://www.usgs.gov/publications/continuous-500000-year-climate-record-vein-calcite-devils-hole-nevada",
    videoUrls: [],
    relatedSlugs: ["fukui-lake-suigetsu-leaf-radiocarbon-record"],
    tags: ["cave deposits", "oxygen isotopes", "uranium-series dating"],
  },
];
