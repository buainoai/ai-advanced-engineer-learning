import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

// 修改这里：不要直接传 routing，而是展开它并添加配置
export default createMiddleware({
    ...routing,             // 继承 routing 中的 locales 和 defaultLocale
    localeDetection: false  //在这里关闭自动语言探测和跳转
});

export const config = {
    // 这里保持不变，这是 Next.js 的配置
    matcher: ['/', '/(zh)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};