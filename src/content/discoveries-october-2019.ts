import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during October 2019.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const october2019Discoveries: Discovery[] = [
  {
    slug: "northwest-atlantic-shelf-stormquakes-seismic-waves",
    "datePublished": "2026-11-27",
    title: "Ocean storms generated seismic events along some continental shelves",
    categorySlug: "earth-science",
    subtopic: "Earthquakes",
    year: 2019,
    dateDiscovered: "2019-10-14",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Northwest Atlantic continental shelf (regional map proxy)",
      lat: 42.4,
      lng: -67.8,
      country: "International",
    },
    discoveringOrg: "Wenyuan Fan and the stormquake research team",
    heroImage: "/images/discoveries/2019/northwest-atlantic-shelf-stormquakes-seismic-waves.webp",
    imageAlt: "Original editorial diagram for When storms shake the seafloor. Ocean waves: interact with shelves and banks. Seismic records: captured distinct events.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2019/northwest-atlantic-shelf-stormquakes-seismic-waves.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A seismic survey found clusters of signals that tracked strong ocean storms and originated where waves interact with the seafloor.",
    story: {
      whyThere: "Ocean waves can transfer energy into the solid Earth. Using records from North American seismic stations, Wenyuan Fan and colleagues looked for individual events that moved with ocean storms.",
      howFound: "They identified bursts of earthquake-like signals associated with storms over some shelves and banks. The source locations and timing support interaction between ocean waves and the seabed.",
      whatMakesUnique: "The signals offer an additional way to study coupling between the ocean and solid Earth. Their occurrence depends on the storm and the geometry of the bottom.",
    },
    gallery: ["/images/discoveries/2019/northwest-atlantic-shelf-stormquakes-seismic-waves.webp"],
    primarySourceUrl: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019GL084217",
    videoUrls: [],
    relatedSlugs: ["southwest-pacific-zealandia-connected-submerged-continent"],
    tags: ["stormquakes", "seismic waves", "continental shelves"],
  },
];
