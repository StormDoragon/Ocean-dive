import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2021.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june2021Discoveries: Discovery[] = [
  {
    slug: "paris-museum-african-coelacanth-scale-rings-lifespan",
    "datePublished": "2026-11-27",
    title: "Faint scale marks raised estimates of African coelacanth lifespans",
    categorySlug: "ocean",
    subtopic: "Ocean mysteries",
    year: 2021,
    dateDiscovered: "2021-06-17",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Muséum national d’Histoire naturelle, Paris (specimen collection map proxy)",
      lat: 48.843,
      lng: 2.361,
      country: "France",
    },
    discoveringOrg: "Kélig Mahé, Bruno Ernande and Marc Herbin",
    scientificName: "Latimeria chalumnae",
    heroImage: "/images/discoveries/2021/paris-museum-african-coelacanth-scale-rings-lifespan.webp",
    imageAlt: "Original editorial diagram for Reading small growth marks on coelacanth scales. Polarized light: revealed finer markings. About a century: estimated potential lifespan.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2021/paris-museum-african-coelacanth-scale-rings-lifespan.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Reexamining museum specimens' scales suggested that the African coelacanth can live for roughly a century.",
    story: {
      whyThere: "Earlier age estimates used features visible on scales under ordinary light. The team examined the scales of preserved fish under polarized light and found finer marks that were much more numerous.",
      howFound: "The researchers interpreted these marks as annual growth tracks. Counting them on the sampled fish and modelling age and length gave a much slower potential life history than earlier estimates.",
      whatMakesUnique: "The results suggest that the species can approach a century in age. Estimates of sexual maturity and gestation depend on the sample and how the fine marks relate to growth.",
    },
    gallery: ["/images/discoveries/2021/paris-museum-african-coelacanth-scale-rings-lifespan.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/34143958/",
    videoUrls: [],
    relatedSlugs: ["chatham-rise-kitefin-shark-first-luminescence-measurements"],
    tags: ["coelacanth", "fish scales", "longevity"],
  },
];
