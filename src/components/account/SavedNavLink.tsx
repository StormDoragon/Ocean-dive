"use client";

import Link from "next/link";
import { useSaved } from "./SavedProvider";

export function SavedNavLink() {
  const { saved } = useSaved();
  const count = saved.size;

  return (
    <Link
      href="/saved"
      className="relative inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-sm text-slate-200 transition-colors hover:border-signal/40 hover:text-white"
      aria-label={`Saved discoveries (${count})`}
    >
      <span aria-hidden>★</span>
      <span className="hidden sm:inline">Saved</span>
      {count > 0 ? (
        <span className="ml-0.5 rounded-full bg-signal px-1.5 text-xs font-semibold text-abyss-950">
          {count}
        </span>
      ) : null}
    </Link>
  );
}
