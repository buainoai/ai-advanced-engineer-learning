import LearningStages from '@/components/pages/LearningStages';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "学习路线 - AI高级工程师成长路线",
    description: "从基础到进阶的AI工程师系统化学习路径",
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <LearningStages />;
}
