import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(process.cwd()),
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.pocketsam.com" }],
        destination: "https://pocketsam.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
