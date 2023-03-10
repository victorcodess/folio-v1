/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  optimizeFonts: true,
  images: {
    domains: ["user-images.githubusercontent.com"],
  },
  fontLoaders: [
    {
      loader: "@next/font/google",
      options: {
        subsets: ["latin"],
        weight: ["400", "500", "600", "700", "800"],
      },
    },
  ],
};

module.exports = nextConfig;
