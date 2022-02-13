/** @type {import('next').NextConfig} */

if (process.env.GH_PAGES) {
  console.warn("Building for gh-pages so different asset prefix");
}

const nextConfig = {
  reactStrictMode: true,

  assetPrefix: process.env.GH_PAGES ? "/docsql/" : "",
};

module.exports = nextConfig;
