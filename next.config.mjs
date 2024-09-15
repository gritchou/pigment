/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...config.externals, /jest/];
    }
    return config;
  }
};

export default nextConfig;
