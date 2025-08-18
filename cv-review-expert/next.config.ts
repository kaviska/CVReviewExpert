import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ⚡ Ignores all ESLint checks during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ⚡ Ignores all TypeScript errors during build
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
