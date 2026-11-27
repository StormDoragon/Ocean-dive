import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during January 2014.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const january2014Discoveries: Discovery[] = [
  {
    slug: "ellesmere-tiktaalik-pelvic-girdle-hind-fin",
    "datePublished": "2026-11-27",
    title: "Tiktaalik’s Pelvis Was Larger Than Its Fish Relatives’",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil discoveries",
    year: 2014,
    dateDiscovered: "2014-01-13",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Southern Ellesmere Island, Nunavut (Fram Formation proxy)",
      lat: 77.15,
      lng: -82.1,
      country: "Canada",
    },
    discoveringOrg: "Neil H. Shubin, Edward B. Daeschler and Farish A. Jenkins Jr.",
    heroImage: "/images/discoveries/2014/ellesmere-tiktaalik-pelvic-girdle-hind-fin.webp",
    imageAlt: "Original editorial diagram for A robust pelvis in a fish with fins. Deep socket: held the rear fin joint. Enlarged pelvis: compared with similar finned relatives.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2014/ellesmere-tiktaalik-pelvic-girdle-hind-fin.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "The team recovered pelvic bones and part of a rear fin, revealing a substantial joint and unusually large hips in this finned relative of early limbed vertebrates.",
    story: {
      whyThere: "Pelvic bones from several specimens gave researchers a three-dimensional view of the rear part of the skeleton. One preserved some of the associated fin.",
      howFound: "The joint had a deep socket and a strong rim. The pelvis also retained features found in fishes, including the absence of a connection to a sacral rib.",
      whatMakesUnique: "The results show that enlargement of the rear appendages began in a finned animal. The preserved anatomy supports ideas about propulsion while leaving its exact movements open.",
    },
    gallery: ["/images/discoveries/2014/ellesmere-tiktaalik-pelvic-girdle-hind-fin.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/24449831/",
    videoUrls: [],
    relatedSlugs: ["east-greenland-acanthostega-aquatic-juvenile-growth"],
    tags: ["vertebrate evolution", "devonian", "fossil anatomy"],
  },
];
