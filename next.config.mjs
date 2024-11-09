/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qqisvstqmwdxtvnqpecq.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/123/**",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
