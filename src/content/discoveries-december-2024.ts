import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during December 2024.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const december2024Discoveries: Discovery[] = [
  {
    slug: "willow-below-threshold-quantum-error-correction",
    datePublished: "2026-07-17",
    title: "Willow Demonstrates Below-Threshold Quantum Error Correction",
    categorySlug: "technology",
    subtopic: "Quantum computing",
    year: 2024,
    dateDiscovered: "2024-12-09",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-13",
    location: {
      name: "Google Quantum AI, Santa Barbara, California",
      lat: 34.42,
      lng: -119.7,
      country: "United States",
    },
    discoveringOrg: "Google Quantum AI",
    scientificName: "Willow quantum processor",
    classification: "Quantum information · Surface-code error correction",
    heroImage: "/images/discoveries/2024/willow-below-threshold-quantum-error-correction.webp",
    imageAlt: "Original editorial quantum-circuit diagram showing a surface-code lattice growing from distance three to seven while the logical error rate decreases.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Google's Willow processor demonstrated below-threshold surface-code error correction: as researchers increased the size of encoded logical qubits, the logical error rate fell rather than rose. The experiment was an important scaling result for fault-tolerant quantum computing, although it did not produce a general-purpose error-corrected computer.",
    story: {
      whyThere: "Quantum information is fragile because interactions, imperfect gates, and measurement noise introduce errors faster than most useful algorithms can tolerate. Surface codes spread one logical qubit across many physical qubits, but they help only when component error rates fall below a demanding threshold.",
      howFound: "Researchers built progressively larger distance-3, distance-5, and distance-7 surface-code memories on Willow. Repeated syndrome measurements tracked errors without directly measuring the stored logical state, while decoding software inferred corrections from the pattern of detection events.",
      whatMakesUnique: "Logical errors were suppressed as code distance grew, a central prediction of quantum-error-correction theory. The achievement shifts the challenge toward maintaining the effect for longer computations, faster operations, more logical qubits, and realistic algorithms.",
    },
    gallery: ["/images/discoveries/2024/willow-below-threshold-quantum-error-correction.webp"],
    paperUrl: "https://www.nature.com/articles/s41586-024-08449-y",
    videoUrls: [],
    relatedSlugs: ["national-ignition-facility-fusion-ignition", "twa-7-b-direct-imaging"],
    tags: ["willow", "quantum computing", "error correction", "surface code", "logical qubit"],
  },
];
