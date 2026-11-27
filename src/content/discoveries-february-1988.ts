import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 1988.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february1988Discoveries: Discovery[] = [
  {
    slug: "la-silla-abell-370-giant-arc-background-redshift",
    "datePublished": "2026-11-27",
    title: "The Spectrum of Abell 370’s Giant Arc Showed It Came From Behind the Cluster",
    categorySlug: "space",
    subtopic: "Galaxies",
    year: 1988,
    dateDiscovered: "1988-02-01",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "ESO La Silla Observatory (observing-site proxy)",
      lat: -29.2567,
      lng: -70.7346,
      country: "Chile",
    },
    discoveringOrg: "Geneviève Soucail, Yannick Mellier, Bernard Fort and colleagues",
    heroImage: "/images/discoveries/1988/la-silla-abell-370-giant-arc-background-redshift.webp",
    imageAlt: "Original editorial diagram for The arc and the cluster have different redshifts. 0.724: measured redshift of the background arc. 0.374: approximate redshift of Abell 370.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1988/la-silla-abell-370-giant-arc-background-redshift.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Spectroscopy measured a redshift of about 0.724 for the arc, greater than the cluster’s roughly 0.374. Its light therefore came from a more distant galaxy.",
    story: {
      whyThere: "Images showed a long arc close to bright cluster galaxies. Its shape alone could not show whether it lay inside or behind the cluster.",
      howFound: "A spectrum showed recognizable features displaced by a larger amount than those of cluster members. This placed the source behind the intervening mass.",
      whatMakesUnique: "The distance comparison supported the explanation that the cluster’s gravity distorted the image. It helped establish galaxy clusters as natural lenses.",
    },
    gallery: ["/images/discoveries/1988/la-silla-abell-370-giant-arc-background-redshift.webp"],
    primarySourceUrl: "https://ui.adsabs.harvard.edu/abs/1988A%26A...191L..19S/abstract",
    videoUrls: [],
    relatedSlugs: ["paranal-sgr-a-s2-stellar-orbit-compact-mass"],
    tags: ["gravitational lensing", "galaxy clusters", "spectroscopic redshift"],
  },
];
