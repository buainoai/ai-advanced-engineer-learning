import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import GoogleAdScript from "@/components/AdSense/GoogleAdScript";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import AppLayout from "@/components/AppLayout";

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'HomePage' });

    return {
        title: `${t('title')} - ${t('subtitle')}`,
        description: t('description'),
        keywords: t('keywords').split(',').map(k => k.trim()),
    };
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`font-sans antialiased`}>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider defaultTheme="light">
                        <TooltipProvider>
                            <AppLayout>
                                {children}
                            </AppLayout>
                            <Toaster />
                        </TooltipProvider>
                    </ThemeProvider>
                </NextIntlClientProvider>
                <GoogleAnalytics />
                <GoogleAdScript />
            </body>
        </html>
    );
}
