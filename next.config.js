/** @type {import('next').NextConfig} */
const nextConfig = {
    // async redirects() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/dashboard',
    //             permanent: true,
    //         },
    //     ]
    // },
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
