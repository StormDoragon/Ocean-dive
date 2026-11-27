import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during April 2009.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const april2009Discoveries: Discovery[] = [
  {
    slug: "yokohama-liquid-perovskite-photovoltaic-sensitizer",
    "datePublished": "2026-11-27",
    title: "Perovskite Crystals Turn Visible Light Into Electricity in a Liquid Solar Cell",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 2009,
    dateDiscovered: "2009-04-14",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Toin University of Yokohama (research-team proxy)",
      lat: 35.569,
      lng: 139.51,
      country: "Japan",
    },
    discoveringOrg: "Akihiro Kojima, Tsutomu Miyasaka and colleagues",
    heroImage: "/images/discoveries/2009/yokohama-liquid-perovskite-photovoltaic-sensitizer.webp",
    imageAlt: "Original editorial diagram for An early perovskite photovoltaic cell. 3.8%: iodide-cell energy conversion. 2009: reported in laboratory cells.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2009/yokohama-liquid-perovskite-photovoltaic-sensitizer.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A 2009 laboratory cell with an iodide perovskite produced electricity from simulated sunlight at 3.8 percent efficiency.",
    story: {
      whyThere: "The team deposited light-absorbing perovskite nanocrystals on a porous film of titanium dioxide. The crystals acted as sensitizers, adding visible-light absorption to the electrode.",
      howFound: "One iodide-based cell turned 3.8 percent of the incoming solar energy into electricity. A bromide-based cell gave a higher voltage under the study's test conditions.",
      whatMakesUnique: "The measurement applies to an early liquid-electrolyte device. Later solid-state perovskite and tandem cells use different architectures.",
    },
    gallery: ["/images/discoveries/2009/yokohama-liquid-perovskite-photovoltaic-sensitizer.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/19366264/",
    videoUrls: [],
    relatedSlugs: ["lausanne-dye-sensitized-nanoporous-titanium-dioxide-cell"],
    tags: ["perovskites", "photovoltaics", "solar cells"],
  },
];
