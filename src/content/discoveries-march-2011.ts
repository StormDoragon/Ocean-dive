import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during March 2011.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const march2011Discoveries: Discovery[] = [
  {
    slug: "sydney-kepler-red-giant-mixed-mode-burning-stages",
    "datePublished": "2026-11-27",
    title: "Patterns in Red Giants’ Oscillations Distinguished Two Stages of Stellar Burning",
    categorySlug: "space",
    subtopic: "Galaxies",
    year: 2011,
    dateDiscovered: "2011-03-30",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "University of Sydney (research-team proxy)",
      lat: -33.888,
      lng: 151.188,
      country: "Australia",
    },
    discoveringOrg: "Timothy R. Bedding, Benoît Mosser and colleagues",
    heroImage: "/images/discoveries/2011/sydney-kepler-red-giant-mixed-mode-burning-stages.webp",
    imageAlt: "Original editorial diagram for Interior oscillations separate two stellar stages. Mode spacings: measured from brightness records. Two groups: consistent with distinct sites of nuclear burning.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2011/sydney-kepler-red-giant-mixed-mode-burning-stages.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Kepler brightness measurements identified two patterns of oscillation that separate giants burning helium in their cores from those burning hydrogen in a surrounding shell.",
    story: {
      whyThere: "Oscillations leave tiny, repeated changes in starlight. Some modes carry information about both the exterior and the deep interior.",
      howFound: "The researchers measured differences in the pattern of frequency spacings across a sample of red giants. Two groups matched predictions for different central structures.",
      whatMakesUnique: "The signatures diagnose which stage a giant has reached without seeing the core directly. They add information that surface temperature and brightness alone cannot provide.",
    },
    gallery: ["/images/discoveries/2011/sydney-kepler-red-giant-mixed-mode-burning-stages.webp"],
    primarySourceUrl: "https://www.nature.com/articles/nature09935",
    videoUrls: [],
    relatedSlugs: ["warwick-gaia-white-dwarf-crystallization-pileup"],
    tags: ["red giants", "asteroseismology", "Kepler"],
  },
];
