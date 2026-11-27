import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during October 2016.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const october2016Discoveries: Discovery[] = [
  {
    slug: "pohnpei-nan-madol-coral-uranium-series-tomb-dates",
    "datePublished": "2026-11-27",
    title: "Coral Dates Early Monument Building at Nan Madol",
    categorySlug: "archaeology",
    subtopic: "Tomb discoveries",
    year: 2016,
    dateDiscovered: "2016-10-18",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Nan Madol, Pohnpei (monument complex proxy)",
      lat: 6.842,
      lng: 158.337,
      country: "Federated States of Micronesia",
    },
    discoveringOrg: "Mark D. McCoy, Helen A. Alderson and colleagues",
    heroImage: "/images/discoveries/2016/pohnpei-nan-madol-coral-uranium-series-tomb-dates.webp",
    imageAlt: "Original editorial diagram for Coral helps establish a monument chronology. 1180–1200 CE: early construction window from the study. Basalt chemistry: recorded transport across Pohnpei.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2016/pohnpei-nan-madol-coral-uranium-series-tomb-dates.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Coral from a monumental tomb and the chemistry of its basalt helped establish a chronology for early building at Pohnpei’s lagoon complex.",
    story: {
      whyThere: "Nan Madol’s builders created artificial islets with coral and basalt. The study examined stone and coral associated with a large tomb at the complex.",
      howFound: "Uranium-series measurements on coral supported a date around 1180 to 1200 CE for early monument building. Comparisons of basalt chemistry also indicated that some stone came from elsewhere on Pohnpei.",
      whatMakesUnique: "The results place the tomb in a tighter historical window. The age of this monument is one part of the longer and less precisely dated history of the whole complex.",
    },
    gallery: ["/images/discoveries/2016/pohnpei-nan-madol-coral-uranium-series-tomb-dates.webp"],
    paperUrl: "https://doi.org/10.1016/j.yqres.2016.08.002",
    primarySourceUrl: "https://blog.smu.edu/research/2016/10/18/evidence-of-first-chief-indicates-pacific-islanders-invented-a-new-society-on-city-they-built-of-coral-and-basalt/",
    videoUrls: [],
    relatedSlugs: ["masvingo-great-zimbabwe-dhaka-water-storage"],
    tags: ["Nan Madol", "uranium-series dating", "monumental architecture"],
  },
];
