import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'https',
        hostname: 'whisestorageprod.blob.core.windows.net',
      },
      {
        protocol: 'https',
        hostname: 'r2.storagewhise.eu',
      },
    ],
  },
  allowedDevOrigins: ['*'],
};

export default nextConfig;
