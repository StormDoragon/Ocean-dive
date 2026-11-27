import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 2020.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february2020Discoveries: Discovery[] = [
  {
    slug: "beijing-yutu-2-lunar-farside-radar-shallow-ejecta-layers",
    "datePublished": "2026-11-27",
    title: "Yutu-2 radar traced layers beneath the Moon's farside",
    categorySlug: "space",
    subtopic: "Space missions",
    year: 2020,
    dateDiscovered: "2020-02-26",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "National Astronomical Observatories, Beijing (Chang’e-4 research-team map proxy)",
      lat: 40.004,
      lng: 116.381,
      country: "China",
    },
    discoveringOrg: "Chunlai Li and the Chang'e-4 lunar radar team",
    heroImage: "/images/discoveries/2020/beijing-yutu-2-lunar-farside-radar-shallow-ejecta-layers.webp",
    imageAlt: "Original editorial diagram for Tracing the material below Von Kármán crater. Yutu-2 radar: measured subsurface reflections. Upper tens of metres: local structure inferred.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2020/beijing-yutu-2-lunar-farside-radar-shallow-ejecta-layers.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Radar from Yutu-2 revealed contrasting material beneath the surface near its landing site in the Moon's Von Kármán crater.",
    story: {
      whyThere: "Yutu-2's radar listened for echoes as the rover moved across the floor of Von Kármán crater. The strength and timing of reflections changed with the properties of the material below.",
      howFound: "The team resolved shallow contrasts consistent with porous granular material, with blocks of different sizes embedded below. It interpreted the radar structure as products of past impacts and regolith development.",
      whatMakesUnique: "The measurements opened a local window into the upper tens of metres of the farside. The materials and their history were inferred from the radar and would benefit from independent ground truth.",
    },
    gallery: [
      "/images/discoveries/2020/beijing-yutu-2-lunar-farside-radar-shallow-ejecta-layers.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/32133404/",
    videoUrls: [],
    relatedSlugs: ["pasadena-insight-s1222a-largest-marsquake-tectonic-origin"],
    tags: ["moon", "lunar geology", "ground-penetrating radar"],
  },
];
