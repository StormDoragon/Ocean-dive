import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during April 2012.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const april2012Discoveries: Discovery[] = [
  {
    slug: "sutters-mill-weather-radar-meteorite",
    "datePublished": "2026-11-26",
    title: "Weather Radar Guides Searchers to the Sutter’s Mill Meteorites",
    categorySlug: "space",
    subtopic: "Asteroids",
    year: 2012,
    dateDiscovered: "2012-04-22",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-26",
    location: {
      name: "Sutter’s Mill fall area, California (strewn-field marker)",
      lat: 38.8039,
      lng: -120.9081,
      country: "United States",
    },
    discoveringOrg: "Peter Jenniskens and the Sutter’s Mill Meteorite Consortium",
    heroImage: "/images/discoveries/2012/sutters-mill-weather-radar-meteorite.webp",
    imageAlt: "Original editorial diagram for Sutter’s Mill meteorites. Doppler radar: tracked material after the fireball. Two days: until the first pieces were recovered.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2012/sutters-mill-weather-radar-meteorite.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Doppler weather radar traced fragments of a California fireball and guided a rapid ground search. Researchers retrieved pieces of a carbonaceous chondrite before heavy rain.",
    story: {
      whyThere: "After a daytime fireball, weather-radar sweeps registered descending material near Coloma and Lotus in the Sierra Nevada foothills.",
      howFound: "Searchers used the radar footprint to narrow the area and recovered the first stones on April 24. Laboratory work showed that the meteorite contained different rock components mixed together.",
      whatMakesUnique: "Weather radar turned a broad witnessed trajectory into a practical search area. Early recovery limited the exposure of some fragments to rain, helping preserve information from before the fall.",
    },
    gallery: ["/images/discoveries/2012/sutters-mill-weather-radar-meteorite.webp"],
    paperUrl: "https://doi.org/10.1126/science.1227163",
    primarySourceUrl: "https://www.lpi.usra.edu/meteor/?code=55529",
    supportingSources: [
      {
        title: "Recovery team study summary",
        url: "https://carnegiescience.edu/radar-enabled-recovery-sutters-mill-meteorite-carbonaceous-chondrite-regolith-breccia",
        publisher: "Carnegie Science",
        tier: "Tier 2",
        sourceType: "institutional",
        accessedAt: "2026-11-26",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["almahata-sitta-predicted-asteroid-fall"],
    tags: ["meteorites", "carbonaceous chondrites", "weather radar"],
  },
];
