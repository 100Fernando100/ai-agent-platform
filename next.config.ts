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
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdnjs.cloudflare.com https://assets.calendly.com https://calendly.com;
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https:;
              font-src 'self' data:;
              connect-src 'self' https:;
              frame-src 'self' https://calendly.com;
              object-src 'none';
            `.replace(/\s{2,}/g, ' ').trim()
          }
        ]
      }
    ]
  }
};

export default nextConfig;