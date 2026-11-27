import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during August 2020.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const august2020Discoveries: Discovery[] = [
  {
    slug: "pasadena-juno-jupiter-high-altitude-small-lightning-flashes",
    "datePublished": "2026-11-27",
    title: "Juno spotted shallow lightning above Jupiter's deep water clouds",
    categorySlug: "space",
    subtopic: "Space missions",
    year: 2020,
    dateDiscovered: "2020-08-05",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "NASA Jet Propulsion Laboratory, Pasadena (Juno mission map proxy)",
      lat: 34.201,
      lng: -118.171,
      country: "United States",
    },
    discoveringOrg: "Heidi N. Becker and the Juno lightning study team",
    heroImage: "/images/discoveries/2020/pasadena-juno-jupiter-high-altitude-small-lightning-flashes.webp",
    imageAlt: "Original editorial diagram for Shallow electrical storms on Jupiter. Small flashes: captured by Juno. Higher cloud layer: inferred from the observations.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2020/pasadena-juno-jupiter-high-altitude-small-lightning-flashes.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Juno detected brief flashes from shallow storms at levels where the usual deep-water-cloud explanation was inadequate.",
    story: {
      whyThere: "Jupiter's bright lightning had traditionally been associated with deeper water clouds. Juno's low-light navigation camera detected smaller flashes at positions the researchers inferred were higher than that layer.",
      howFound: "At those heights pure liquid water is difficult to sustain. The investigators proposed that ammonia mixed with water could help support charge separation even at the low temperatures.",
      whatMakesUnique: "The flashes established that small electrical discharges occur at shallower levels than previously recognized. The water–ammonia mechanism is a proposed interpretation of the storm physics.",
    },
    gallery: [
      "/images/discoveries/2020/pasadena-juno-jupiter-high-altitude-small-lightning-flashes.webp",
    ],
    primarySourceUrl: "https://www.nature.com/articles/s41586-020-2532-1",
    supportingSources: [
      {
        title: "Mission-team description of the high-altitude flashes",
        url: "https://www.jpl.nasa.gov/news/shallow-lightning-and-mushballs-reveal-ammonia-to-nasas-juno-scientists/",
        publisher: "NASA JPL",
        tier: "Tier 2",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["pasadena-cassini-titan-north-polar-methane-lake-radar-depth"],
    tags: ["Jupiter", "lightning", "Juno"],
  },
];
