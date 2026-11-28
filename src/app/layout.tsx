import type { Metadata } from "next";
import { Archivo, Martian_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Providers } from "@/components/account/Providers";
import { site } from "@/lib/site";
import { editorialTeam } from "@/content/editorial";
import { canonicalUrl, serializeJsonLd, siteUrl } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";

// Site voice: Archivo (variable weight + width — wide instances act as the
// display face) and Martian Mono for data labels: depths, dates, counts.
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  axes: ["wdth"],
  display: "swap",
});

const martianMono = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — A directory of scientific discovery`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  authors: [{ name: editorialTeam.name, url: editorialTeam.url }],
  applicationName: site.name,
  icons: { icon: { url: "/icon.svg?v=nucleon", type: "image/svg+xml", sizes: "any" } },
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
    <html lang="en" suppressHydrationWarning className={`${archivo.variable} ${martianMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        {/* Marks JS availability before first paint so scroll-reveal styles
            only hide content when the script that reveals it can run. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
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
