import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during November 2024.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const november2024Discoveries: Discovery[] = [
  {
    slug: "western-pacific-lower-mantle-positive-wave-speed-anomalies",
    "datePublished": "2026-11-27",
    title: "Seismic waveforms revealed unexplained fast regions beneath the western Pacific",
    categorySlug: "earth-science",
    subtopic: "Earthquakes",
    year: 2024,
    dateDiscovered: "2024-11-04",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Western Pacific Ocean (regional map proxy for mantle-wide results)",
      lat: 16,
      lng: 154,
      country: "International",
    },
    discoveringOrg: "Thomas L. A. Schouten, Lars Gebraad and the REVEAL model team",
    heroImage: "/images/discoveries/2024/western-pacific-lower-mantle-positive-wave-speed-anomalies.webp",
    imageAlt: "Original editorial diagram for A fast region deep below the Pacific. Recorded waves: from an earthquake network. Fast anomalies: with several possible origins.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2024/western-pacific-lower-mantle-positive-wave-speed-anomalies.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Imaging based on complete seismic waveforms found unusually fast areas in the lower mantle beneath places with no known nearby history of subduction.",
    story: {
      whyThere: "Earthquake waves change speed according to the rock they pass through. Faster regions in deep seismic images are often interpreted as cold material from sinking tectonic plates.",
      howFound: "The researchers fit simulated waves to complete records from seismic stations. Their model revealed several fast regions that lack obvious matches to reconstructed sinking plates, including a large feature under the western Pacific.",
      whatMakesUnique: "The patterns could reflect more than one process. Temperature, composition and the possible disappearance of evidence for old plate motion limit what the model can establish from wave speed alone.",
    },
    gallery: [
      "/images/discoveries/2024/western-pacific-lower-mantle-positive-wave-speed-anomalies.webp",
    ],
    paperUrl: "https://doi.org/10.1038/s41598-024-77399-2",
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/39496714/",
    supportingSources: [
      {
        title: "Research team’s explanation of the mapping result",
        url: "https://ethz.ch/en/news-and-events/eth-news/news/2025/01/sunken-worlds-under-the-pacific.html",
        publisher: "ETH Zurich",
        tier: "Tier 2",
        sourceType: "institutional",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: [
      "southern-cascadia-abyssal-turbidites-earthquake-landslides",
      "fani-maore-mayotte-ancient-mantle-neodymium-isotopes",
    ],
    tags: ["seismic tomography", "lower mantle", "Pacific Ocean"],
  },
];
