import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 2008.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february2008Discoveries: Discovery[] = [
  {
    slug: "yokohama-iron-oxypnictide-superconductivity-26-kelvin",
    "datePublished": "2026-11-27",
    title: "An Iron-Based Layered Material Became Superconducting at 26 Kelvin",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 2008,
    dateDiscovered: "2008-02-23",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Tokyo Institute of Technology, Yokohama (research-team proxy)",
      lat: 35.514,
      lng: 139.485,
      country: "Japan",
    },
    discoveringOrg: "Yoichi Kamihara, Takumi Watanabe, Masahiro Hirano and Hideo Hosono",
    heroImage: "/images/discoveries/2008/yokohama-iron-oxypnictide-superconductivity-26-kelvin.webp",
    imageAlt: "Original editorial diagram for An iron-containing layered solid enters a superconducting state. About 26 K: reported transition at a suitable composition. Chemical substitution: changed properties of the layered material.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2008/yokohama-iron-oxypnictide-superconductivity-26-kelvin.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Researchers observed superconductivity near 26 kelvin in a fluorine-substituted layered iron compound, opening a family of iron-based superconductors.",
    story: {
      whyThere: "Chemical substitution changed the electronic properties of an iron-containing layered solid.",
      howFound: "The study tested electrical and magnetic behavior at low temperature. A transition near 26 kelvin appeared for suitable compositions.",
      whatMakesUnique: "The result showed that iron-containing layers can support superconductivity under the appropriate conditions. The mechanism and achievable temperatures were investigated in later work.",
    },
    gallery: ["/images/discoveries/2008/yokohama-iron-oxypnictide-superconductivity-26-kelvin.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/18293989/",
    videoUrls: [],
    relatedSlugs: ["seattle-monolayer-chromium-triiodide-ferromagnetism"],
    tags: ["iron-based superconductors", "layered materials", "superconductivity"],
  },
];
