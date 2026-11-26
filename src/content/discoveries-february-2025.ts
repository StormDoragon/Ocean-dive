import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 2025.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february2025Discoveries: Discovery[] = [
  {
    slug: "gaia-4b-astrometric-exoplanet",
    "datePublished": "2026-11-26",
    title: "Gaia’s Measurements of a Wobbling Star Lead to a New Planet",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2025,
    dateDiscovered: "2025-02-04",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-26",
    location: {
      name: "European Space Astronomy Centre (Gaia archive proxy)",
      lat: 40.443,
      lng: -3.951,
      country: "Spain",
    },
    discoveringOrg: "Guðmundur Stefánsson and the Gaia follow-up team",
    heroImage: "/images/discoveries/2025/gaia-4b-astrometric-exoplanet.webp",
    imageAlt: "Original editorial diagram for Gaia-4b. About 12 Jupiter masses: estimated planetary mass. Astrometry and spectra: complementary measurements of stellar motion.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2025/gaia-4b-astrometric-exoplanet.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Gaia’s precise measurements of stellar positions led to an exoplanet around a low-mass star. Follow-up spectroscopy helped confirm the planet and separate it from a brown dwarf found around a different star.",
    story: {
      whyThere: "A star and its planet orbit a common centre of mass. The star’s resulting motion across the sky can be measured if the planet is massive and the observations are precise enough.",
      howFound: "Gaia found the astrometric signal. The team compared it with ground-based measurements of the star’s motion toward and away from Earth to test whether a planet could explain it.",
      whatMakesUnique: "Gaia-4b is a relatively cold giant around a low-mass star. The method can reveal massive planets whose wider orbits make them less likely to cross their stars as seen from Earth.",
    },
    gallery: ["/images/discoveries/2025/gaia-4b-astrometric-exoplanet.webp"],
    paperUrl: "https://doi.org/10.3847/1538-3881/ada9e1",
    primarySourceUrl: "https://www.esa.int/articles/about-us/directorates/science/gaia/wobbling-stars-reveal-hidden-companions-in-gaia-data",
    supportingSources: [
      {
        title: "ESA archive and mission location",
        url: "https://www.esa.int/About_Us/ESAC/Science_Operation_Centres",
        publisher: "European Space Agency",
        tier: "Tier 2",
        sourceType: "institutional",
        accessedAt: "2026-11-26",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["barnard-star-four-sub-earth-planets", "euclid-dun-aonghasa-quasar"],
    tags: ["exoplanets", "astrometry", "radial velocity"],
  },
];
