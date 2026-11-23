import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/content/blog";
import { categories } from "@/content/categories";
import { getByCategory } from "@/lib/discoveries";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Browse The Nucleon’s scientific discoveries by field, explore the atlas, and find every discovery guide.",
  alternates: { canonical: canonicalUrl("/sitemap") },
};

const sections = [
  ["/", "Home"], ["/discoveries", "All discoveries"], ["/discovery", "Discovery hub"],
  ["/map", "Discovery map"], ["/timeline", "Timeline"], ["/depth", "Ocean depth explorer"],
  ["/tree", "Tree of life"], ["/ask", "Ask the atlas"], ["/categories", "Categories"],
  ["/locations", "Locations"], ["/organizations", "Research teams"], ["/tags", "Tags"],
  ["/about", "About The Nucleon"], ["/sources", "Sources"], ["/methodology", "Methodology"],
  ["/editorial-standards", "Editorial standards"], ["/corrections", "Corrections"],
];

export default function SitemapPage() {
  const guides = getAllBlogPosts();
  return (
    <div className="container-page space-y-10 py-12">
      <header>
        <h1 className="text-4xl font-bold text-white">Sitemap</h1>
        <a href="/sitemap.xml" className="link-glow mt-3 inline-block">View XML sitemap</a>
      </header>
      <nav aria-labelledby="site-sections">
        <h2 id="site-sections" className="text-2xl font-semibold text-white">Explore the atlas</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map(([href, label]) => <li key={href}><Link href={href} className="link-glow">{label}</Link></li>)}
        </ul>
      </nav>
      <section>
        <h2 className="text-2xl font-semibold text-white">Discoveries by field</h2>
        <div className="mt-4 divide-y divide-white/10">
          {categories.map((category) => {
            const entries = getByCategory(category.slug);
            return (
              <details key={category.slug} className="py-1">
                <summary className="cursor-pointer py-3 font-semibold text-white">
                  {category.name} <span className="ml-1 font-normal text-slate-400">({entries.length})</span>
                </summary>
                <Link href={`/categories/${category.slug}`} className="link-glow">Browse {category.name}</Link>
                <ul className="my-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {entries.map((entry) => (
                    <li key={entry.slug}><Link href={`/discoveries/${entry.slug}`} prefetch={false} className="link-glow">{entry.title}</Link></li>
                  ))}
                </ul>
              </details>
            );
          })}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-white">Discovery guides</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {guides.map((guide) => (
            <li key={guide.slug}><Link href={`/discovery/${guide.slug}`} className="link-glow">{guide.title}</Link></li>
          ))}
        </ul>
      </section>
    </div>
  );
}
