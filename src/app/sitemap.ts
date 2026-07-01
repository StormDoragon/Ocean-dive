import type { MetadataRoute } from "next";
import { getAll } from "@/lib/discoveries";
import { categories } from "@/content/categories";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/ask",
    "/discoveries",
    "/timeline",
    "/categories",
    "/map",
    "/about",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${base}/categories/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const discoveryRoutes: MetadataRoute.Sitemap = getAll().map((d) => ({
    url: `${base}/discoveries/${d.slug}`,
    lastModified: new Date(d.dateDiscovered),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...discoveryRoutes];
}
