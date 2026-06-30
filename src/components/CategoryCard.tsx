import Link from "next/link";
import type { CategoryWithCount } from "@/lib/discoveries";

export function CategoryCard({ category }: { category: CategoryWithCount }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="card group relative flex flex-col gap-3 overflow-hidden p-5 transition-transform hover:-translate-y-1"
      style={{ boxShadow: `inset 0 -2px 0 0 ${category.color}33` }}
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
        style={{ backgroundColor: category.color }}
      />
      <div className="flex items-center justify-between">
        <span className="text-3xl">{category.emoji}</span>
        <span className="pill">{category.count} entries</span>
      </div>
      <div>
        <h3 className="font-semibold text-white group-hover:text-signal">{category.name}</h3>
        <p className="mt-1 text-sm text-slate-400 line-clamp-2">{category.description}</p>
      </div>
      <div className="mt-1 flex flex-wrap gap-1.5">
        {category.subtopics.slice(0, 3).map((s) => (
          <span key={s} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-slate-400">
            {s}
          </span>
        ))}
      </div>
    </Link>
  );
}
