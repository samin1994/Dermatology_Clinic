/** @type {import('next').NextConfig} */

const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        images: {
            allowFutureImage: true
        }
    },
    basePath: isGithubPages ? '/your-repo-name' : '',
    assetPrefix: isGithubPages ? '/your-repo-name/' : '',
    trailingSlash: true, // important for static exports
}

module.exports = nextConfig
