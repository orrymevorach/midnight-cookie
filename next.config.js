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
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'downloads.ctfassets.net',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
