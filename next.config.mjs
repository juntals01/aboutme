/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/public/contact-me",
        destination: "http://backend/api/public/contact-me",
      },
    ];
  },
};

export default nextConfig;
