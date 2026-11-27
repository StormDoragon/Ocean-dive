import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 2023.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july2023Discoveries: Discovery[] = [
  {
    slug: "camp-century-greenland-basal-sediment-ice-free-416000-years",
    "datePublished": "2026-11-27",
    title: "Buried sediment dated an ice-free interval in northwestern Greenland",
    categorySlug: "earth-science",
    subtopic: "Ice cores",
    year: 2023,
    dateDiscovered: "2023-07-20",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Camp Century region, northwestern Greenland (map proxy for the drilling site)",
      lat: 77.18,
      lng: -61.12,
      country: "Greenland",
    },
    discoveringOrg: "Andrew J. Christ, Tammy M. Rittenour and the Camp Century core study team",
    heroImage: "/images/discoveries/2023/camp-century-greenland-basal-sediment-ice-free-416000-years.webp",
    imageAlt: "Original editorial diagram for Dating sediment under the Greenland ice. About 416,000 years: central deposition age estimate. Local ice-free interval: inferred at the drilling site.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2023/camp-century-greenland-basal-sediment-ice-free-416000-years.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Sediment from below the Camp Century ice core was deposited about 416,000 years ago, indicating that the site was ice-free then.",
    story: {
      whyThere: "A core recovered from Greenland included frozen sediment beneath the ice. Researchers studied when grains in the upper sediment had last received light and how long the material had been exposed near the surface.",
      howFound: "The analysis dated deposition to roughly 416,000 years ago with an uncertainty of about 38,000 years. The deposit records an ice-free interval at that site during a past warm period.",
      whatMakesUnique: "The result is direct evidence for past local ice loss in northwestern Greenland. Estimating total ice-sheet loss during the interval requires models and other locations.",
    },
    gallery: [
      "/images/discoveries/2023/camp-century-greenland-basal-sediment-ice-free-416000-years.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/37471537/",
    supportingSources: [
      {
        title: "Research manuscript with dating details",
        url: "https://par.nsf.gov/servlets/purl/10488156",
        publisher: "National Science Foundation Public Access Repository",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["central-himalayas-declassified-satellite-glacier-ice-loss-doubled"],
    tags: ["Greenland ice sheet", "glacial history", "sediment dating"],
  },
];
