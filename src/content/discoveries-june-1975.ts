import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 1975.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june1975Discoveries: Discovery[] = [
  {
    slug: "columbia-missouri-neutron-interference-earth-gravity",
    "datePublished": "2026-11-27",
    title: "Earth’s Gravity Shifted a Neutron Interference Pattern",
    categorySlug: "physics",
    subtopic: "Quantum research",
    year: 1975,
    dateDiscovered: "1975-06-09",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "University of Missouri, Columbia (research-team proxy)",
      lat: 38.94,
      lng: -92.327,
      country: "United States",
    },
    discoveringOrg: "Roberto Colella, Albert W. Overhauser and Samuel A. Werner",
    heroImage: "/images/discoveries/1975/columbia-missouri-neutron-interference-earth-gravity.webp",
    imageAlt: "Original editorial diagram for Gravity changes the phase between two neutron routes. Different heights: change the gravitational contribution. Recombined waves: reveal a shift in the interference pattern.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1975/columbia-missouri-neutron-interference-earth-gravity.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Neutron waves following paths at different heights accumulated a measurable phase difference consistent with the effect of Earth’s gravity.",
    story: {
      whyThere: "Neutrons can travel along separate paths and recombine. Comparing the resulting intensity reveals differences in the accumulated wave phase.",
      howFound: "The experiment varied the orientation of the paths relative to gravity. The observed signal changed as expected from the changing gravitational contribution.",
      whatMakesUnique: "The measurement shows how gravity affects a quantum interference experiment. It tests the phase difference without tracing any neutron along one definite path.",
    },
    gallery: ["/images/discoveries/1975/columbia-missouri-neutron-interference-earth-gravity.webp"],
    primarySourceUrl: "https://doi.org/10.1103/PhysRevLett.34.1472",
    videoUrls: [],
    relatedSlugs: ["hatoyama-shielded-magnetic-flux-electron-phase-shift"],
    tags: ["neutron interference", "gravitational phase", "quantum research"],
  },
];
