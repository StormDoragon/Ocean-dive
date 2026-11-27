import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during March 2006.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const march2006Discoveries: Discovery[] = [
  {
    slug: "khammouane-laonastes-diatomyid-affinity",
    "datePublished": "2026-11-27",
    title: "A Living Laotian Rodent Matched a Family Known From Fossils",
    categorySlug: "biology",
    subtopic: "New species",
    year: 2006,
    dateDiscovered: "2006-03-10",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Khammouane karst region (study-region proxy)",
      lat: 17.54,
      lng: 105.13,
      country: "Laos",
    },
    discoveringOrg: "Mary R. Dawson, Laurent Marivaux and colleagues",
    scientificName: "Laonastes aenigmamus",
    heroImage: "/images/discoveries/2006/khammouane-laonastes-diatomyid-affinity.webp",
    imageAlt: "Original editorial diagram for A living rodent links to a lineage in the fossil record. Teeth and skull: compared with Asian fossils. Diatomyidae: the proposed family relationship.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2006/khammouane-laonastes-diatomyid-affinity.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Comparisons of the Laotian rock rat’s skull and teeth with Asian fossils supported including it in Diatomyidae, a family previously known from ancient remains.",
    story: {
      whyThere: "Laonastes had only recently been described as a living rodent. The team compared it with several groups represented in the fossil record.",
      howFound: "Its tooth patterns and associated anatomy resembled long-known diatomyid fossils. The similarities supported moving the living species into that family.",
      whatMakesUnique: "The result extended the known survival of a lineage. It did not imply that the living animal had remained unchanged since the fossils formed.",
    },
    gallery: ["/images/discoveries/2006/khammouane-laonastes-diatomyid-affinity.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/16527978/",
    videoUrls: [],
    relatedSlugs: ["western-ghats-purple-frog-ancient-lineage"],
    tags: ["Laotian rock rat", "Diatomyidae", "comparative anatomy"],
  },
];
