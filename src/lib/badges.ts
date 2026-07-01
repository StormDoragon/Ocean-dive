import type { Discovery } from "@/content/types";

export interface Badge {
  key: string;
  emoji: string;
  name: string;
  description: string;
  /** True once the user's saved set satisfies the badge. */
  earned: boolean;
  /** Progress 0–1 toward earning it. */
  progress: number;
}

/**
 * Badges are derived purely from the user's saved discoveries — no extra
 * storage needed. As the saved set grows and diversifies, badges unlock.
 */
export function computeBadges(saved: Discovery[]): Badge[] {
  const categories = new Set(saved.map((d) => d.categorySlug));
  const oceanCount = saved.filter((d) => d.categorySlug === "ocean").length;
  const decades = new Set(saved.map((d) => Math.floor(d.year / 10)));
  const deepest = Math.max(
    0,
    ...saved.map((d) => d.location.depthMeters ?? 0),
  );

  const badge = (
    key: string,
    emoji: string,
    name: string,
    description: string,
    have: number,
    need: number,
  ): Badge => ({
    key,
    emoji,
    name,
    description,
    earned: have >= need,
    progress: Math.min(1, need === 0 ? 1 : have / need),
  });

  return [
    badge("first-save", "⭐", "First Contact", "Save your first discovery.", saved.length, 1),
    badge("collector", "📚", "Collector", "Save 5 discoveries.", saved.length, 5),
    badge("ocean-explorer", "🌊", "Ocean Explorer", "Save 3 ocean discoveries.", oceanCount, 3),
    badge("deep-diver", "🔦", "Deep Diver", "Save a discovery below 4,000 m.", deepest >= 4000 ? 1 : 0, 1),
    badge("time-traveler", "📅", "Time Traveler", "Save finds from 3 different decades.", decades.size, 3),
    badge("polymath", "🧠", "Polymath", "Save discoveries from 5 different fields.", categories.size, 5),
  ];
}
