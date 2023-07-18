/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
    serverActions: true,
  },
    images: {
        domains: ["lh3.googleusercontent.com"],
      },
}

module.exports = nextConfig
