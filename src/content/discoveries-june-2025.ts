import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2025.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june2025Discoveries: Discovery[] = [
  {
    slug: "twa-7-b-direct-imaging",
    title: "JWST Images a Sub-Jovian Planet Candidate at TWA 7",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2025,
    dateDiscovered: "2025-06-26",
    reviewStatus: "preliminary",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-13",
    location: {
      name: "Space Telescope Science Institute, Baltimore, Maryland",
      lat: 39.332,
      lng: -76.623,
      country: "United States",
    },
    discoveringOrg: "CNRS / Observatoire de Paris–PSL / JWST MIRI team",
    scientificName: "TWA 7 b candidate",
    classification: "Astronomy · Directly imaged sub-Jovian exoplanet candidate",
    heroImage: "/images/discoveries/2025/twa-7-b-direct-imaging.webp",
    imageAlt: "Original editorial artist impression of a faint sub-Jovian planet candidate embedded in a ring-shaped debris disk around the young star TWA 7.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "artist impression",
    imageRelation: "illustration",
    summary: "James Webb Space Telescope coronagraphy revealed a compact infrared source embedded in a narrow ring of the young star TWA 7's debris disk. Models place the candidate near 0.3 Jupiter masses at about 52 astronomical units, potentially making it the lowest-mass planet directly imaged around another star.",
    story: {
      whyThere: "TWA 7's nearly face-on debris disk contains rings, gaps, and asymmetries that could be sculpted by an unseen planet. The geometry makes the system unusually favourable for coronagraphic searches close to the star.",
      howFound: "JWST's MIRI instrument blocked most of the star's light and imaged the disk at mid-infrared wavelengths. Image processing isolated a point source inside a gap, while background-object tests, spectral modelling, and later observations assessed whether it shares the system's location and expected temperature.",
      whatMakesUnique: "The source's position and brightness are consistent with a young Saturn-mass world shaping the disk, and follow-up work has strengthened that interpretation. It remains a planet candidate until independent observations fully exclude alternatives and establish orbital motion.",
    },
    gallery: ["/images/discoveries/2025/twa-7-b-direct-imaging.webp"],
    paperUrl: "https://arxiv.org/abs/2502.15081",
    supportingSources: [
      {
        title: "Follow-up characterization of the TWA 7 planetary candidate",
        url: "https://arxiv.org/abs/2506.19932",
        publisher: "arXiv",
        tier: "Tier 1",
        sourceType: "paper",
        accessedAt: "2026-07-13",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["quaoar-ring-outside-roche-limit", "bennu-life-building-blocks"],
    tags: ["twa 7", "jwst", "direct imaging", "exoplanet candidate", "debris disk"],
  },
];
