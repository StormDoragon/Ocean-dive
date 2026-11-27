import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 1986.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may1986Discoveries: Discovery[] = [
  {
    slug: "holmdel-bell-labs-single-beam-optical-tweezers",
    "datePublished": "2026-11-27",
    title: "One Focused Light Beam Trapped Particles as Small as About 25 Nanometers",
    categorySlug: "technology",
    subtopic: "Imaging",
    year: 1986,
    dateDiscovered: "1986-05-01",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Bell Laboratories site, Holmdel",
      lat: 40.366,
      lng: -74.168,
      country: "United States",
    },
    discoveringOrg: "Arthur Ashkin and the Bell Laboratories optical trapping team",
    heroImage: "/images/discoveries/1986/holmdel-bell-labs-single-beam-optical-tweezers.webp",
    imageAlt: "Original editorial diagram for Holding particles with light. ~25 nm: Smallest reported diameter. 10 µm: Upper end of tested range.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1986/holmdel-bell-labs-single-beam-optical-tweezers.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Researchers at Bell Laboratories demonstrated a single-beam optical trap in water. The experiment held particles across a size range from about 25 nanometers to 10 micrometers.",
    story: {
      whyThere: "Focused light produces a force that can draw dielectric particles into the most intense part of the beam. The Bell Laboratories team showed that this effect could hold particles in three dimensions.",
      howFound: "The trap held particles over a wide span of sizes in water. Its small scale made it possible to handle objects that would be difficult to approach with mechanical tools.",
      whatMakesUnique: "The observed range applies to the materials and setup in the report. The map marks the Holmdel laboratory.",
    },
    gallery: ["/images/discoveries/1986/holmdel-bell-labs-single-beam-optical-tweezers.webp"],
    primarySourceUrl: "https://doi.org/10.1364/OL.11.000288",
    videoUrls: [],
    relatedSlugs: ["gottingen-klar-hell-sted-90-to-110-nanometer-fluorescence-spot"],
    tags: ["Optical tweezers", "Optical trapping", "Light forces", "nanoparticles"],
  },
];
