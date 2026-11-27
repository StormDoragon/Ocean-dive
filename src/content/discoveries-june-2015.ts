import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2015.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june2015Discoveries: Discovery[] = [
  {
    slug: "pescadero-basin-auka-carbonate-chimneys-hydrothermal-vent-field",
    "datePublished": "2026-11-27",
    title: "Deep in Pescadero Basin, a vent field built pale carbonate chimneys",
    categorySlug: "ocean",
    subtopic: "Hydrothermal vents",
    year: 2015,
    dateDiscovered: "2015-06-02",
    reviewStatus: "source-verified",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Auka vent field, Southern Pescadero Basin (published Z vent sampling point)",
      lat: 23.95666,
      lng: -108.86171,
      country: "Mexico",
      depthMeters: 3670,
    },
    discoveringOrg: "Monterey Bay Aquarium Research Institute Pescadero Basin expedition team",
    heroImage: "/images/discoveries/2015/pescadero-basin-auka-carbonate-chimneys-hydrothermal-vent-field.webp",
    imageAlt: "Original editorial diagram for Exploring the carbonate vents of Pescadero Basin. 3,670 metres: later sample depth at Z vent. Carbonate chimneys: observed at the active field.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2015/pescadero-basin-auka-carbonate-chimneys-hydrothermal-vent-field.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A robot survey discovered a high-temperature hydrothermal vent field with carbonate chimneys in the southern Gulf of California.",
    story: {
      whyThere: "Explorers used underwater mapping to look for chimney-shaped structures on the floor of Pescadero Basin. Close inspection by a remotely operated vehicle revealed an active field with pale, mineral-rich chimneys.",
      howFound: "At Auka, hot water rises through sediment before flowing out on the seafloor. The resulting deposits include carbonate, giving the structures a different appearance from many sulfide-rich vents.",
      whatMakesUnique: "The field showed how subsurface sediment can influence vent fluids and deposits. The mapped point marks a site sampled later in the same field, at 3,670 metres.",
    },
    gallery: [
      "/images/discoveries/2015/pescadero-basin-auka-carbonate-chimneys-hydrothermal-vent-field.webp",
    ],
    primarySourceUrl: "https://www.mbari.org/news/mbari-researchers-discover-deepest-known-high-temperature-hydrothermal-vents-in-pacific-ocean/",
    supportingSources: [
      {
        title: "Survey paper describing the vent fields",
        url: "https://escholarship.org/uc/item/2t3233pn",
        publisher: "University of California eScholarship",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
      {
        title: "Published sample coordinates and depth",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7812739/",
        publisher: "BMC Biology",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["knipovich-ridge-jotul-first-hydrothermal-vent-field"],
    tags: ["hydrothermal vents", "carbonate chimneys", "Gulf of California"],
  },
];
