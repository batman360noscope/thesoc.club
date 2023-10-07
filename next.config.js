// @ts-check
/** Configure webpack setup */
const path = require("path");


/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    env: {
        NETLIFY: process.env.NETLIFY || "false",
        BRANCH: process.env.BRANCH || "main",
        PULL_REQUEST: process.env.PULL_REQUEST || "false",
        URL: process.env.DEPLOY_URL || process.env.URL || "https://thesoc.club/",
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "app")]
    },
};

module.exports = nextConfig;
