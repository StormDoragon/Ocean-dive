import { readBrandMark } from "@/lib/social-mark";
import { ImageResponse } from "next/og";
import { getAll, getBySlug } from "@/lib/discoveries";
import { getCategory } from "@/content/categories";
import { site } from "@/lib/site";

export const alt = `Discovery from ${site.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAll().map((d) => ({ slug: d.slug }));
}

/**
 * Try to inline the real hero photo as a data URI so the generated social card
 * can use it as a background. Returns null for placeholder art, on any network
 * error, or on timeout — the card then falls back to the brand gradient, so a
 * build never breaks on a slow or blocked image host. The photo is embedded
 * only where the build environment has egress to the image host (e.g. Vercel);
 * otherwise every card is the branded gradient, which is a fine default.
 *
 * Satori (the engine behind `next/og`) can only decode PNG, JPEG, and GIF.
 * Handing it a WebP/AVIF/SVG throws mid-render ("is not iterable") and takes
 * the whole build down, so we only embed formats it understands and fall back
 * to the gradient for everything else.
 */
const SATORI_IMAGE_TYPES = ["image/png", "image/jpeg", "image/gif"];

async function loadHero(heroImage: string): Promise<string | null> {
  if (!/^https?:\/\//i.test(heroImage)) return null;
  // Skip formats satori can't decode before we even fetch them.
  if (/\.(webp|avif|svg)(\?|#|$)/i.test(heroImage)) return null;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(heroImage, {
      signal: controller.signal,
      // A descriptive UA keeps sources like Wikimedia from throttling us.
      headers: {
        "User-Agent": `${site.name} social-card generator (+${site.url})`,
      },
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    const type = (res.headers.get("content-type") ?? "image/jpeg")
      .split(";")[0]
      .trim()
      .toLowerCase();
    // Only embed formats satori can decode; anything else falls back to the
    // gradient rather than crashing the build.
    if (!SATORI_IMAGE_TYPES.includes(type)) return null;
    const base64 = Buffer.from(await res.arrayBuffer()).toString("base64");
    return `data:${type};base64,${base64}`;
  } catch {
    return null;
  }
}

export default async function DiscoveryOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const discovery = getBySlug(slug);

  // Unknown slug — render the plain brand card rather than throwing.
  const category = discovery ? getCategory(discovery.categorySlug) : undefined;
  const accent = category?.color ?? "#38e1ff";
  const heroDataUri = discovery ? await loadHero(discovery.heroImage) : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px",
          background: "linear-gradient(135deg, #0c1326 0%, #03040a 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {heroDataUri ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={heroDataUri}
            alt=""
            width={1200}
            height={630}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : null}
        {/* Legibility scrim: darker at the bottom where the text sits. */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(3,4,10,0.35) 0%, rgba(3,4,10,0.75) 60%, rgba(3,4,10,0.95) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: "26px",
            fontWeight: 600,
            color: accent,
            letterSpacing: "0.04em",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              background: accent,
              boxShadow: `0 0 20px ${accent}`,
            }}
          />
          {category ? `${category.name}` : site.name}
          {discovery ? (
            <span style={{ color: "#94a3b8", fontWeight: 500 }}>
              · {discovery.year}
            </span>
          ) : null}
        </div>
        <div
          style={{
            position: "relative",
            marginTop: "20px",
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.08,
            color: "#f1f5f9",
            maxWidth: "1000px",
            // Clamp very long titles so the card never overflows.
            display: "flex",
          }}
        >
          {discovery?.title ?? "Discovery not found"}
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "24px",
            fontSize: "26px",
            color: "#94a3b8",
          }}
        >
          <img src={await readBrandMark()} width={38} height={38} alt="" />
          {site.name}
        </div>
      </div>
    ),
    size,
  );
}
