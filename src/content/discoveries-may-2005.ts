import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 2005.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may2005Discoveries: Discovery[] = [
  {
    slug: "offshore-northern-sumatra-andaman-seismic-rupture-history",
    "datePublished": "2026-11-27",
    title: "Seismic Records Traced a Rupture More Than 1,000 Kilometers Long",
    categorySlug: "earth-science",
    subtopic: "Earthquakes",
    year: 2005,
    dateDiscovered: "2005-05-20",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Off northern Sumatra, earthquake epicentral region",
      lat: 3.295,
      lng: 95.982,
      country: "Indonesia",
    },
    discoveringOrg: "Charles J. Ammon and the Sumatra–Andaman rupture study team",
    heroImage: "/images/discoveries/2005/offshore-northern-sumatra-andaman-seismic-rupture-history.webp",
    imageAlt: "Original editorial diagram for Following the rupture north. ~1,200 km: Estimated rupture length. 2004: Year of the earthquake.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2005/offshore-northern-sumatra-andaman-seismic-rupture-history.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Analysis of the 2004 Sumatra–Andaman earthquake found a slow beginning followed by a long northward rupture extending about 1,200 kilometers.",
    story: {
      whyThere: "The earthquake began offshore of northern Sumatra on December 26, 2004. The research team used several kinds of seismic waves to estimate where and when the fault moved.",
      howFound: "The reconstruction found relatively small slip for roughly the first minute, followed by larger slip as the rupture propagated to the north. The rupture involved a long section of the plate boundary.",
      whatMakesUnique: "The slip and timing depend on the models used to fit the recordings. The pin marks the earthquake’s starting region rather than the entire fault.",
    },
    gallery: [
      "/images/discoveries/2005/offshore-northern-sumatra-andaman-seismic-rupture-history.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/15905393/",
    supportingSources: [
      {
        title: "2004 Sumatra–Andaman earthquake event record",
        url: "https://earthquake.usgs.gov/earthquakes/eventpage/official20041226005853450_30",
        publisher: "U.S. Geological Survey",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["sea-of-okhotsk-magnitude-8-3-2013-deep-fault-rupture-energy"],
    tags: ["Sumatra–Andaman earthquake", "seismology", "Rupture propagation", "subduction zones"],
  },
];
