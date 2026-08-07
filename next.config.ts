import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-42c186788f78404eb758f44ecccbc21f.r2.dev",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
