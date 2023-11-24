/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      { hostname: 'cmkwjiefdmjezdsgncpq.supabase.co',  },
    ],
  },
};

module.exports = nextConfig;
