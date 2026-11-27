import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 1986.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july1986Discoveries: Discovery[] = [
  {
    slug: "greenbelt-voyager-2-uranus-tilted-magnetic-field",
    "datePublished": "2026-11-27",
    title: "Voyager 2 Found Uranus’s Magnetic Field Was Sharply Tilted",
    categorySlug: "space",
    subtopic: "Space missions",
    year: 1986,
    dateDiscovered: "1986-07-04",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "NASA Goddard Space Flight Center, Greenbelt (research-team proxy)",
      lat: 38.992,
      lng: -76.852,
      country: "United States",
    },
    discoveringOrg: "Norman F. Ness and the Voyager magnetometer team",
    heroImage: "/images/discoveries/1986/greenbelt-voyager-2-uranus-tilted-magnetic-field.webp",
    imageAlt: "Original editorial diagram for The magnetic and rotation axes are strongly misaligned. About 59°: tilt in the original field model. Magnetometer: collected measurements during the flyby.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1986/greenbelt-voyager-2-uranus-tilted-magnetic-field.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Voyager 2’s flyby measurements showed that Uranus’s magnetic field is strongly tilted relative to its rotation axis and substantially offset from the planet’s center.",
    story: {
      whyThere: "A spacecraft magnetometer records both the strength and direction of the local field. During the flyby those quantities changed as the spacecraft passed different regions.",
      howFound: "The team reconstructed a field whose main dipole was tilted by about 59 degrees relative to the spin axis. A centered dipole by itself did not describe the pattern.",
      whatMakesUnique: "The flyby provided direct measurements from one trajectory through the electromagnetic environment. The twisted geometry became a constraint on how the field might be generated.",
    },
    gallery: ["/images/discoveries/1986/greenbelt-voyager-2-uranus-tilted-magnetic-field.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/17812894/",
    videoUrls: [],
    relatedSlugs: ["laurel-messenger-mercury-offset-dipole"],
    tags: ["Voyager 2", "uranus", "planetary magnetism"],
  },
];
