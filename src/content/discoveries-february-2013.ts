import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 2013.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february2013Discoveries: Discovery[] = [
  {
    slug: "pocatello-idaho-helicoprion-ct-spiral-teeth-lower-jaw",
    "datePublished": "2026-11-27",
    title: "A CT Scan Placed Helicoprion’s Spiral Teeth Inside the Lower Jaw",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil reinterpretation",
    year: 2013,
    dateDiscovered: "2013-02-27",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Idaho Museum of Natural History, Pocatello specimen location",
      lat: 42.862,
      lng: -112.433,
      country: "United States",
    },
    discoveringOrg: "Leif Tapanila and the Helicoprion jaw reconstruction team",
    heroImage: "/images/discoveries/2013/pocatello-idaho-helicoprion-ct-spiral-teeth-lower-jaw.webp",
    imageAlt: "Original editorial diagram for Where the tooth spiral fitted. Lower jaw: Position in the reconstruction. CT scans: Cartilage visible within rock.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2013/pocatello-idaho-helicoprion-ct-spiral-teeth-lower-jaw.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Scans of an Idaho fossil preserved cartilage around a Helicoprion tooth spiral. The reconstruction located the spiral inside the lower jaw.",
    story: {
      whyThere: "The spiral teeth often fossilized without the surrounding skeleton. This specimen preserved pieces of jaw cartilage covered by rock, giving the team anatomical landmarks to compare.",
      howFound: "The scans showed how the coil fit along the midline of the lower jaw. Its position and other skeletal features informed comparisons with living cartilaginous fishes.",
      whatMakesUnique: "The study narrowed down how the teeth were arranged. Diet remains inferred from anatomy, and the pin marks the collection that holds the specimen.",
    },
    gallery: ["/images/discoveries/2013/pocatello-idaho-helicoprion-ct-spiral-teeth-lower-jaw.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/23445952/",
    videoUrls: [],
    relatedSlugs: ["charleston-airport-pelagornis-sandersi-six-meter-wingspan"],
    tags: ["Helicoprion", "Tooth whorls", "CT imaging", "permian"],
  },
];
