import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during December 2013.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const december2013Discoveries: Discovery[] = [
  {
    slug: "las-campanas-hd-106906b-planetary-mass-companion",
    "datePublished": "2026-11-27",
    title: "Magellan Images a Planetary-Mass Companion Far Beyond Its Star’s Debris Disk",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2013,
    dateDiscovered: "2013-12-04",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Las Campanas Observatory, Atacama (Magellan imaging site)",
      lat: -29.015,
      lng: -70.692,
      country: "Chile",
    },
    discoveringOrg: "Vanessa Bailey, Tiffany Meshkat and colleagues",
    heroImage: "/images/discoveries/2013/las-campanas-hd-106906b-planetary-mass-companion.webp",
    imageAlt: "Original editorial diagram for A planetary-mass object far outside the debris disk. Around 650 AU: projected separation in the discovery study. Infrared images: revealed the faint companion.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2013/las-campanas-hd-106906b-planetary-mass-companion.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Infrared images and archival measurements identified an object of estimated planetary mass unusually far from HD 106906 in projection.",
    story: {
      whyThere: "The team used Magellan’s adaptive optics to distinguish a faint source from the target star’s glare. Infrared images provided several measurements of its light.",
      howFound: "Hubble archive measurements showed the faint object moving along with the star. The measured separation on the sky corresponded to about 650 times the Earth–Sun distance with the study’s adopted distance.",
      whatMakesUnique: "The separation is a projection of a much larger orbital geometry. The discovery paper estimated a planetary mass using evolutionary models and left how the object formed open.",
    },
    gallery: ["/images/discoveries/2013/las-campanas-hd-106906b-planetary-mass-companion.webp"],
    paperUrl: "https://doi.org/10.1088/2041-8205/780/1/L4",
    primarySourceUrl: "https://arxiv.org/abs/1312.1265",
    videoUrls: [],
    relatedSlugs: ["lick-hr-5183b-eccentric-wide-orbit-radial-velocity"],
    tags: ["direct imaging", "debris disks", "wide companions"],
  },
];
