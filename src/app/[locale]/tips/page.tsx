import Tips from '@/components/pages/Tips';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "实用技巧 - AI高级工程师成长路线",
    description: "AI工程化落地常见技巧与最佳实践",
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <Tips />;
}
