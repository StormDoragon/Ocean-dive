import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during September 2007.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const september2007Discoveries: Discovery[] = [
  {
    slug: "parkes-lorimer-archival-millisecond-radio-burst",
    "datePublished": "2026-11-27",
    title: "An Archived Radio Survey Reveals a Bright Millisecond Burst",
    categorySlug: "space",
    subtopic: "Galaxies",
    year: 2007,
    dateDiscovered: "2007-09-27",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Murriyang, CSIRO Parkes Radio Telescope (observation site)",
      lat: -32.998,
      lng: 148.263,
      country: "Australia",
    },
    discoveringOrg: "Duncan R. Lorimer, Matthew Bailes and colleagues",
    heroImage: "/images/discoveries/2007/parkes-lorimer-archival-millisecond-radio-burst.webp",
    imageAlt: "Original editorial diagram for An unexpected radio flash in archival data. Under 5 ms: reported burst duration. Frequency delay: suggested a distant source.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2007/parkes-lorimer-archival-millisecond-radio-burst.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "An unusual flash in archival Parkes data helped establish fast radio bursts as a new subject for astronomy.",
    story: {
      whyThere: "A pulsar survey recorded a bright signal from a direction near the Small Magellanic Cloud. It lasted less than five milliseconds.",
      howFound: "The lower radio frequencies arrived after the higher ones. The size of that delay was hard to explain with the available models for electrons in the Milky Way and provided a reason to consider a more distant source.",
      whatMakesUnique: "The survey did not precisely locate a host. Follow-up time at the telescope found no repeat from that direction, an observation specific to this burst and the available data.",
    },
    gallery: ["/images/discoveries/2007/parkes-lorimer-archival-millisecond-radio-burst.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/17901298/",
    videoUrls: [],
    relatedSlugs: ["very-large-array-frb-121102-direct-localization"],
    tags: ["fast radio bursts", "radio astronomy", "dispersion"],
  },
];
