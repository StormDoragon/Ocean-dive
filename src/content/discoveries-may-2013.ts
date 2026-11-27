import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 2013.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may2013Discoveries: Discovery[] = [
  {
    slug: "wairau-bar-marlborough-isotope-diet-and-mobility",
    "datePublished": "2026-11-27",
    title: "Isotopes showed varied diets and mobility at early Wairau Bar",
    categorySlug: "archaeology",
    subtopic: "Human origins",
    year: 2013,
    dateDiscovered: "2013-05-15",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Wairau River mouth, Marlborough (regional map proxy for Wairau Bar)",
      lat: -41.479,
      lng: 174.064,
      country: "New Zealand",
    },
    discoveringOrg: "Rebecca L. Kinaston and the Wairau Bar isotope study team",
    heroImage: "/images/discoveries/2013/wairau-bar-marlborough-isotope-diet-and-mobility.webp",
    imageAlt: "Original editorial diagram for Interpreting isotopes at Wairau Bar. Carbon and nitrogen: diet indicators. Strontium: childhood residence evidence.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2013/wairau-bar-marlborough-isotope-diet-and-mobility.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Early burials at Wairau Bar yielded isotope patterns that researchers used to investigate diet and childhood residence.",
    story: {
      whyThere: "The study measured carbon, nitrogen and strontium isotopes in remains from the early settlement in Te Waipounamu, Aotearoa New Zealand. Differences in food sources and local geology can influence those measurements in different ways.",
      howFound: "The authors reported more similar patterns in one burial group and greater variation across other burials. They suggested that one group might have included people from the earliest settlement at the site.",
      whatMakesUnique: "A subsequent reanalysis agreed that the data supported substantial early mobility and proposed a different explanation for some dietary differences. The isotope measurements cannot name individual birthplaces.",
    },
    gallery: ["/images/discoveries/2013/wairau-bar-marlborough-isotope-diet-and-mobility.webp"],
    primarySourceUrl: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0064580",
    supportingSources: [
      {
        title: "Independent reanalysis",
        url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0135214",
        publisher: "PLOS One",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["rapa-nui-monument-platforms-proximity-coastal-water-seepage"],
    tags: ["Isotope analysis", "Polynesian archaeology", "human mobility"],
  },
];
