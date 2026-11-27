import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during August 2006.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const august2006Discoveries: Discovery[] = [
  {
    slug: "tucson-bullet-cluster-lensing-gas-offset",
    "datePublished": "2026-11-27",
    title: "The Bullet Cluster Separates Hot Gas From Its Largest Mass Concentrations",
    categorySlug: "physics",
    subtopic: "Dark matter",
    year: 2006,
    dateDiscovered: "2006-08-21",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "University of Arizona, Tucson (lead research-team proxy)",
      lat: 32.232,
      lng: -110.953,
      country: "United States",
    },
    discoveringOrg: "Douglas Clowe, Maruša Bradač and colleagues",
    heroImage: "/images/discoveries/2006/tucson-bullet-cluster-lensing-gas-offset.webp",
    imageAlt: "Original editorial diagram for Hot gas and gravitational mass separate in a merger. X-rays: trace displaced hot gas. Weak lensing: maps dominant mass concentrations.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2006/tucson-bullet-cluster-lensing-gas-offset.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "X-ray observations and a gravitational lensing map placed hot gas and the main mass concentrations in different parts of a galaxy cluster collision.",
    story: {
      whyThere: "Two clusters passed through one another. Their hot gas slowed and piled up, producing X-rays, while the visible galaxies continued through the merger.",
      howFound: "The team measured distortions in images of more distant galaxies to map the gravitational pull of the merger. The two strongest mass concentrations remained closer to the visible galaxies than to the displaced hot gas.",
      whatMakesUnique: "This separation offered strong evidence for a substantial unseen mass component. The study measured where that component was concentrated and left its physical identity open.",
    },
    gallery: ["/images/discoveries/2006/tucson-bullet-cluster-lensing-gas-offset.webp"],
    paperUrl: "https://doi.org/10.1086/508162",
    primarySourceUrl: "https://chandra.harvard.edu/press/06_releases/press_082106.html",
    videoUrls: [],
    relatedSlugs: ["apache-point-sdss-boss-dr12-galaxy-clustering"],
    tags: ["galaxy clusters", "gravitational lensing", "dark matter"],
  },
];
