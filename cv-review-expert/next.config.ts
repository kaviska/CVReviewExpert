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
  // Add cache control headers
  async headers() {
    return [
      {
        source: '/all-blog',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
      {
        source: '/blog/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
