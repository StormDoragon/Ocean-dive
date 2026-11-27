import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 1986.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february1986Discoveries: Discovery[] = [
  {
    slug: "hatoyama-shielded-magnetic-flux-electron-phase-shift",
    "datePublished": "2026-11-27",
    title: "An Electron Interference Shift Persisted Around Shielded Magnetic Flux",
    categorySlug: "physics",
    subtopic: "Quantum research",
    year: 1986,
    dateDiscovered: "1986-02-24",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Hatoyama, Saitama (Hitachi research-team proxy)",
      lat: 35.985,
      lng: 139.334,
      country: "Japan",
    },
    discoveringOrg: "Akira Tonomura, Nobuyuki Osakabe and colleagues",
    heroImage: "/images/discoveries/1986/hatoyama-shielded-magnetic-flux-electron-phase-shift.webp",
    imageAlt: "Original editorial diagram for Electrons acquire a different phase around confined flux. Interference fringes: shift with the flux enclosed by the paths. Shielding: separates the flux from the electron paths.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1986/hatoyama-shielded-magnetic-flux-electron-phase-shift.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Electron interference changed when the paths surrounded magnetic flux confined by shielding, supporting the Aharonov–Bohm effect.",
    story: {
      whyThere: "An electron beam can be split and recombined to display an interference pattern. The pattern depends on the relative phase accumulated along its paths.",
      howFound: "The experiment enclosed magnetic flux so it stayed away from the paths used by the electron waves. The fringe displacement remained tied to the enclosed flux.",
      whatMakesUnique: "This supports a quantum phase effect even when the particles avoid the region with appreciable magnetic field. The measurement concerns interference rather than a classical deflection.",
    },
    gallery: ["/images/discoveries/1986/hatoyama-shielded-magnetic-flux-electron-phase-shift.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/10033287/",
    videoUrls: [],
    relatedSlugs: ["cambridge-shapiro-microwave-voltage-steps"],
    tags: ["electron interference", "Aharonov–Bohm effect", "quantum phase"],
  },
];
