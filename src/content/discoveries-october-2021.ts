import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during October 2021.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const october2021Discoveries: Discovery[] = [
  {
    slug: "newfoundland-lanse-aux-meadows-norse-timber-felled-1021",
    "datePublished": "2026-11-27",
    title: "Tree Rings Fixed Norse Activity in Newfoundland to 1021",
    categorySlug: "archaeology",
    subtopic: "Ancient civilizations",
    year: 2021,
    dateDiscovered: "2021-10-20",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "L’Anse aux Meadows National Historic Site",
      lat: 51.596,
      lng: -55.531,
      country: "Canada",
    },
    discoveringOrg: "Margot Kuitems and the L’Anse aux Meadows dating team",
    heroImage: "/images/discoveries/2021/newfoundland-lanse-aux-meadows-norse-timber-felled-1021.webp",
    imageAlt: "Original editorial diagram for A year fixed in wood. 993 CE: Radiocarbon marker. 1021 CE: Timber date.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2021/newfoundland-lanse-aux-meadows-norse-timber-felled-1021.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A radiocarbon spike recorded in tree rings anchored the dating of worked wood from L’Anse aux Meadows. The timbers showed that Norse people were active there in 1021 CE.",
    story: {
      whyThere: "The researchers examined wooden pieces cut with metal tools from the site in northern Newfoundland. Tree rings preserved a known rise in atmospheric radiocarbon in 993 CE.",
      howFound: "Counting from that marker to the outer wood tied the cutting date to 1021 in several pieces. The approach gave better precision than the earlier radiocarbon range for the site.",
      whatMakesUnique: "The year marks confirmed activity at the settlement. Arrival, departure and the full duration of the occupation remain separately constrained.",
    },
    gallery: [
      "/images/discoveries/2021/newfoundland-lanse-aux-meadows-norse-timber-felled-1021.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/34671168/",
    supportingSources: [
      {
        title: "L’Anse aux Meadows National Historic Site",
        url: "https://parks.canada.ca/lhn-nhs/nl/meadows",
        publisher: "Parks Canada",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["lumbini-maya-devi-early-timber-before-asokan-brick-shrine"],
    tags: ["L’Anse aux Meadows", "Norse archaeology", "tree-ring dating", "Radiocarbon spike"],
  },
];
