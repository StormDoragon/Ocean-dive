import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 1965.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june1965Discoveries: Discovery[] = [
  {
    slug: "prince-william-sound-alaska-1964-uplift-and-subsidence",
    "datePublished": "2026-11-27",
    title: "Coastal Uplift and Subsidence Exposed the Reach of the 1964 Alaska Earthquake",
    categorySlug: "earth-science",
    subtopic: "Earthquakes",
    year: 1965,
    dateDiscovered: "1965-06-25",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Prince William Sound (deformation study-area proxy)",
      lat: 60.55,
      lng: -147.4,
      country: "United States",
    },
    discoveringOrg: "George Plafker",
    heroImage: "/images/discoveries/1965/prince-william-sound-alaska-1964-uplift-and-subsidence.webp",
    imageAlt: "Original editorial diagram for Shorelines record opposing vertical movements. Coastal field surveys: measured the height change. Broad deformation belts: fit slip on a large low-angle thrust.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1965/prince-william-sound-alaska-1964-uplift-and-subsidence.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Field surveys of the 1964 Alaska event mapped broad neighboring belts of uplift and subsidence, supporting a very large thrust rupture beneath southern Alaska.",
    story: {
      whyThere: "Along the coast, displaced biological and shoreline markers recorded the change in relative sea level after the earthquake.",
      howFound: "Near the offshore margin, much of the land rose. Other areas farther inland sank, revealing deformation on a scale larger than any single mapped surface break could explain.",
      whatMakesUnique: "The opposing movements helped establish how slip on a broad, low-angle fault deforms the overriding plate in a great subduction-zone earthquake.",
    },
    gallery: ["/images/discoveries/1965/prince-william-sound-alaska-1964-uplift-and-subsidence.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/17819412/",
    supportingSources: [
      {
        title: "USGS report on the field measurements",
        url: "https://pubs.usgs.gov/publication/pp543I",
        publisher: "U.S. Geological Survey",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["offshore-northern-sumatra-andaman-seismic-rupture-history"],
    tags: ["Alaska earthquake", "crustal deformation", "subduction"],
  },
];
