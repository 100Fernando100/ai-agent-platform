import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' https://assets.calendly.com https://calendly.com; object-src 'none';"
          }
        ]
      }
    ]
  }
};

export default nextConfig;
