import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during October 2005.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const october2005Discoveries: Discovery[] = [
  {
    slug: "parkfield-2004-earthquake-dense-monitoring-no-precursor",
    "datePublished": "2026-11-27",
    title: "A Dense Sensor Network Records Parkfield’s Earthquake Without a Clear Precursor",
    categorySlug: "earth-science",
    subtopic: "Earthquakes",
    year: 2005,
    dateDiscovered: "2005-10-13",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Parkfield, California (instrumented fault-segment proxy)",
      lat: 35.9,
      lng: -120.43,
      country: "United States",
    },
    discoveringOrg: "William H. Bakun and the Parkfield experiment team",
    heroImage: "/images/discoveries/2005/parkfield-2004-earthquake-dense-monitoring-no-precursor.webp",
    imageAlt: "Original editorial diagram for A monitored fault offers a close view of earthquake rupture. 2004 event: captured by dense instrumentation. Pre-event records: showed no obvious short-term precursor.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2005/parkfield-2004-earthquake-dense-monitoring-no-precursor.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A closely monitored magnitude-six earthquake produced detailed records of the rupture without clear evidence of a reliable short-term warning signal.",
    story: {
      whyThere: "The Parkfield experiment installed instruments along a segment of the San Andreas fault with a history of moderate earthquakes. The next event came in 2004, after the forecast interval originally proposed for it.",
      howFound: "Sensors tracked the ground motion and associated deformation. The researchers compared observations made before the earthquake with the large signals captured during it.",
      whatMakesUnique: "The 2004 event showed the value of close instruments for understanding rupture. The lack of an obvious precursor illustrates the difficulty of predicting when an individual earthquake will begin.",
    },
    gallery: [
      "/images/discoveries/2005/parkfield-2004-earthquake-dense-monitoring-no-precursor.webp",
    ],
    primarySourceUrl: "https://www.nature.com/articles/nature04067",
    videoUrls: [],
    relatedSlugs: ["central-alaska-denali-earthquake-gps-fault-slip"],
    tags: ["earthquake monitoring", "San Andreas fault", "ground motion"],
  },
];
