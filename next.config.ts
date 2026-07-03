import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.8.210",
        port: "9090",
        pathname: "/api/files/**",
      },
    ],
  },
};

export default nextConfig;
