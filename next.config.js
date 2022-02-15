/** @type {import('next').NextConfig} */

if (process.env.GH_PAGES_PREFIX) {
  console.warn("Building for gh-pages so different asset prefix");
}

const nextConfig = {
  reactStrictMode: true,

  assetPrefix: process.env.GH_PAGES_PREFIX
    ? process.env.GH_PAGES_PREFIX + "/"
    : "",
};

module.exports = nextConfig;
