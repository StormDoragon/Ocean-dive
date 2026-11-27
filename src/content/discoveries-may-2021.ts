import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 2021.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may2021Discoveries: Discovery[] = [
  {
    slug: "kilifi-panga-ya-saidi-child-burial-78000-years",
    "datePublished": "2026-11-27",
    title: "A Kenyan cave preserved a child burial from about 78,000 years ago",
    categorySlug: "archaeology",
    subtopic: "Human origins",
    year: 2021,
    dateDiscovered: "2021-05-05",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Kilifi County, Kenya (regional map proxy for Panga ya Saidi)",
      lat: -3.63,
      lng: 39.84,
      country: "Kenya",
    },
    discoveringOrg: "María Martinón-Torres and the Panga ya Saidi research collaboration",
    heroImage: "/images/discoveries/2021/kilifi-panga-ya-saidi-child-burial-78000-years.webp",
    imageAlt: "Original editorial diagram for A Middle Stone Age burial. About 78,000 years: estimated age of the burial. Cave sediment: preserved the shape of the grave.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2021/kilifi-panga-ya-saidi-child-burial-78000-years.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Skeletal position and sediment evidence indicate that people placed a young child in a grave at Panga ya Saidi during the Middle Stone Age.",
    story: {
      whyThere: "At Panga ya Saidi, archaeologists uncovered fragile bones in a pit beneath the cave floor. The remains belonged to a child estimated to be around three years old.",
      howFound: "The team documented how the bones lay relative to each other and to the sediment. The body’s position, the shape of the pit and the way the remains decomposed support deliberate burial around 78,000 years ago.",
      whatMakesUnique: "The grave supplies unusually early material evidence of how people treated the dead. The practice’s meaning to the people who carried it out cannot be reconstructed from the bones alone.",
    },
    gallery: ["/images/discoveries/2021/kilifi-panga-ya-saidi-child-burial-78000-years.webp"],
    paperUrl: "https://doi.org/10.1038/s41586-021-03457-8",
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/33953416/",
    supportingSources: [
      {
        title: "Researchers’ account of the cave find",
        url: "https://www.cnrs.fr/en/press/africas-oldest-human-burial-site-uncovered",
        publisher: "CNRS",
        tier: "Tier 2",
        sourceType: "institutional",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: [
      "pahiyangala-fa-hien-lena-bone-projectile-and-ornament-evidence",
      "aotearoa-cook-strait-maori-settlement-radiocarbon-chronology",
    ],
    tags: ["Middle Stone Age", "burial archaeology", "Panga ya Saidi"],
  },
];
