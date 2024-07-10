/** @type {import('next').NextConfig} */
const staticBuild = process.env.STATIC_BUILD !== undefined;

let nextConfig;
if (staticBuild) {
    nextConfig = {
        output: 'export',
        images: {
            unoptimized: true,
        },
        trailingSlash: true,
    };
}
else {
    nextConfig = {
        images: {
            remotePatterns: [
                {
                    hostname: "imgs.xkcd.com"
                }
            ]
        },
        trailingSlash: true,
    };
}

export default nextConfig;
