/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      { hostname: ['cmkwjiefdmjezdsgncpq.supabase.co', 'https://notionary.vercel.app/_next/static/media/cypresslogo.ab70973a.svg'] },
    ],
  },
};

module.exports = nextConfig;
