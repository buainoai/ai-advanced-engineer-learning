import Platforms from '@/components/pages/Platforms';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "平台工具 - AI高级工程师成长路线",
    description: "AI开发平台与工具链深度对比分析",
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <Platforms />;
}
