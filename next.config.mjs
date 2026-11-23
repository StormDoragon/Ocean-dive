// Content-Security-Policy shipped in Report-Only mode first: it surfaces
// violations (in the browser console) without breaking the map tiles, the
// WebGL globe, or Next's inline hydration, so it can be tightened and then
// enforced once the reports are clean. Hosts mirror images.remotePatterns plus
// the OpenStreetMap detail tiles used by the Leaflet map.
const contentSecurityPolicy = [
  "default-src 'self'",
  "img-src 'self' data: https://upload.wikimedia.org https://home.cern https://www.asi.it https://tile.openstreetmap.org",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
  "font-src 'self' data:",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy-Report-Only", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "home.cern" },
      { protocol: "https", hostname: "www.asi.it" },
    ],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
