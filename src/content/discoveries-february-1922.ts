import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 1922.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february1922Discoveries: Discovery[] = [
  {
    slug: "frankfurt-stern-gerlach-silver-beam-splitting",
    "datePublished": "2026-11-27",
    title: "A Magnetic Field Split a Beam of Silver Atoms Into Two Groups",
    categorySlug: "physics",
    subtopic: "Quantum research",
    year: 1922,
    dateDiscovered: "1922-02-08",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "University of Frankfurt, Frankfurt am Main (experiment-site proxy)",
      lat: 50.117,
      lng: 8.656,
      country: "Germany",
    },
    discoveringOrg: "Walther Gerlach and Otto Stern",
    heroImage: "/images/discoveries/1922/frankfurt-stern-gerlach-silver-beam-splitting.webp",
    imageAlt: "Original editorial diagram for A nonuniform magnetic field gives two separate outcomes. Silver atoms: recorded in two groups. Discrete deflections: give evidence for quantized magnetic orientation.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1922/frankfurt-stern-gerlach-silver-beam-splitting.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A beam of silver atoms separated into two discrete groups in a nonuniform magnetic field, revealing quantized behavior of the atoms’ magnetic orientation.",
    story: {
      whyThere: "The researchers looked at whether a beam would spread continuously or divide into separate parts as it passed through the magnetic field.",
      howFound: "A deposit revealed two separate populations. The result could be read directly even though the contemporary theory did not yet include electron spin.",
      whatMakesUnique: "Modern quantum mechanics accounts for the observed silver-atom splitting with electron spin. The original experiment demonstrated the discrete outcome before that explanation was available.",
    },
    gallery: ["/images/discoveries/1922/frankfurt-stern-gerlach-silver-beam-splitting.webp"],
    primarySourceUrl: "https://link.springer.com/article/10.1007/BF01326983",
    supportingSources: [
      {
        title: "Historical reconstruction of the February 8, 1922 observation",
        url: "https://doi.org/10.1002/ijch.202300047",
        publisher: "Israel Journal of Chemistry",
        tier: "Tier 2",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["new-york-davisson-germer-electron-nickel-diffraction"],
    tags: ["Stern–Gerlach experiment", "atomic beams", "quantum measurement"],
  },
];
