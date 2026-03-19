import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.maxhpprod.com" }],
        destination: "https://maxhpprod.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
