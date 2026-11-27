import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during September 2013.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const september2013Discoveries: Discovery[] = [
  {
    slug: "sea-of-okhotsk-magnitude-8-3-2013-deep-fault-rupture-energy",
    "datePublished": "2026-11-27",
    title: "The 2013 Sea of Okhotsk Earthquake Ruptured a Fault About 600 Kilometers Deep",
    categorySlug: "earth-science",
    subtopic: "Earthquakes",
    year: 2013,
    dateDiscovered: "2013-09-20",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Sea of Okhotsk, earthquake epicenter",
      lat: 54.892,
      lng: 153.221,
      country: "Russia",
    },
    discoveringOrg: "Lingling Ye and the Sea of Okhotsk rupture study team",
    heroImage: "/images/discoveries/2013/sea-of-okhotsk-magnitude-8-3-2013-deep-fault-rupture-energy.webp",
    imageAlt: "Original editorial diagram for A very deep rupture. ~600 km: Depth beneath the surface. ~180 km: Fault length in the study.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2013/sea-of-okhotsk-magnitude-8-3-2013-deep-fault-rupture-energy.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Global seismic recordings indicated that the magnitude 8.3 Sea of Okhotsk earthquake ruptured a section about 180 kilometers long within a descending slab, roughly 600 kilometers down.",
    story: {
      whyThere: "The earthquake occurred far beneath the seafloor inside the subducting Pacific plate. Records collected around the world sampled the seismic energy radiated by the deep rupture.",
      howFound: "The analysis estimated the duration, size and energy release of the fault motion. A comparison with another deep earthquake indicated that conditions within the slab varied substantially.",
      whatMakesUnique: "Different analyses place the event at slightly different depths around 600 kilometers. The pin marks the surface epicenter.",
    },
    gallery: [
      "/images/discoveries/2013/sea-of-okhotsk-magnitude-8-3-2013-deep-fault-rupture-energy.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/24052306/",
    supportingSources: [
      {
        title: "2013 Sea of Okhotsk earthquake event record",
        url: "https://earthquake.usgs.gov/earthquakes/eventpage/usb000h4jh/executive",
        publisher: "U.S. Geological Survey",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["western-australia-yarrabubba-2229-million-year-impact-age"],
    tags: ["Sea of Okhotsk", "Deep earthquakes", "Subducting slabs", "seismology"],
  },
];
