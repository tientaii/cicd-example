/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // 👈 BẮT BUỘC
    images: {
        unoptimized: true, // 👈 Pages không support Image Optimization
    },
};

module.exports = nextConfig;
