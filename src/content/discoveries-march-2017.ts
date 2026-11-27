import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during March 2017.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const march2017Discoveries: Discovery[] = [
  {
    slug: "kaikoura-nz-2016-earthquake-multifault-rupture-mapping",
    "datePublished": "2026-11-27",
    title: "The Kaikōura earthquake ruptured at least 12 major faults",
    categorySlug: "earth-science",
    subtopic: "Earthquakes",
    year: 2017,
    dateDiscovered: "2017-03-23",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Kaikōura coast, South Island (regional map proxy for the rupture area)",
      lat: -42.403,
      lng: 173.68,
      country: "New Zealand",
    },
    discoveringOrg: "Ian J. Hamling and the Kaikōura earthquake research team",
    heroImage: "/images/discoveries/2017/kaikoura-nz-2016-earthquake-multifault-rupture-mapping.webp",
    imageAlt: "Original editorial diagram for Mapping the Kaikōura rupture. Over 170 km: northward rupture length. At least 12: major faults with surface breaks.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2017/kaikoura-nz-2016-earthquake-multifault-rupture-mapping.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Field and satellite measurements showed the 2016 magnitude 7.8 earthquake propagated through a complex network of faults for more than 170 kilometres.",
    story: {
      whyThere: "Researchers mapped ground offsets in the field and compared them with satellite radar, position measurements and seismic records. The different data showed movement on both previously mapped and previously unmapped structures.",
      howFound: "The event propagated northward for more than 170 kilometres and continued beyond the coast. The team mapped surface breaks on at least 12 major faults and recorded coastal uplift.",
      whatMakesUnique: "The study showed why earthquake scenarios can benefit from considering connected faults that fail in the same event. Some details of slip at depth remained uncertain.",
    },
    gallery: ["/images/discoveries/2017/kaikoura-nz-2016-earthquake-multifault-rupture-mapping.webp"],
    primarySourceUrl: "https://eprints.whiterose.ac.uk/id/eprint/113736/",
    videoUrls: [],
    relatedSlugs: ["longmen-shan-wenchuan-earthquake-rupture-endpoints-qingchuan"],
    tags: ["earthquakes", "fault rupture", "satellite radar"],
  },
];
