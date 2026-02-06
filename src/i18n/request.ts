import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale;
    }

    try {
        const homePage = (await import(`../../messages/${locale}/HomePage.json`)).default;
        const common = (await import(`../../messages/${locale}/Common.json`)).default;

        return {
            locale,
            messages: {
                HomePage: homePage,
                Common: common,
            }
        };
    } catch (error) {
        console.error("Failed to load messages:", error);
        return {
            locale,
            messages: {}
        };
    }
});
