/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  assetPrefix: process.env.GH_PAGES ? "/docsql/" : "",
};

module.exports = nextConfig;
