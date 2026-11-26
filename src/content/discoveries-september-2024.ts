import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during September 2024.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const september2024Discoveries: Discovery[] = [
  {
    slug: "hokkaido-one-electron-carbon-bond",
    "datePublished": "2026-11-26",
    title: "A Crystal Study Finds Evidence of a One-Electron Carbon–Carbon Bond",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 2024,
    dateDiscovered: "2024-09-25",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-26",
    location: {
      name: "Hokkaido University, Sapporo (research campus proxy)",
      lat: 43.075,
      lng: 141.344,
      country: "Japan",
    },
    discoveringOrg: "Takuya Shimajiri, Yusuke Ishigaki and the carbon bonding research team",
    heroImage: "/images/discoveries/2024/hokkaido-one-electron-carbon-bond.webp",
    imageAlt: "Original editorial diagram for A carbon–carbon bond. One shared electron: supported by the measurements. Two methods: X-ray diffraction and Raman spectroscopy.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2024/hokkaido-one-electron-carbon-bond.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A crystal study reported direct evidence of a carbon–carbon sigma bond held by a single shared electron. Most familiar carbon–carbon covalent bonds involve an electron pair.",
    story: {
      whyThere: "Chemical bonding theory had long allowed for a bond shared by one electron. Capturing this state between two carbon atoms in a compound that could be characterised had been a challenge.",
      howFound: "The team studied the solid using X-ray diffraction and Raman spectroscopy. The measured arrangement and spectroscopic signal supported a one-electron bond in the compound.",
      whatMakesUnique: "The result expands the kinds of bonding observed between carbon atoms. The crystal supplied a specifically designed chemical environment, and the finding applies to that system.",
    },
    gallery: ["/images/discoveries/2024/hokkaido-one-electron-carbon-bond.webp"],
    paperUrl: "https://www.nature.com/articles/s41586-024-07965-1",
    primarySourceUrl: "https://www.global.hokudai.ac.jp/news/8470/",
    videoUrls: [],
    relatedSlugs: ["hokkaido-simple-cubic-silver"],
    tags: ["chemical bonds", "Raman spectroscopy", "materials science"],
  },
];
