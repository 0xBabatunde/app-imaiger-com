/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['dailyfollowers.co'],
  }
}

module.exports = nextConfig
