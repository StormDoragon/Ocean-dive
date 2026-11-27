import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during November 2005.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const november2005Discoveries: Discovery[] = [
  {
    slug: "milton-keynes-huygens-titan-soft-solid-landing-surface",
    "datePublished": "2026-11-27",
    title: "Huygens Landed on a Soft Solid Surface on Titan",
    categorySlug: "space",
    subtopic: "Space missions",
    year: 2005,
    dateDiscovered: "2005-11-30",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Open University, Milton Keynes, investigator location",
      lat: 52.025,
      lng: -0.708,
      country: "United Kingdom",
    },
    discoveringOrg: "John C. Zarnecki and the Huygens Surface Science Package team",
    heroImage: "/images/discoveries/2005/milton-keynes-huygens-titan-soft-solid-landing-surface.webp",
    imageAlt: "Original editorial diagram for What Huygens touched down on. Soft solid: Local mechanical response. 90 m: Final acoustic sounding interval.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2005/milton-keynes-huygens-titan-soft-solid-landing-surface.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Measurements during touchdown showed that Huygens landed on material that behaved like a soft solid. The probe settled a few millimeters afterward.",
    story: {
      whyThere: "Titan’s atmosphere hid most surface detail from distant observers. Descending by parachute in January 2005, Huygens used acoustic measurements to examine the terrain around its landing site.",
      howFound: "The probe’s deceleration and resistance measurements during contact showed that the surface yielded under its weight. The team compared its mechanical response with materials including snow, clay and sand.",
      whatMakesUnique: "The surface response was measured at a single site. The map marks the Open University, where the instrument team was led.",
    },
    gallery: ["/images/discoveries/2005/milton-keynes-huygens-titan-soft-solid-landing-surface.webp"],
    primarySourceUrl: "https://www.nature.com/articles/nature04211",
    videoUrls: [],
    relatedSlugs: ["pasadena-cassini-titan-north-polar-radar-lakes"],
    tags: ["Huygens", "Titan", "Surface measurements", "Planetary landers"],
  },
];
