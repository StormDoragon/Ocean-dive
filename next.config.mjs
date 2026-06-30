/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // v1 ships local SVG placeholders, so no remote loader is required.
    // To use real photos later, add remote hosts here, e.g.:
    // remotePatterns: [{ protocol: "https", hostname: "upload.wikimedia.org" }],
    remotePatterns: [],
  },
};

export default nextConfig;
