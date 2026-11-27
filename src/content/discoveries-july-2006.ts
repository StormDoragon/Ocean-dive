import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 2006.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july2006Discoveries: Discovery[] = [
  {
    slug: "afar-dabbahu-2005-magma-dike-continental-rifting",
    "datePublished": "2026-11-27",
    title: "Satellite radar traced a long magma intrusion opening the Afar rift",
    categorySlug: "earth-science",
    subtopic: "Volcanoes",
    year: 2006,
    dateDiscovered: "2006-07-20",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Dabbahu magmatic segment, Afar (regional map proxy for the rifting event)",
      lat: 12.59,
      lng: 40.48,
      country: "Ethiopia",
    },
    discoveringOrg: "Tim J. Wright, Atalay Ayele and the Afar rifting study team",
    heroImage: "/images/discoveries/2006/afar-dabbahu-2005-magma-dike-continental-rifting.webp",
    imageAlt: "Original editorial diagram for A magma intrusion in a continental rift. About 60 km: length of the rift segment. Surface displacement: measured by radar.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2006/afar-dabbahu-2005-magma-dike-continental-rifting.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Radar measurements of surface movements showed that much of the 2005 Afar rift opening came from a long intrusion of magma.",
    story: {
      whyThere: "A series of earthquakes and an eruption accompanied sudden ground movement in Ethiopia's Afar region. The team compared radar pictures taken before and after the event to measure how the land shifted.",
      howFound: "The displacement pattern supported magma forcing its way into a long sheet-shaped fracture. The intrusion involved much of a roughly 60-kilometre rift segment, with estimates of several metres of opening in places.",
      whatMakesUnique: "The combination of radar and seismic evidence showed how magma can accommodate much of one episode of continental extension. The exact opening and volume depend on the model used to infer conditions below the surface.",
    },
    gallery: ["/images/discoveries/2006/afar-dabbahu-2005-magma-dike-continental-rifting.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/16855588/",
    supportingSources: [
      {
        title: "Follow-up reconstruction of the intrusion",
        url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2008jb005843",
        publisher: "Journal of Geophysical Research",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["isabela-sierra-negra-2018-caldera-resurgence-uptilt"],
    tags: ["Afar rift", "magma intrusion", "satellite radar"],
  },
];
