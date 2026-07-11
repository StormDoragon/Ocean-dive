import { discoveries } from "@/content/catalog";
import type { Discovery } from "@/content/types";

export interface DepthZone {
  key: string;
  name: string;
  scientific: string;
  /** Inclusive lower bound (m) and exclusive upper bound (m). */
  min: number;
  max: number;
  blurb: string;
  /** Background color representing this depth. */
  color: string;
}

/** Ocean depth zones, surface → trench. `max` of the last is the Challenger Deep. */
export const DEPTH_ZONES: DepthZone[] = [
  {
    key: "sunlight",
    name: "Sunlight Zone",
    scientific: "Epipelagic · 0–200 m",
    min: 0,
    max: 200,
    blurb:
      "Sunlit surface waters where photosynthesis is possible and most familiar marine life thrives.",
    color: "#1fb6d6",
  },
  {
    key: "twilight",
    name: "Twilight Zone",
    scientific: "Mesopelagic · 200–1,000 m",
    min: 200,
    max: 1000,
    blurb:
      "A dim world of faint blue light where bioluminescence takes over and strange hunters roam.",
    color: "#1668a0",
  },
  {
    key: "midnight",
    name: "Midnight Zone",
    scientific: "Bathypelagic · 1,000–4,000 m",
    min: 1000,
    max: 4000,
    blurb:
      "Perpetual darkness under crushing pressure — home to vents, whale falls, and life without sunlight.",
    color: "#0e2f56",
  },
  {
    key: "abyss",
    name: "The Abyss",
    scientific: "Abyssopelagic · 4,000–6,000 m",
    min: 4000,
    max: 6000,
    blurb:
      "Near-freezing, pitch-black plains covering much of the deep seafloor, sparsely populated and barely explored.",
    color: "#0a1c38",
  },
  {
    key: "hadal",
    name: "The Trenches",
    scientific: "Hadal · 6,000–11,034 m",
    min: 6000,
    max: 11034,
    blurb:
      "The deepest ocean trenches, where pressure is over 800 atmospheres and only the most specialised life survives.",
    color: "#050f1f",
  },
];

export interface ZoneWithDiscoveries extends DepthZone {
  discoveries: Discovery[];
}

/** Ocean discoveries that have a recorded depth, grouped into depth zones. */
export function getDepthZones(): ZoneWithDiscoveries[] {
  const withDepth = discoveries.filter(
    (d) => d.categorySlug === "ocean" && d.location.depthMeters != null,
  );

  return DEPTH_ZONES.map((zone) => ({
    ...zone,
    discoveries: withDepth
      .filter((d) => {
        const depth = d.location.depthMeters as number;
        return depth >= zone.min && depth < zone.max;
      })
      .sort(
        (a, b) =>
          (a.location.depthMeters as number) - (b.location.depthMeters as number),
      ),
  }));
}

/** The single deepest ocean discovery on record, for the page summary. */
export function getDeepestDiscovery(): Discovery | undefined {
  return discoveries
    .filter((d) => d.location.depthMeters != null)
    .sort(
      (a, b) =>
        (b.location.depthMeters as number) - (a.location.depthMeters as number),
    )[0];
}
