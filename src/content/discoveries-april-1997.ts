import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during April 1997.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const april1997Discoveries: Discovery[] = [
  {
    slug: "austin-lithium-iron-phosphate-reversible-cathode",
    "datePublished": "2026-11-27",
    title: "Lithium Iron Phosphate Reversibly Stores Charge in an Early Cathode Test",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 1997,
    dateDiscovered: "1997-04-01",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "University of Texas at Austin (research-team proxy)",
      lat: 30.286,
      lng: -97.739,
      country: "United States",
    },
    discoveringOrg: "Anil K. Padhi, K. S. Nanjundaswamy and John B. Goodenough",
    heroImage: "/images/discoveries/1997/austin-lithium-iron-phosphate-reversible-cathode.webp",
    imageAlt: "Original editorial diagram for Iron phosphate can take up and release lithium. About 3.5 V: electrode potential against lithium. 100–110 mAh/g: specific capacity in early tests.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1997/austin-lithium-iron-phosphate-reversible-cathode.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Early experiments showed that lithium could be removed from and returned to an iron phosphate crystal, giving it potential as a rechargeable battery cathode.",
    story: {
      whyThere: "The researchers studied phosphates with an olivine-like crystal arrangement. Their iron-containing material gave a reversible reaction in a laboratory electrochemical cell.",
      howFound: "The tests measured a reaction near 3.5 volts against lithium. The cathode delivered about 100 to 110 milliamp-hours per gram under the reported test conditions.",
      whatMakesUnique: "The work identified a useful candidate for the positive electrode. It also showed that moving more quickly through a charge or discharge reduced how much lithium was accessible in those tests.",
    },
    gallery: ["/images/discoveries/1997/austin-lithium-iron-phosphate-reversible-cathode.webp"],
    primarySourceUrl: "https://doi.org/10.1149/1.1837571",
    videoUrls: [],
    relatedSlugs: ["yokohama-lithium-superionic-solid-electrolyte"],
    tags: ["lithium iron phosphate", "battery cathodes", "phosphates"],
  },
];
