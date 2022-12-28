/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }
const isProd = process.env.NODE_ENV === 'production'
const nextConfig   = {
  assetPrefix: isProd ? '/simon-cherel/' : './',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig
