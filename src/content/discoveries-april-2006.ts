import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during April 2006.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const april2006Discoveries: Discovery[] = [
  {
    slug: "atlanta-zinc-oxide-nanowire-piezoelectric-electricity",
    "datePublished": "2026-11-27",
    title: "Bending Zinc Oxide Nanowires Produces Electrical Output",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 2006,
    dateDiscovered: "2006-04-14",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Georgia Institute of Technology, Atlanta (research-team proxy)",
      lat: 33.776,
      lng: -84.396,
      country: "United States",
    },
    discoveringOrg: "Zhong Lin Wang and Jinhui Song",
    heroImage: "/images/discoveries/2006/atlanta-zinc-oxide-nanowire-piezoelectric-electricity.webp",
    imageAlt: "Original editorial diagram for Mechanical bending produces electrical pulses. Zinc oxide: material in the nanowires. Microscope tip: bends each wire in the test.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2006/atlanta-zinc-oxide-nanowire-piezoelectric-electricity.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Bending individual wires within an array of zinc oxide nanowires produced measurable electrical pulses in a microscope experiment.",
    story: {
      whyThere: "The researchers used a conducting microscope tip to deflect aligned zinc oxide nanowires. Bending moved electrical charge because of the material’s piezoelectric response.",
      howFound: "The contact between a wire and the tip helped direct the resulting current. The test gave a way to detect electrical output from deformation on very small scales.",
      whatMakesUnique: "The researchers proposed harvesting energy for tiny devices. The experiment measured output under the microscope’s controlled mechanical contact.",
    },
    gallery: ["/images/discoveries/2006/atlanta-zinc-oxide-nanowire-piezoelectric-electricity.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/16614215/",
    videoUrls: [],
    relatedSlugs: ["evanston-lead-telluride-multiscale-thermoelectric"],
    tags: ["piezoelectricity", "nanowires", "energy harvesting"],
  },
];
