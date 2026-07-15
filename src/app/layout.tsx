import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Providers } from "@/components/account/Providers";
import { site } from "@/lib/site";
import { editorialTeam } from "@/content/editorial";
import { canonicalUrl, serializeJsonLd, siteUrl } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — A directory of scientific discovery`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  authors: [{ name: editorialTeam.name, url: editorialTeam.url }],
  applicationName: site.name,
  icons: { icon: "/icon.svg" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — A directory of scientific discovery`,
    description: site.description,
    // Social card image is supplied by app/opengraph-image.tsx (generated PNG).
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — A directory of scientific discovery`,
    description: site.description,
    // Social card image is supplied by app/twitter-image.tsx (generated PNG).
  },
  alternates: { canonical: canonicalUrl("/") },
  // Search-engine ownership verification (Workstream 4). Set the tokens in the
  // environment to emit the meta tags; unset, nothing is rendered.
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } }
      : {}),
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: site.name,
      url: siteUrl,
      logo: { "@type": "ImageObject", url: canonicalUrl("/icon.svg") },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: site.name,
      url: siteUrl,
      description: site.description,
      publisher: { "@id": `${siteUrl}#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(siteJsonLd) }}
        />
        <Providers>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
