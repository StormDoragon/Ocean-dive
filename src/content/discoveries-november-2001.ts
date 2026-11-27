import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during November 2001.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const november2001Discoveries: Discovery[] = [
  {
    slug: "baltimore-hubble-hd-209458b-sodium-transit-absorption",
    "datePublished": "2026-11-27",
    title: "Hubble Detects Sodium in Light Passing Through a Giant Planet’s Atmosphere",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2001,
    dateDiscovered: "2001-11-27",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Space Telescope Science Institute, Baltimore (Hubble science-team proxy)",
      lat: 39.333,
      lng: -76.623,
      country: "United States",
    },
    discoveringOrg: "David Charbonneau, Timothy M. Brown, Robert W. Noyes and Ronald L. Gilliland",
    heroImage: "/images/discoveries/2001/baltimore-hubble-hd-209458b-sodium-transit-absorption.webp",
    imageAlt: "Original editorial diagram for An atmosphere leaves a narrow mark in starlight. Four transits: compared using Hubble spectra. Near 589 nm: sodium absorption feature.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2001/baltimore-hubble-hd-209458b-sodium-transit-absorption.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "The star HD 209458 dimmed slightly more at sodium wavelengths during its planet’s transits, providing early direct evidence of an exoplanet atmosphere.",
    story: {
      whyThere: "Some starlight skims through a planet’s atmosphere as the planet crosses the star. Gases along that path leave narrow features in the spectrum.",
      howFound: "The team compared the amount of dimming near a sodium line with neighbouring wavelengths over four transits. It interpreted the extra dimming as absorption by sodium in the planet’s atmosphere.",
      whatMakesUnique: "The absorption was weaker than in a cloud-free model using solar sodium abundance. Several explanations remained possible, including clouds or chemical changes in the atmosphere.",
    },
    gallery: ["/images/discoveries/2001/baltimore-hubble-hd-209458b-sodium-transit-absorption.webp"],
    paperUrl: "https://doi.org/10.1086/338770",
    primarySourceUrl: "https://www.stsci.edu/contents/news-releases/2001/news-2001-38",
    videoUrls: [],
    relatedSlugs: ["la-palma-kepler-78b-earth-like-bulk-density"],
    tags: ["transmission spectroscopy", "sodium absorption", "exoplanet atmospheres"],
  },
];
