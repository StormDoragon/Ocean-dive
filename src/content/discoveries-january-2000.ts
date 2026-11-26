import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during January 2000.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const january2000Discoveries: Discovery[] = [
  {
    slug: "tagish-lake-frozen-lake-meteorite",
    "datePublished": "2026-11-26",
    title: "A Frozen Lake Preserves Fragments of an Unusual Meteorite",
    categorySlug: "space",
    subtopic: "Asteroids",
    year: 2000,
    dateDiscovered: "2000-01-18",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-26",
    location: {
      name: "Tagish Lake, British Columbia (fall-area marker)",
      lat: 59.7044,
      lng: -134.2014,
      country: "Canada",
    },
    discoveringOrg: "Jim Brook, Peter Brown and the Tagish Lake research team",
    heroImage: "/images/discoveries/2000/tagish-lake-frozen-lake-meteorite.webp",
    imageAlt: "Original editorial diagram for Tagish Lake fall. Frozen lake: where the first fragments were recovered. C2, ungrouped: official meteorite classification.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2000/tagish-lake-frozen-lake-meteorite.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Fragments that landed on frozen Tagish Lake in British Columbia represented an unusual carbonaceous chondrite. Rapid cold recovery helped preserve their original material.",
    story: {
      whyThere: "A January fireball was seen over northwestern Canada and detected by satellites. Some fragments landed on a lake where ice and snow made the dark stones visible.",
      howFound: "Jim Brook recovered the first group of specimens. Researchers documented the fireball and examined pieces of the meteorite, comparing their chemistry and mineralogy with known carbonaceous chondrites.",
      whatMakesUnique: "Tagish Lake was classified as an ungrouped carbonaceous chondrite. Its recovery on ice gave researchers material with unusually little exposure to melting water and soil.",
    },
    gallery: ["/images/discoveries/2000/tagish-lake-frozen-lake-meteorite.webp"],
    paperUrl: "https://doi.org/10.1126/science.290.5490.320",
    primarySourceUrl: "https://www.lpi.usra.edu/meteor/metbull.cfm?code=23782",
    supportingSources: [
      {
        title: "Recovery study by the field team",
        url: "https://www.pnnl.gov/publications/fall-and-recovery-tagish-lake-meteorite",
        publisher: "Pacific Northwest National Laboratory",
        tier: "Tier 2",
        sourceType: "institutional",
        accessedAt: "2026-11-26",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["flensburg-early-asteroid-carbonates"],
    tags: ["meteorites", "carbonaceous chondrites", "fireballs"],
  },
];
