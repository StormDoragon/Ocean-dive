import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 2020.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july2020Discoveries: Discovery[] = [
  {
    slug: "talasiu-tongatapu-early-polynesian-mortuary-evidence",
    "datePublished": "2026-11-27",
    title: "Burials at Talasiu Record Early Polynesian Mortuary Practices",
    categorySlug: "archaeology",
    subtopic: "Tomb discoveries",
    year: 2020,
    dateDiscovered: "2020-07-02",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Tongatapu, Tonga (regional proxy for Talasiu)",
      lat: -21.15,
      lng: -175.16,
      country: "Tonga",
    },
    discoveringOrg: "Frédérique Valentin and the Talasiu research team",
    heroImage: "/images/discoveries/2020/talasiu-tongatapu-early-polynesian-mortuary-evidence.webp",
    imageAlt: "Original editorial diagram for Talasiu records early burial practices in Tonga. Around 2,650 years: age of the studied burials. Talasiu: site on Tongatapu.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2020/talasiu-tongatapu-early-polynesian-mortuary-evidence.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Burials dated to around 2,650 calendar years ago provide early physical evidence of mortuary practices at Talasiu in Tonga.",
    story: {
      whyThere: "Talasiu preserves remains from an early period of Polynesian history. The burials give a way to compare practices across different times.",
      howFound: "The authors examined the burial arrangements and compared them with older Lapita and later Tongan evidence. They also compared the results with practices proposed through linguistic research.",
      whatMakesUnique: "The similarities and differences show that mortuary practices changed over time. The results describe the people represented at Talasiu within the wider region.",
    },
    gallery: ["/images/discoveries/2020/talasiu-tongatapu-early-polynesian-mortuary-evidence.webp"],
    paperUrl: "https://doi.org/10.15184/aqy.2020.89",
    primarySourceUrl: "https://www.cambridge.org/core/journals/antiquity/article/mortuary-practices-of-the-first-polynesians-formative-ethnogenesis-in-the-kingdom-of-tonga/1362DCB88424D5B2937DE2757AE433AB",
    videoUrls: [],
    relatedSlugs: ["palau-first-settlers-papuan-east-asian-ancestry"],
    tags: ["Polynesian archaeology", "Talasiu", "mortuary practices"],
  },
];
