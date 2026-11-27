import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during January 2021.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const january2021Discoveries: Discovery[] = [
  {
    slug: "yellowstone-norris-steamboat-geyser-eruption-intervals-2018",
    "datePublished": "2026-11-27",
    title: "Steamboat Geyser’s reawakening revealed irregular seasonal intervals",
    categorySlug: "earth-science",
    subtopic: "Volcanoes",
    year: 2021,
    dateDiscovered: "2021-01-04",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Steamboat Geyser, Norris Geyser Basin, Yellowstone",
      lat: 44.723,
      lng: -110.704,
      country: "United States",
    },
    discoveringOrg: "Mara H. Reed and the Steamboat Geyser research team",
    heroImage: "/images/discoveries/2021/yellowstone-norris-steamboat-geyser-eruption-intervals-2018.webp",
    imageAlt: "Original editorial diagram for Steamboat's 2018 reawakening. Seasonal intervals: varied between eruptions. Initial trigger: remained unresolved.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2021/yellowstone-norris-steamboat-geyser-eruption-intervals-2018.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Monitoring of the renewed eruptions found seasonal variation in the time between them and left the initial trigger unresolved.",
    story: {
      whyThere: "Steamboat Geyser entered a sustained run of eruptions in March 2018. The researchers compared the new eruption record with seismic and ground-motion records, streamflow, weather and changes elsewhere in the basin.",
      howFound: "Intervals between eruptions varied substantially and changed with season. The team argued that variation in water entering the hydrothermal system could account for part of that pattern.",
      whatMakesUnique: "Several measurements changed before the resurgence. The researchers could not identify a definitive trigger, and the short-term interval pattern still left room for several processes.",
    },
    gallery: [
      "/images/discoveries/2021/yellowstone-norris-steamboat-geyser-eruption-intervals-2018.webp",
    ],
    primarySourceUrl: "https://www.pnas.org/doi/10.1073/pnas.2020943118",
    supportingSources: [
      {
        title: "Study-team explanation and timing",
        url: "https://news.berkeley.edu/2021/01/04/reawakened-geyser-does-not-foretell-yellowstone-volcanic-eruptions/",
        publisher: "University of California, Berkeley",
        tier: "Tier 2",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["kaikoura-nz-2016-earthquake-multifault-rupture-mapping"],
    tags: ["Yellowstone", "geysers", "hydrothermal systems"],
  },
];
