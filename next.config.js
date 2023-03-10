/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.midnightcookie.ca',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
