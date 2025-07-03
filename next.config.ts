import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "media.licdn.com" },
      {
        protocol: "https",
        hostname: "4ep09v5dco.ufs.sh",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
