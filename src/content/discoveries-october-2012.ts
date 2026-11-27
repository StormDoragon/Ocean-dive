import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during October 2012.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const october2012Discoveries: Discovery[] = [
  {
    slug: "fukui-lake-suigetsu-leaf-radiocarbon-record",
    "datePublished": "2026-11-27",
    title: "Leaves in Lake Suigetsu Extend a Terrestrial Radiocarbon Record",
    categorySlug: "earth-science",
    subtopic: "Climate records",
    year: 2012,
    dateDiscovered: "2012-10-19",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Lake Suigetsu, Fukui (sediment study site)",
      lat: 35.583,
      lng: 135.883,
      country: "Japan",
    },
    discoveringOrg: "Christopher Bronk Ramsey, Richard A. Staff and colleagues",
    heroImage: "/images/discoveries/2012/fukui-lake-suigetsu-leaf-radiocarbon-record.webp",
    imageAlt: "Original editorial diagram for A radiocarbon record built from land plants. 11,200–52,800 years: range reported for the sediment record. Leaf remains: carried the terrestrial carbon signal.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2012/fukui-lake-suigetsu-leaf-radiocarbon-record.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Radiocarbon measurements of terrestrial plant material in lake sediment produced a record from about 11,200 to 52,800 years ago.",
    story: {
      whyThere: "Leaves from plants on land preserve carbon from the atmosphere. Layers of sediment in Lake Suigetsu held plant remains long beyond the time range covered by the most recent continuous tree-ring records.",
      howFound: "The team compared radiocarbon measurements of the plant remains with a chronology for the enclosing sediments. The combined record helps estimate how atmospheric radiocarbon changed over time.",
      whatMakesUnique: "A terrestrial chronology can help compare dates across climate records. The paper describes its own uncertainties, which affect how closely events in two separate records can be aligned.",
    },
    gallery: ["/images/discoveries/2012/fukui-lake-suigetsu-leaf-radiocarbon-record.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/23087245/",
    videoUrls: [],
    relatedSlugs: ["nevada-devils-hole-calcite-half-million-year-climate-record"],
    tags: ["radiocarbon calibration", "lake sediment", "terrestrial archives"],
  },
];
