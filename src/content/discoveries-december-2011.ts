import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during December 2011.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const december2011Discoveries: Discovery[] = [
  {
    slug: "eyjafjallajokull-2010-lightning-plume-temperature",
    "datePublished": "2026-11-27",
    title: "A Colder Ash Plume Helped Explain Lightning at Eyjafjallajökull",
    categorySlug: "earth-science",
    subtopic: "Volcanoes",
    year: 2011,
    dateDiscovered: "2011-12-14",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Eyjafjallajökull summit, southern Iceland",
      lat: 63.633,
      lng: -19.633,
      country: "Iceland",
    },
    discoveringOrg: "Þórður Arason, Alec J. Bennett and Laura E. Burgin",
    heroImage: "/images/discoveries/2011/eyjafjallajokull-2010-lightning-plume-temperature.webp",
    imageAlt: "Original editorial diagram for Lightning increased as the plume reached colder air. −20 to −24 °C: approximate transition range inferred from the record. Lightning and radar: tracked electrical activity and plume height.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2011/eyjafjallajokull-2010-lightning-plume-temperature.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "During part of the 2010 eruption, far more lightning was detected after the ash plume began reaching temperatures cold enough for strong ice-related charging.",
    story: {
      whyThere: "Researchers compared lightning network records with radar estimates of ash-plume height and atmospheric temperature.",
      howFound: "A sharp increase in detected lightning coincided with colder conditions near the plume top. No comparably abrupt change in the eruption itself explained the timing.",
      whatMakesUnique: "The match supports an ice-related charging process like the one in many thunderstorms. Other charging processes can also operate in volcanic plumes.",
    },
    gallery: ["/images/discoveries/2011/eyjafjallajokull-2010-lightning-plume-temperature.webp"],
    primarySourceUrl: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2011JB008651",
    videoUrls: [],
    relatedSlugs: ["kilauea-summit-2018-incremental-caldera-collapse"],
    tags: ["volcanic lightning", "ash plumes", "weather radar"],
  },
];
