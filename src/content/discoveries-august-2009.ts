import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during August 2009.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const august2009Discoveries: Discovery[] = [
  {
    slug: "greenbelt-stardust-comet-wild-2-glycine-isotope-measurement",
    "datePublished": "2026-11-27",
    title: "Carbon Isotopes Traced Glycine to a Comet Sample",
    categorySlug: "space",
    subtopic: "Space missions",
    year: 2009,
    dateDiscovered: "2009-08-17",
    reviewStatus: "source-verified",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "NASA Goddard Space Flight Center, analysis team location",
      lat: 38.992,
      lng: -76.852,
      country: "United States",
    },
    discoveringOrg: "Jamie E. Elsila, Daniel P. Glavin and Jason P. Dworkin",
    heroImage: "/images/discoveries/2009/greenbelt-stardust-comet-wild-2-glycine-isotope-measurement.webp",
    imageAlt: "Original editorial diagram for A comet’s chemical signature. Glycine: Detected organic compound. Carbon isotopes: Evidence of origin.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2009/greenbelt-stardust-comet-wild-2-glycine-isotope-measurement.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A NASA team found that glycine recovered from Stardust’s collector had a carbon isotope signature consistent with an origin in comet Wild 2.",
    story: {
      whyThere: "Stardust exposed a collector while passing through material shed by the comet, then returned it to Earth. The researchers measured compounds on collector foils and compared them with possible contaminants.",
      howFound: "A carbon isotope measurement tied the glycine signal to extraterrestrial material. The analysis distinguished it from contributions that could come from materials used during storage.",
      whatMakesUnique: "The finding concerns an organic compound that can form without organisms. The map marks NASA Goddard, where the analysis team was based.",
    },
    gallery: [
      "/images/discoveries/2009/greenbelt-stardust-comet-wild-2-glycine-isotope-measurement.webp",
    ],
    primarySourceUrl: "https://astrobiology.nasa.gov/news/nasa-researchers-make-first-discovery-of-lifes-building-block-in-comet/",
    supportingSources: [
      {
        title: "Cometary glycine detected in samples returned by Stardust",
        url: "https://science.gsfc.nasa.gov/691/analytical/PDF/Elsila2009.pdf",
        publisher: "Meteoritics & Planetary Science / NASA Goddard",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["milton-keynes-huygens-titan-soft-solid-landing-surface"],
    tags: ["Stardust", "Comet Wild 2", "Glycine", "Sample return"],
  },
];
