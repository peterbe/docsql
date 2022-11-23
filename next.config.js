/** @type {import('next').NextConfig} */

let assetPrefix = undefined;
let trailingSlash = false;
if (process.env.GH_PAGES_PREFIX) {
  console.warn("Building for GitHub Pages specifically");
  assetPrefix = process.env.GH_PAGES_PREFIX + "/";
  trailingSlash = true;
}

const nextConfig = {
  reactStrictMode: true,

  trailingSlash,
  assetPrefix,
};

module.exports = nextConfig;
