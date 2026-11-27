import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2022.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june2022Discoveries: Discovery[] = [
  {
    slug: "cagayan-luzon-river-shell-middens-neolithic-transition",
    "datePublished": "2026-11-27",
    title: "New Dates Clarify a Long-Lived Riverside Settlement Tradition in Northern Luzon",
    categorySlug: "archaeology",
    subtopic: "Ancient civilizations",
    year: 2022,
    dateDiscovered: "2022-06-01",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Lal-lo, lower Cagayan Valley (regional study proxy)",
      lat: 18.20198,
      lng: 121.66085,
      country: "Philippines",
    },
    discoveringOrg: "Hsiao-chun Hung, Cheng-hwa Tsang and collaborators",
    heroImage: "/images/discoveries/2022/cagayan-luzon-river-shell-middens-neolithic-transition.webp",
    imageAlt: "Original editorial diagram for A riverside chronology for northern Luzon. Around 7,000 years ago: early Cagayan preceramic activity. 4,200–4,000 years ago: estimated start of the local Neolithic.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2022/cagayan-luzon-river-shell-middens-neolithic-transition.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "New and previously published radiocarbon dates show that riverside foragers occupied the lower Cagayan Valley for millennia before and during the archaeological transition to the Neolithic.",
    story: {
      whyThere: "Shell middens along the lower Cagayan contain layers left by communities that gathered river resources. Their chronology helps distinguish earlier occupations from later farming communities.",
      howFound: "The researchers combined excavated material with a new synthesis of radiocarbon dates. They placed preceramic activity as far back as around 7,000 years ago and the Neolithic transition around 4,200–4,000 years ago.",
      whatMakesUnique: "The sequence gives a local view of a wider population and cultural shift in Island Southeast Asia. It provides dates for material traditions, with the details of interaction between communities still open to study.",
    },
    gallery: ["/images/discoveries/2022/cagayan-luzon-river-shell-middens-neolithic-transition.webp"],
    primarySourceUrl: "https://doi.org/10.15184/aqy.2022.65",
    videoUrls: [],
    relatedSlugs: ["mohua-triangle-flat-maori-sweet-potato-starch"],
    tags: ["Philippines", "shell middens", "neolithic", "radiocarbon dating"],
  },
];
