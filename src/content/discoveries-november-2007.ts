import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during November 2007.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const november2007Discoveries: Discovery[] = [
  {
    slug: "gadoufaoua-nigersaurus-monthly-tooth-replacement",
    "datePublished": "2026-11-27",
    title: "Nigersaurus Replaced Individual Teeth in as Little as About a Month",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil discoveries",
    year: 2007,
    dateDiscovered: "2007-11-21",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Gadoufaoua, western Ténéré (fossil-area proxy)",
      lat: 16.7,
      lng: 9.55,
      country: "Niger",
    },
    discoveringOrg: "Paul C. Sereno, Jeffrey A. Wilson and colleagues",
    scientificName: "Nigersaurus taqueti",
    heroImage: "/images/discoveries/2007/gadoufaoua-nigersaurus-monthly-tooth-replacement.webp",
    imageAlt: "Original editorial diagram for New teeth were stacked behind worn teeth. About one month: shortest estimated tooth replacement interval. Wide muzzle: held tooth rows at the front of the jaws.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2007/gadoufaoua-nigersaurus-monthly-tooth-replacement.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A reconstructed skull and thin sections through its teeth revealed stacked replacements and a rapid renewal rate in this broad-muzzled sauropod.",
    story: {
      whyThere: "The fragile skull was digitally rebuilt with CT images and fossil casts. Rows of teeth were concentrated toward the front of its unusually wide jaws.",
      howFound: "The researchers compared growth marks inside successive teeth to estimate the replacement interval. The anatomy and patterns of wear suggested feeding near ground level.",
      whatMakesUnique: "The month-long estimate concerns replacement at individual tooth positions. Multiple rows let this animal keep the feeding surface working as teeth wore out.",
    },
    gallery: ["/images/discoveries/2007/gadoufaoua-nigersaurus-monthly-tooth-replacement.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/18030355/",
    videoUrls: [],
    relatedSlugs: ["senekal-spion-kop-pulanesaura-sauropod-anatomy"],
    tags: ["tooth replacement", "Sauropods", "ct scanning"],
  },
];
