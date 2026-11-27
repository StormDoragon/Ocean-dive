import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 2012.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may2012Discoveries: Discovery[] = [
  {
    slug: "cambridge-kepler-1520-b-variable-dust-tail-transits",
    "datePublished": "2026-11-27",
    title: "Changing transits pointed to dust streaming from Kepler-1520 b",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2012,
    dateDiscovered: "2012-05-18",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Massachusetts Institute of Technology, Cambridge (lead research team map proxy)",
      lat: 42.359,
      lng: -71.09,
      country: "United States",
    },
    discoveringOrg: "Saul Rappaport and the Kepler-1520 transit study team",
    heroImage: "/images/discoveries/2012/cambridge-kepler-1520-b-variable-dust-tail-transits.webp",
    imageAlt: "Original editorial diagram for A changing transit every 15.7 hours. Regular timing: traced the orbit. Variable depths: supported a changing dust cloud.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2012/cambridge-kepler-1520-b-variable-dust-tail-transits.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Kepler recorded highly variable dips on a short regular cycle, consistent with an evaporating body surrounded by dust.",
    story: {
      whyThere: "The signal from this star recurred about every 15.7 hours. The depth of the dips, however, changed strongly from one passage to another.",
      howFound: "The researchers proposed that the moving material included dust shed by a small orbiting body. Changes in how much dust crossed the star could alter the depth and shape of a dip.",
      whatMakesUnique: "The NASA Exoplanet Archive now lists the planet as confirmed. Its dust production and the detailed properties of the body depend on interpreting the unusual light curve.",
    },
    gallery: ["/images/discoveries/2012/cambridge-kepler-1520-b-variable-dust-tail-transits.webp"],
    primarySourceUrl: "https://doi.org/10.1088/0004-637x/752/1/1",
    supportingSources: [
      {
        title: "Current planet record and original discovery reference",
        url: "https://exoplanetarchive.ipac.caltech.edu/overview/Kepler-1520",
        publisher: "NASA Exoplanet Archive",
        tier: "Tier 2",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["princeton-wasp-12b-hot-jupiter-measured-orbital-decay"],
    tags: ["Kepler", "dust tails", "transits"],
  },
];
