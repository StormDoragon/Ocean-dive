import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during November 2017.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const november2017Discoveries: Discovery[] = [
  {
    slug: "giza-great-pyramid-muons-scanpyramids-big-void",
    "datePublished": "2026-11-27",
    title: "Cosmic-ray muons exposed a large void in Khufu's pyramid",
    categorySlug: "archaeology",
    subtopic: "Ancient civilizations",
    year: 2017,
    dateDiscovered: "2017-11-02",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Great Pyramid of Giza, Egypt",
      lat: 29.9792,
      lng: 31.1342,
      country: "Egypt",
    },
    discoveringOrg: "Kunihiro Morishima and the ScanPyramids Collaboration",
    heroImage: "/images/discoveries/2017/giza-great-pyramid-muons-scanpyramids-big-void.webp",
    imageAlt: "Original editorial diagram for Muons revealed a void in Khufu's pyramid. At least 30 m: inferred minimum length. Three detector types: independent measurements.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2017/giza-great-pyramid-muons-scanpyramids-big-void.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Three muon detectors found evidence of a void at least 30 metres long above the Grand Gallery of the Great Pyramid.",
    story: {
      whyThere: "Muons made in the atmosphere pass through stone. Directions with less material transmit a higher proportion of particles, giving detectors a way to infer what lies inside a bulky structure.",
      howFound: "The researchers compared readings from detectors inside and outside the Great Pyramid. Emulsion, scintillator and gas instruments all supported a substantial low-density region over the Grand Gallery.",
      whatMakesUnique: "The team estimated a minimum length of 30 metres. The data left the exact shape and original purpose open, including whether the region is a single uninterrupted space.",
    },
    gallery: ["/images/discoveries/2017/giza-great-pyramid-muons-scanpyramids-big-void.webp"],
    primarySourceUrl: "https://www.nature.com/articles/nature24647",
    supportingSources: [
      {
        title: "Author manuscript",
        url: "https://arxiv.org/abs/1711.01576",
        publisher: "ScanPyramids Collaboration",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
      {
        title: "Collaboration account of the detector confirmations",
        url: "https://irfu.cea.fr/en/Phocea/Vie_des_labos/Ast/ast.php?id_technique=2056&voirpar=unit&y=2017",
        publisher: "CEA-Irfu",
        tier: "Tier 2",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["oak-ridge-coherent-neutrino-recoil-whole-nuclei"],
    tags: ["egypt", "muon imaging", "Great Pyramid"],
  },
];
