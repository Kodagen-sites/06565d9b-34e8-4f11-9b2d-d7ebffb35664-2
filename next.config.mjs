/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: false,
  experimental: {
    optimizePackageImports: []
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" }
    ]
  }
};
