import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during November 2008.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const november2008Discoveries: Discovery[] = [
  {
    slug: "maunakea-hr-8799-three-giant-planets-direct-imaging",
    "datePublished": "2026-11-27",
    title: "Two telescopes directly imaged three giant planets around HR 8799",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2008,
    dateDiscovered: "2008-11-13",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Maunakea observatories, Hawai‘i (observing site map proxy)",
      lat: 19.824,
      lng: -155.477,
      country: "United States",
    },
    discoveringOrg: "Christian Marois and the HR 8799 direct-imaging team",
    heroImage: "/images/discoveries/2008/maunakea-hr-8799-three-giant-planets-direct-imaging.webp",
    imageAlt: "Original editorial diagram for Resolving planets beside a bright star. Three planets: reported in the original study. Multiple dates: showed orbital motion.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2008/maunakea-hr-8799-three-giant-planets-direct-imaging.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "High-contrast images taken from Hawai‘i separated the light from three young giant planets from that of their bright host star.",
    story: {
      whyThere: "The research team used images from Gemini and Keck to distinguish faint nearby objects from the glare of HR 8799. The objects were far enough apart on the sky for their separate positions to be measured.",
      howFound: "Images from different dates showed the companions moving in ways consistent with bound orbits. Their luminosities and the estimated age of the system supported giant-planet masses.",
      whatMakesUnique: "The 2008 work reported three planets. The archive now lists four for the same system, and the resolved planets provide targets for measurements of their individual light.",
    },
    gallery: ["/images/discoveries/2008/maunakea-hr-8799-three-giant-planets-direct-imaging.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/19008415/",
    supportingSources: [
      {
        title: "Current confirmed system architecture",
        url: "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/DisplayOverview/nph-DisplayOverview?objname=HR+8799",
        publisher: "NASA Exoplanet Archive",
        tier: "Tier 2",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["madison-wd-1856-b-giant-planet-transit-white-dwarf"],
    tags: ["direct imaging", "gas giants", "exoplanet systems"],
  },
];
