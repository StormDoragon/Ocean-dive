import type { Metadata } from "next";
import { CategoryCard } from "@/components/CategoryCard";
import { getCategoriesWithCounts } from "@/lib/discoveries";
import { canonicalUrl, itemListJsonLd, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Browse Beyond Signal by field of science: oceans, space, dinosaurs, biology, archaeology, earth science, physics, and technology.",
  alternates: { canonical: canonicalUrl("/categories") },
};

export default function CategoriesPage() {
  const categories = getCategoriesWithCounts();
  const jsonLd = {
    "@context": "https://schema.org",
    ...itemListJsonLd(
      "Science categories",
      categories.map((c) => ({ name: c.name, path: `/categories/${c.slug}` })),
    ),
  };
  return (
    <div className="container-page py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-white">Categories</h1>
        <p className="mt-2 max-w-2xl text-slate-400">
          Eight domains of discovery. Pick a field to dive in.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <CategoryCard key={c.slug} category={c} />
        ))}
      </div>
    </div>
  );
}
