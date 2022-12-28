/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }
const nextConfig   = {
  assetPrefix: './',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig
