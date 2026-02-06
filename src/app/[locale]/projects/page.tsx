import Projects from '@/components/pages/Projects';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "实战项目 - AI高级工程师成长路线",
    description: "AI高级工程师实战项目库与案例分析",
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <Projects />;
}
