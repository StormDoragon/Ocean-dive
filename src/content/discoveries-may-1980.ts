import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 1980.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may1980Discoveries: Discovery[] = [
  {
    slug: "kawasaki-selectively-doped-heterojunction-electron-transistor",
    "datePublished": "2026-11-27",
    title: "A Gallium Arsenide Interface Provided a High-Mobility Transistor Channel",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 1980,
    dateDiscovered: "1980-05-01",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Fujitsu Laboratories, Kawasaki (research-team proxy)",
      lat: 35.58,
      lng: 139.64,
      country: "Japan",
    },
    discoveringOrg: "Takashi Mimura, Satoshi Hiyamizu, Toshio Fujii and Kazuo Nanbu",
    heroImage: "/images/discoveries/1980/kawasaki-selectively-doped-heterojunction-electron-transistor.webp",
    imageAlt: "Original editorial diagram for A junction separates mobile electrons from many dopants. Semiconductor interface: hosts the high-mobility channel. Gate voltage: controls the density of charge carriers.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1980/kawasaki-selectively-doped-heterojunction-electron-transistor.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A semiconductor junction separated a mobile electron channel from much of the charged dopant material, enabling a measured field-effect transistor with microwave capability.",
    story: {
      whyThere: "A junction between two semiconductor materials can confine mobile electrons near the interface. Selective doping supplies electrons from a neighboring layer.",
      howFound: "The researchers demonstrated electrical control of that high-mobility channel and characterized the fabricated transistor at high frequencies.",
      whatMakesUnique: "Separating the channel from many charged dopants reduces one source of scattering. The work provided a way to use a semiconductor interface as the active part of a transistor.",
    },
    gallery: [
      "/images/discoveries/1980/kawasaki-selectively-doped-heterojunction-electron-transistor.webp",
    ],
    primarySourceUrl: "https://doi.org/10.1143/JJAP.19.L225",
    videoUrls: [],
    relatedSlugs: ["berkeley-cmos-microprocessor-optical-communications"],
    tags: ["HEMT", "semiconductor interfaces", "microwave electronics"],
  },
];
