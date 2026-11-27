import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during January 2007.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const january2007Discoveries: Discovery[] = [
  {
    slug: "pasadena-cassini-titan-north-polar-radar-lakes",
    "datePublished": "2026-11-27",
    title: "Cassini’s Radar Found Scores of Possible Lake Basins Near Titan’s North Pole",
    categorySlug: "space",
    subtopic: "Space missions",
    year: 2007,
    dateDiscovered: "2007-01-04",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "NASA Jet Propulsion Laboratory, Cassini mission location",
      lat: 34.2,
      lng: -118.174,
      country: "United States",
    },
    discoveringOrg: "Ellen R. Stofan and the Cassini radar team",
    heroImage: "/images/discoveries/2007/pasadena-cassini-titan-north-polar-radar-lakes.webp",
    imageAlt: "Original editorial diagram for Radar finds Titan’s lakes. 75+: Dark features in the survey. 70° N: Southern edge of study band.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2007/pasadena-cassini-titan-north-polar-radar-lakes.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A Cassini flyby revealed more than 75 dark features north of 70° latitude on Titan. Their shapes and low radar returns supported the presence of hydrocarbon lakes.",
    story: {
      whyThere: "Cassini used radar to look through Titan’s haze in July 2006. Its flyby covered part of the north polar region, where temperatures allow methane and ethane to remain liquid.",
      howFound: "Some dark patches had shapes resembling shorelines, with channels leading into them. The combined signatures gave the team evidence that some basins contained liquid, alongside others that appeared partly filled or dry.",
      whatMakesUnique: "The measurements recorded a flyby snapshot of part of Titan. The Earth map marks Cassini’s mission operations center at the Jet Propulsion Laboratory.",
    },
    gallery: ["/images/discoveries/2007/pasadena-cassini-titan-north-polar-radar-lakes.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/17203056/",
    supportingSources: [
      {
        title: "Cassini finds northern lakes on Titan",
        url: "https://sci.esa.int/web/cassini-huygens/-/40483-cassini-finds-northern-lakes-on-titan",
        publisher: "European Space Agency",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["los-angeles-galileo-europa-magnetic-induction-subsurface-ocean"],
    tags: ["cassini", "Titan", "Hydrocarbon lakes", "planetary radar"],
  },
];
