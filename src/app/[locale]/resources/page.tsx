import Resources from '@/components/pages/Resources';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "学习资源库 - AI高级工程师成长路线",
    description: "AI官方文档、深度教程与优质学习资源汇总是",
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <Resources />;
}
