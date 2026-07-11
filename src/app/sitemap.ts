import type { MetadataRoute } from "next";
import { getAll, getAvailableMonths, getByCategory, getByMonth } from "@/lib/discoveries";
import { categories } from "@/content/categories";
import { getAnnualDiscoveries, getLocations, getOrganizations, getSubtopics, getTags, getYears, slugify } from "@/lib/hubs";
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

  const archiveRoutes: MetadataRoute.Sitemap = getYears().flatMap((year) => {
    const all = getAnnualDiscoveries(year);
    const routes: MetadataRoute.Sitemap = [
      {
        url: canonicalUrl(`/scientific-discoveries-${year}`),
        lastModified: latestDate(all),
        changeFrequency: "yearly",
        priority: 0.7,
      },
    ];
    const newSpecies = all.filter((d) => d.subtopic.toLowerCase().includes("new species"));
    if (newSpecies.length > 0) {
      routes.push({
        url: canonicalUrl(`/new-species-discovered-${year}`),
        lastModified: latestDate(newSpecies),
        changeFrequency: "yearly",
        priority: 0.7,
      });
    }
    for (const category of categories) {
      const discoveries = getAnnualDiscoveries(year, category.slug);
      if (discoveries.length === 0) continue;
      routes.push({
        url: canonicalUrl(`/${category.slug}-discoveries-${year}`),
        lastModified: latestDate(discoveries),
        changeFrequency: "yearly",
        priority: 0.7,
      });
    }
    return routes;
  });

  const subtopicRoutes: MetadataRoute.Sitemap = categories.flatMap((category) =>
    getSubtopics(category.slug).map((subtopic) => ({
      url: canonicalUrl(`/${category.slug}/${subtopic.slug}`),
      lastModified: latestDate(subtopic.discoveries),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  );

  const organizationRoutes: MetadataRoute.Sitemap = [
    { url: canonicalUrl("/organizations"), changeFrequency: "monthly" as const, priority: 0.5 },
    ...getOrganizations().map((organization) => ({
      url: canonicalUrl(`/organizations/${organization.slug}`),
      lastModified: latestDate(organization.discoveries),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];

  const locationRoutes: MetadataRoute.Sitemap = [
    { url: canonicalUrl("/locations"), changeFrequency: "monthly" as const, priority: 0.5 },
    ...getLocations().map((location) => ({
      url: canonicalUrl(`/locations/${location.slug}`),
      lastModified: latestDate(location.discoveries),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];

  const tagRoutes: MetadataRoute.Sitemap = [
    { url: canonicalUrl("/tags"), changeFrequency: "monthly" as const, priority: 0.5 },
    ...getTags().map((tag) => ({
      url: canonicalUrl(`/tags/${tag.slug}`),
      lastModified: latestDate(tag.discoveries),
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
  ];

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...monthRoutes,
    ...archiveRoutes,
    ...subtopicRoutes,
    ...organizationRoutes,
    ...locationRoutes,
    ...tagRoutes,
    ...discoveryRoutes,
  ];
}

function latestDate(discoveries: Array<{ dateDiscovered: string; dateUpdated?: string }>): string {
  return discoveries.reduce(
    (latest, discovery) => {
      const date = discovery.dateUpdated ?? discovery.dateDiscovered;
      return date > latest ? date : latest;
    },
    "1970-01-01",
  );
}
