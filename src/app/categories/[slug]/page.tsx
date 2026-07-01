import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DiscoveryCard } from "@/components/DiscoveryCard";
import { categories, getCategory } from "@/content/categories";
import { getByCategory } from "@/lib/discoveries";
import type { CategorySlug } from "@/content/types";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug as CategorySlug);
  if (!category) return { title: "Category not found" };
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug as CategorySlug);
  if (!category) notFound();

  const discoveries = getByCategory(category.slug);

  return (
    <div className="container-page py-10">
      <nav className="text-sm text-slate-400">
        <Link href="/categories" className="hover:text-white">Categories</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-300">{category.name}</span>
      </nav>

      <header
        className="mt-4 overflow-hidden rounded-2xl border border-white/10 p-8"
        style={{
          background: `linear-gradient(135deg, ${category.color}22, transparent)`,
        }}
      >
        <div className="text-5xl">{category.emoji}</div>
        <h1 className="mt-3 text-3xl font-bold text-white">{category.name}</h1>
        <p className="mt-2 max-w-2xl text-slate-300">{category.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {category.subtopics.map((s) => (
            <span key={s} className="pill">{s}</span>
          ))}
        </div>
        {category.slug === "ocean" ? (
          <Link
            href="/depth"
            className="mt-5 inline-flex rounded-full border border-signal/40 bg-signal/10 px-4 py-2 text-sm font-semibold text-signal transition-colors hover:bg-signal/20"
          >
            🌊 Explore these by depth →
          </Link>
        ) : null}
      </header>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-white">
          {discoveries.length} {discoveries.length === 1 ? "discovery" : "discoveries"}
        </h2>
        {discoveries.length === 0 ? (
          <p className="mt-3 text-slate-400">
            No discoveries catalogued here yet — check back soon.
          </p>
        ) : (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {discoveries.map((d) => (
              <DiscoveryCard key={d.slug} discovery={d} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
