import type { MetadataRoute } from "next";
import { getAll, getAvailableMonths, getByCategory, getByMonth } from "@/lib/discoveries";
import { categories } from "@/content/categories";
import { canonicalUrl, discoveryLastModified, monthSlug } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/ask",
    "/discoveries",
    "/timeline",
    "/depth",
    "/tree",
    "/categories",
    "/map",
    "/saved",
    "/about",
  ].map((path) => ({
    url: canonicalUrl(path),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((c) => ({
    url: canonicalUrl(`/categories/${c.slug}`),
    lastModified: getByCategory(c.slug).reduce(
      (latest, d) => (discoveryLastModified(d) > latest ? discoveryLastModified(d) : latest),
      "1970-01-01",
    ),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const discoveryRoutes: MetadataRoute.Sitemap = getAll().map((d) => ({
    url: canonicalUrl(`/discoveries/${d.slug}`),
    lastModified: discoveryLastModified(d),
    images: [d.heroImage.startsWith("http") ? d.heroImage : canonicalUrl(d.heroImage)],
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const monthRoutes: MetadataRoute.Sitemap = getAvailableMonths().map(({ year, month }) => {
    const discoveries = getByMonth(year, month);
    const lastModified = discoveries.reduce(
      (latest, d) => (discoveryLastModified(d) > latest ? discoveryLastModified(d) : latest),
      "1970-01-01",
    );
    return {
      url: canonicalUrl(`/discoveries/${year}/${monthSlug(month)}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...categoryRoutes, ...monthRoutes, ...discoveryRoutes];
}
