/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bussinessscale.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'techbusinesslive.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'sentinelone.com',
                pathname: '/**',
            },
        ],
    },
    devIndicators: {
        buildActivity: false,
        appIsrStatus: false,
    },
};

export default nextConfig;
