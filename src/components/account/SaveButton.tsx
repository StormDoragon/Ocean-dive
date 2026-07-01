"use client";

import { useSaved } from "./SavedProvider";

export function SaveButton({
  slug,
  className = "",
}: {
  slug: string;
  className?: string;
}) {
  const { isSaved, toggle } = useSaved();
  const saved = isSaved(slug);

  return (
    <button
      type="button"
      onClick={() => toggle(slug)}
      aria-pressed={saved}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        saved
          ? "border-signal/50 bg-signal/15 text-signal"
          : "border-white/15 text-slate-200 hover:border-signal/40 hover:text-white"
      } ${className}`}
    >
      <span aria-hidden>{saved ? "★" : "☆"}</span>
      {saved ? "Saved" : "Save"}
    </button>
  );
}
