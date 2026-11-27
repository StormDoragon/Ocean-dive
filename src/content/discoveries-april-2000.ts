import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during April 2000.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const april2000Discoveries: Discovery[] = [
  {
    slug: "mcmurdo-boomerang-cmb-first-acoustic-peak",
    "datePublished": "2026-11-27",
    title: "An Antarctic Balloon Resolves an Acoustic Peak in the Early Universe",
    categorySlug: "space",
    subtopic: "Space missions",
    year: 2000,
    dateDiscovered: "2000-04-27",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "McMurdo Station (Antarctic campaign proxy)",
      lat: -77.848,
      lng: 166.669,
      country: "Antarctica",
    },
    discoveringOrg: "Paolo de Bernardis, P. A. R. Ade and the BOOMERanG team",
    heroImage: "/images/discoveries/2000/mcmurdo-boomerang-cmb-first-acoustic-peak.webp",
    imageAlt: "Original editorial diagram for An Antarctic map resolves a preferred angular scale. 197 ± 6: reported multipole at the peak. Four frequencies: helped separate foreground emission.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2000/mcmurdo-boomerang-cmb-first-acoustic-peak.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "BOOMERanG mapped tiny variations in the microwave background and found a characteristic angular scale consistent with a nearly flat cosmic geometry.",
    story: {
      whyThere: "A balloon carried microwave detectors above much of Earth’s atmosphere during the Antarctic campaign. Maps at several frequencies helped the team separate foreground signals from the background radiation.",
      howFound: "The team measured variation across a range of angular scales. The spectrum showed a peak at a multipole of about 197, close to what certain models of a flat universe predicted.",
      whatMakesUnique: "The result constrains cosmic geometry through a model of how early sound waves left an imprint on the sky. The measurement came from a portion of the sky mapped by that flight.",
    },
    gallery: ["/images/discoveries/2000/mcmurdo-boomerang-cmb-first-acoustic-peak.webp"],
    primarySourceUrl: "https://www.nature.com/articles/35010035",
    videoUrls: [],
    relatedSlugs: ["goddard-cobe-firas-microwave-background-blackbody"],
    tags: ["cosmic microwave background", "balloon astronomy", "acoustic peaks"],
  },
];
