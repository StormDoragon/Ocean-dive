import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 1985.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may1985Discoveries: Discovery[] = [
  {
    slug: "halley-antarctic-ozone-spring-decline-observations",
    "datePublished": "2026-11-27",
    title: "Decades of Antarctic Observations Revealed a Severe Springtime Ozone Decline",
    categorySlug: "earth-science",
    subtopic: "Climate records",
    year: 1985,
    dateDiscovered: "1985-05-01",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Halley Research Station area, Brunt Ice Shelf (observing-site proxy)",
      lat: -75.58,
      lng: -26.66,
      country: "Antarctica",
    },
    discoveringOrg: "Joseph C. Farman, Brian G. Gardiner and Jonathan D. Shanklin",
    heroImage: "/images/discoveries/1985/halley-antarctic-ozone-spring-decline-observations.webp",
    imageAlt: "Original editorial diagram for A long ground record reveals seasonal ozone loss. Antarctic spring: the large drop recurred seasonally. Total column ozone: measured at Antarctic stations.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1985/halley-antarctic-ozone-spring-decline-observations.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Long-running ground measurements showed a pronounced seasonal loss of total atmospheric ozone over Antarctica, particularly during spring.",
    story: {
      whyThere: "The observing program repeatedly measured the total amount of ozone above the station. A record across many seasons gave the team a reference.",
      howFound: "Spring values dropped sharply relative to earlier years. The recurring seasonal structure was hard to explain as an isolated instrument reading.",
      whatMakesUnique: "The original paper proposed an explanation involving chlorine chemistry in the cold seasonal stratosphere. Later observations investigated how specific reactions produced the loss.",
    },
    gallery: ["/images/discoveries/1985/halley-antarctic-ozone-spring-decline-observations.webp"],
    primarySourceUrl: "https://www.nature.com/articles/315207a0",
    videoUrls: [],
    relatedSlugs: ["mauna-loa-keeling-atmospheric-carbon-dioxide-seasonal-record"],
    tags: ["Antarctic ozone", "stratospheric chemistry", "long-term observations"],
  },
];
