import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 2021.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july2021Discoveries: Discovery[] = [
  {
    slug: "alta-floresta-amazon-aircraft-carbon-flux",
    "datePublished": "2026-11-27",
    title: "Aircraft Measurements Found a Net Carbon Source in the Southeastern Amazon",
    categorySlug: "earth-science",
    subtopic: "Climate records",
    year: 2021,
    dateDiscovered: "2021-07-14",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Alta Floresta, Mato Grosso (one aircraft profiling site)",
      lat: -8.8,
      lng: -56.75,
      country: "Brazil",
    },
    discoveringOrg: "Luciana V. Gatti, Luana S. Basso, John B. Miller and colleagues",
    heroImage: "/images/discoveries/2021/alta-floresta-amazon-aircraft-carbon-flux.webp",
    imageAlt: "Original editorial diagram for Aircraft profiles reveal regional carbon balance. 590 profiles: measured at four monitoring regions. Southeastern Amazon: acted as a net source in the study.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2021/alta-floresta-amazon-aircraft-carbon-flux.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Hundreds of aircraft profiles showed that the southeastern Amazon released more carbon than it absorbed in the study period, with substantial regional variation.",
    story: {
      whyThere: "Researchers measured carbon dioxide and carbon monoxide over four regions of the Brazilian Amazon from 2010 through 2018.",
      howFound: "The team used carbon monoxide to estimate part of the contribution from fires and compared the regions. The east, especially the southeast, showed greater emissions than the west.",
      whatMakesUnique: "The finding refers to regional fluxes over the sampled years. It does not assign the same balance to every part of the Amazon.",
    },
    gallery: ["/images/discoveries/2021/alta-floresta-amazon-aircraft-carbon-flux.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/34262208/",
    videoUrls: [],
    relatedSlugs: ["acre-geoglyphs-bamboo-forest-palm-management"],
    tags: ["Amazon forests", "carbon flux", "aircraft observations"],
  },
];
