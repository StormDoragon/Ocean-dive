import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during September 2023.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const september2023Discoveries: Discovery[] = [
  {
    slug: "east-anatolian-fault-february-2023-earthquake-doublet",
    "datePublished": "2026-11-27",
    title: "Fault Models Show How the February 2023 Türkiye Earthquakes Crossed Multiple Segments",
    categorySlug: "earth-science",
    subtopic: "Earthquakes",
    year: 2023,
    dateDiscovered: "2023-09-09",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "East Anatolian Fault near Pazarcık (first-event area proxy)",
      lat: 37.22,
      lng: 37.01,
      country: "Türkiye",
    },
    discoveringOrg: "The 2023 East Anatolian earthquake doublet study team",
    heroImage: "/images/discoveries/2023/east-anatolian-fault-february-2023-earthquake-doublet.webp",
    imageAlt: "Original editorial diagram for Two large earthquakes traverse separate fault strands. Roughly 350 km: modeled extent of the first rupture. About 9 hours: separated the two main events.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2023/east-anatolian-fault-february-2023-earthquake-doublet.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A joint study of ground motion and satellite measurements reconstructed two ruptures nine hours apart, with the larger event spreading roughly 350 kilometers.",
    story: {
      whyThere: "A smaller branch of the fault hosted the start of the first event before slip spread onto the main structure. The second rupture followed another strand of the fault system.",
      howFound: "The authors combined seismograms, ground displacement, and aftershock locations to estimate the path and timing of slip across several fault segments.",
      whatMakesUnique: "The models suggest that stress added by the first event may have helped trigger the second. The reconstructed stress change is evidence of a plausible mechanism.",
    },
    gallery: ["/images/discoveries/2023/east-anatolian-fault-february-2023-earthquake-doublet.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/37689816/",
    videoUrls: [],
    relatedSlugs: ["kaikoura-nz-2016-earthquake-multifault-rupture-mapping"],
    tags: ["East Anatolian Fault", "earthquake doublet", "fault rupture"],
  },
];
