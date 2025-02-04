import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wpdwdwndivqxifrnsvjy.supabase.co',
                port: '',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
                port: '',
                search: '',
            },
        ],
    }
};

export default nextConfig;
