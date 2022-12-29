/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }
const nextConfig   = {
  experimental: {
    css: false,
  },
  images: {
    
    unoptimized: true,
  },
}

module.exports = nextConfig
