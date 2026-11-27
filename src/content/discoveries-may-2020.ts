import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 2020.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may2020Discoveries: Discovery[] = [
  {
    slug: "dryanovo-bacho-kiro-cave-early-upper-palaeolithic-human-fossils",
    "datePublished": "2026-11-27",
    title: "Bacho Kiro fossils linked early Homo sapiens to Upper Palaeolithic tools",
    categorySlug: "archaeology",
    subtopic: "Human origins",
    year: 2020,
    dateDiscovered: "2020-05-11",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Dryanovo region (regional map proxy for Bacho Kiro Cave)",
      lat: 42.96,
      lng: 25.46,
      country: "Bulgaria",
    },
    discoveringOrg: "Jean-Jacques Hublin, Nikolay Sirakov and the Bacho Kiro excavation team",
    heroImage: "/images/discoveries/2020/dryanovo-bacho-kiro-cave-early-upper-palaeolithic-human-fossils.webp",
    imageAlt: "Original editorial diagram for Dating the Bacho Kiro occupation. Around 45,000 years: age of early Homo sapiens remains. Tools and ornaments: found in related deposits.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2020/dryanovo-bacho-kiro-cave-early-upper-palaeolithic-human-fossils.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A tooth and bone fragments identified as Homo sapiens were directly dated at a Bulgarian cave with Initial Upper Palaeolithic artifacts.",
    story: {
      whyThere: "Archaeologists excavated layers with stone and bone tools and ornaments. The scientists used tooth shape and molecular evidence from small bone fragments to identify human remains in those deposits.",
      howFound: "Radiocarbon measurements placed some of the remains at around 45,000 years ago. The artifacts and bones together document early modern people associated with this technology in southeastern Europe.",
      whatMakesUnique: "The local chronology helps separate occupations at the cave. The findings add evidence for early movements of Homo sapiens through Eurasia, with the number and routes of wider movements still debated.",
    },
    gallery: [
      "/images/discoveries/2020/dryanovo-bacho-kiro-cave-early-upper-palaeolithic-human-fossils.webp",
    ],
    primarySourceUrl: "https://www.nature.com/articles/s41586-020-2259-z",
    supportingSources: [
      {
        title: "Companion radiocarbon chronology",
        url: "https://doi.org/10.1038/s41559-020-1136-3",
        publisher: "Nature Ecology & Evolution",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["mount-carmel-misliya-upper-jaw-early-modern-human-fossil"],
    tags: ["Upper Palaeolithic", "human evolution", "radiocarbon dating"],
  },
];
