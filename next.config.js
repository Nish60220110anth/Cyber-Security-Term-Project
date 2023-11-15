/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost'],
    },
    async redirects() {
        return [
        {
            source: '/api',
            destination: '/api/docs',
            permanent: true,
        },
        ]
    },
}

module.exports = nextConfig
