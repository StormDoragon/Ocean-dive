import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during December 1995.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const december1995Discoveries: Discovery[] = [
  {
    slug: "blue-mountains-wollemi-pine-new-conifer-genus",
    "datePublished": "2026-11-27",
    title: "A Living Conifer From New South Wales Becomes a New Genus",
    categorySlug: "biology",
    subtopic: "New species",
    year: 1995,
    dateDiscovered: "1995-12-13",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Greater Blue Mountains region (broad conservation proxy)",
      lat: -33.58,
      lng: 150.29,
      country: "Australia",
    },
    discoveringOrg: "Wyn G. Jones, Kenneth D. Hill and Jan M. Allen",
    scientificName: "Wollemia nobilis",
    heroImage: "/images/discoveries/1995/blue-mountains-wollemi-pine-new-conifer-genus.webp",
    imageAlt: "Original editorial diagram for A living conifer with a distinctive set of characters. 1994: year of the field discovery. 1995: year the genus and species were formally described.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1995/blue-mountains-wollemi-pine-new-conifer-genus.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A newly examined conifer with a distinctive combination of foliage and cones was named Wollemia nobilis in 1995.",
    story: {
      whyThere: "Researchers studied living material after the tree was found in New South Wales in 1994. Its overall form and reproductive structures pointed to the araucaria family.",
      howFound: "Leaf arrangement, cones and other structures helped distinguish the tree from living members of related genera. The formal description introduced both a new genus and a new species.",
      whatMakesUnique: "The discovery added a living branch to the known diversity of the family. The map uses a broad regional marker because the wild trees occupy a protected location.",
    },
    gallery: ["/images/discoveries/1995/blue-mountains-wollemi-pine-new-conifer-genus.webp"],
    primarySourceUrl: "https://www.biodiversitylibrary.org/part/281858",
    supportingSources: [
      {
        title: "Wollemia nobilis name and original publication date",
        url: "https://www.ipni.org/n/986236-1",
        publisher: "International Plant Names Index",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["lord-howe-archipelago-stick-insect-museum-genetic-confirmation"],
    tags: ["conifers", "plant taxonomy", "Araucariaceae"],
  },
];
