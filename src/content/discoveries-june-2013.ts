import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2013.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june2013Discoveries: Discovery[] = [
  {
    slug: "mekong-floodplain-cambodian-tailorbird-description",
    "datePublished": "2026-11-27",
    title: "Plumage, Calls and DNA Distinguished the Cambodian Tailorbird",
    categorySlug: "biology",
    subtopic: "New species",
    year: 2013,
    dateDiscovered: "2013-06-25",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Mekong and Tonlé Sap floodplain around Phnom Penh (regional proxy)",
      lat: 11.58,
      lng: 104.95,
      country: "Cambodia",
    },
    discoveringOrg: "Simon P. Mahood, Ashish J. I. John and colleagues",
    scientificName: "Orthotomus chaktomuk",
    heroImage: "/images/discoveries/2013/mekong-floodplain-cambodian-tailorbird-description.webp",
    imageAlt: "Original editorial diagram for Several lines of evidence distinguish a small floodplain bird. Vocal and plumage traits: differ from related tailorbirds. Genetic comparisons: support recognition of the species.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2013/mekong-floodplain-cambodian-tailorbird-description.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A small bird found in low floodplain scrub near Phnom Penh was recognized as a separate species after comparison with similar tailorbirds.",
    story: {
      whyThere: "Photographs and early observations left the bird’s identity uncertain. The authors returned to survey patches of low vegetation on the floodplain.",
      howFound: "They compared recorded songs, plumage and genetic evidence, including comparisons with the birds initially thought to match it.",
      whatMakesUnique: "The study distinguished a species that occurs near a large city. Its discovery does not show that it lives in all urban habitats.",
    },
    gallery: ["/images/discoveries/2013/mekong-floodplain-cambodian-tailorbird-description.webp"],
    primarySourceUrl: "https://www.orientalbirdclub.org/s/Cambodian-Tailorbird.pdf",
    videoUrls: [],
    relatedSlugs: ["taliabu-peleng-wallacea-montane-songbird-taxa"],
    tags: ["tailorbirds", "Mekong floodplain", "bird taxonomy"],
  },
];
