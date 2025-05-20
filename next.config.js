/** @type {import('next').NextConfig} */

const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        images: {
            allowFutureImage: true
        }
    },
    basePath: isGithubPages ? '/Dermatology_Clinic' : '',
    assetPrefix: isGithubPages ? '/Dermatology_Clinic/' : '',
    trailingSlash: true, // important for static exports
}

module.exports = nextConfig
