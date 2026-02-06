import Dashboard from '@/components/pages/Dashboard';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "仪表盘 - AI高级工程师成长路线",
    description: "全栈AI工程师学习进度追踪与能力图谱展示",
};

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'zh' }];
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <Dashboard />;
}