import { readBrandMark } from "@/lib/social-mark";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Route segment config
export const alt = `${site.name} — A directory of scientific discovery`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Site-wide social card. Rendered to a real PNG at build time so Facebook,
 * LinkedIn, and X/Twitter — none of which render SVG OpenGraph images — show a
 * preview when a link is shared. Applies to every route that doesn't define its
 * own OpenGraph image.
 */
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0c1326 0%, #03040a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "28px",
            fontWeight: 600,
            color: "#38e1ff",
            letterSpacing: "0.08em",
          }}
        >
          <img src={await readBrandMark()} width={64} height={64} alt="" />
          {site.name}
        </div>
        <div
          style={{
            marginTop: "28px",
            fontSize: "88px",
            fontWeight: 800,
            lineHeight: 1.05,
            color: "#e2e8f0",
            maxWidth: "900px",
          }}
        >
          An atlas of scientific discovery
        </div>
        <div
          style={{
            marginTop: "28px",
            fontSize: "34px",
            color: "#94a3b8",
          }}
        >
          Explore discoveries by place, year, and field.
        </div>
      </div>
    ),
    size,
  );
}
