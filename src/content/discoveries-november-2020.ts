import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during November 2020.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const november2020Discoveries: Discovery[] = [
  {
    slug: "gran-sasso-borexino-cno-cycle-solar-neutrinos",
    "datePublished": "2026-11-27",
    title: "Borexino found neutrinos from the Sun’s carbon–nitrogen–oxygen cycle",
    categorySlug: "physics",
    subtopic: "Particle discoveries",
    year: 2020,
    dateDiscovered: "2020-11-25",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Gran Sasso National Laboratory, Abruzzo (detector site map proxy)",
      lat: 42.452,
      lng: 13.575,
      country: "Italy",
    },
    discoveringOrg: "Borexino Collaboration",
    heroImage: "/images/discoveries/2020/gran-sasso-borexino-cno-cycle-solar-neutrinos.webp",
    imageAlt: "Original editorial diagram for Neutrinos from a secondary solar fusion cycle. CNO cycle: uses carbon, nitrogen and oxygen. Borexino: measured its neutrino signature.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2020/gran-sasso-borexino-cno-cycle-solar-neutrinos.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Measurements deep underground found evidence of solar neutrinos produced by a fusion cycle involving carbon, nitrogen and oxygen.",
    story: {
      whyThere: "Most solar energy comes from the proton–proton chain. A smaller contribution comes from reactions in which carbon, nitrogen and oxygen participate while hydrogen is converted into helium.",
      howFound: "The Borexino collaboration used a low-background detector to look for the neutrino signal associated with this cycle. Separating it from other faint processes required careful analysis of the detector's background.",
      whatMakesUnique: "The result provided direct experimental evidence that the CNO cycle operates in the Sun. The measured rate and its interpretation help constrain models of the solar interior.",
    },
    gallery: ["/images/discoveries/2020/gran-sasso-borexino-cno-cycle-solar-neutrinos.webp"],
    primarySourceUrl: "https://www.nature.com/articles/s41586-020-2934-0",
    videoUrls: [],
    relatedSlugs: ["delft-bell-inequality-electron-spins-1-3-km"],
    tags: ["solar neutrinos", "CNO cycle", "stellar fusion"],
  },
];
