import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'central.crestinfosystems.net',
        port: '',
        pathname: '/static/media/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'central.crestinfosystems.net',
        port: '',
        pathname: '/api/assets/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'tms.crestinfosystems.net',
        port: '',
        pathname: '/static/media/**',
        search: '',
      }
    ]
  }
};

export default nextConfig;
