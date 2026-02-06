import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable react strict mode
    reactStrictMode: true,
};

export default withNextIntl(nextConfig);
