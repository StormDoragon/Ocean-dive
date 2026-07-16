import type { Category, CategorySlug } from "./types";

export const categories: Category[] = [
  {
    slug: "ocean",
    name: "Ocean Discoveries",
    emoji: "🪸",
    tagline: "Into the deep",
    description:
      "New species, deep-sea expeditions, coral reefs, hydrothermal vents, shipwrecks, and the mysteries still hiding beneath the waves.",
    subtopics: [
      "New species",
      "Deep-sea expeditions",
      "Coral reefs",
      "Hydrothermal vents",
      "Shipwrecks",
      "Ocean mysteries",
    ],
    color: "#22d3ee",
  },
  {
    slug: "space",
    name: "Space",
    emoji: "🌌",
    tagline: "Beyond the sky",
    description:
      "Exoplanets, black holes, nebulae, galaxies, asteroids, and the missions reaching deeper into the cosmos.",
    subtopics: [
      "Exoplanets",
      "Black holes",
      "Nebulae",
      "Galaxies",
      "Asteroids",
      "Comets",
      "Space missions",
      "Solar physics",
      "Planetary defense",
    ],
    color: "#a78bfa",
  },
  {
    slug: "dinosaurs-fossils",
    name: "Dinosaurs & Fossils",
    emoji: "🦕",
    tagline: "Deep time",
    description:
      "New dinosaur species, ancient mammals, fossil discoveries, and the evolving timeline of life on Earth.",
    subtopics: [
      "New dinosaur species",
      "Ancient mammals",
      "Fossil discoveries",
      "Fossil reinterpretation",
      "Evolution timeline",
    ],
    color: "#f59e0b",
  },
  {
    slug: "biology",
    name: "Biology",
    emoji: "🧬",
    tagline: "The living world",
    description:
      "New species, genetics, human evolution, and the microbial life that shapes every ecosystem.",
    subtopics: [
      "New species",
      "Genetics",
      "Human evolution",
      "Microbiology",
      "Neuroscience",
      "Origins of life",
    ],
    color: "#34d399",
  },
  {
    slug: "archaeology",
    name: "Archaeology",
    emoji: "🏺",
    tagline: "Echoes of the past",
    description:
      "Lost cities, ancient civilizations, tomb discoveries, and the artifacts that rewrite human history.",
    subtopics: [
      "Lost cities",
      "Ancient civilizations",
      "Tomb discoveries",
      "Artifacts",
      "Human origins",
    ],
    color: "#e879a6",
  },
  {
    slug: "earth-science",
    name: "Earth Science",
    emoji: "🌋",
    tagline: "A restless planet",
    description:
      "Volcanoes, earthquakes, ice cores, and the climate records locked in stone and ice.",
    subtopics: ["Volcanoes", "Earthquakes", "Ice cores", "Climate records"],
    color: "#fb7185",
  },
  {
    slug: "physics",
    name: "Physics",
    emoji: "⚛️",
    tagline: "The rules of reality",
    description:
      "Quantum research, particle discoveries, dark matter, and the race toward fusion energy.",
    subtopics: [
      "Quantum research",
      "Particle discoveries",
      "Dark matter",
      "Fusion energy",
    ],
    color: "#60a5fa",
  },
  {
    slug: "technology",
    name: "Technology",
    emoji: "🤖",
    tagline: "What we build next",
    description:
      "AI, robotics, biotechnology, imaging, quantum computing, and the materials science powering the next era.",
    subtopics: [
      "AI",
      "Robotics",
      "Biotechnology",
      "Imaging",
      "Quantum computing",
      "Materials science",
    ],
    color: "#c084fc",
  },
];

const categoryBySlug = new Map<CategorySlug, Category>(
  categories.map((c) => [c.slug, c]),
);

export function getCategory(slug: CategorySlug): Category | undefined {
  return categoryBySlug.get(slug);
}

export function getCategoryColor(slug: CategorySlug): string {
  return categoryBySlug.get(slug)?.color ?? "#38e1ff";
}
