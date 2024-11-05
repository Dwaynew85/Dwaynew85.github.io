/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Necessary for Next.js static export
  },
};

export default nextConfig;
