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
                hostname: "**",
                port: "",
                pathname: "**",
            },

        ],
    }
}

module.exports = nextConfig
