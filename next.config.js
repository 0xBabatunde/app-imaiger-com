/** @type {import('next').NextConfig} */
const nextConfig = {
    /*async redirects() {
        return [
            {
                source: '/',
                destination: '/signin',
                permanent: true,
            },
        ]
    },*/
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "replicate.com",
            },
            {
                protocol: "https",
                hostname: "replicate.delivery",
            },
        ],
        domains: ["images.unsplash.com", "lexica-serve-encoded-images.sharif.workers.dev"],
    }
}

module.exports = nextConfig
