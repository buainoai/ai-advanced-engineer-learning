import Interview from '@/components/pages/Interview';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "面试题库 - AI高级工程师成长路线",
    description: "AI算法与工程面试常见问题与参考答案",
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <Interview />;
}
