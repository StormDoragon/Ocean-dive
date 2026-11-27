import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during April 1927.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const april1927Discoveries: Discovery[] = [
  {
    slug: "new-york-davisson-germer-electron-nickel-diffraction",
    "datePublished": "2026-11-27",
    title: "Electrons Scattered From Nickel in a Pattern Expected for Waves",
    categorySlug: "physics",
    subtopic: "Quantum research",
    year: 1927,
    dateDiscovered: "1927-04-16",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Bell Telephone Laboratories, New York (research-team proxy)",
      lat: 40.735,
      lng: -74.007,
      country: "United States",
    },
    discoveringOrg: "Clinton J. Davisson and Lester H. Germer",
    heroImage: "/images/discoveries/1927/new-york-davisson-germer-electron-nickel-diffraction.webp",
    imageAlt: "Original editorial diagram for A crystal makes a matter wave’s wavelength measurable. Scattering angles: show intensity peaks in particular directions. Crystal spacing: provides a comparison for the wavelength.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1927/new-york-davisson-germer-electron-nickel-diffraction.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Directions of strong electron scattering from a nickel crystal followed a diffraction pattern consistent with the wavelengths expected for matter waves.",
    story: {
      whyThere: "The regular spacing of atoms in a crystal can produce interference in a wave scattered from it.",
      howFound: "The team measured how many electrons emerged in different directions. Strong scattering in particular directions could be interpreted using the crystal spacing and electron wavelength.",
      whatMakesUnique: "The result provided evidence that electrons display wave behavior. It complements measurements where individual electrons produce localized signals.",
    },
    gallery: ["/images/discoveries/1927/new-york-davisson-germer-electron-nickel-diffraction.webp"],
    primarySourceUrl: "https://www.nature.com/articles/119558a0",
    videoUrls: [],
    relatedSlugs: ["frankfurt-stern-gerlach-silver-beam-splitting"],
    tags: ["electron diffraction", "nickel crystals", "matter waves"],
  },
];
