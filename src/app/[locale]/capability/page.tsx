import CapabilityMap from '@/components/pages/CapabilityMap';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "能力图谱 - AI高级工程师成长路线",
    description: "AI高级工程师岗位能力模型与技能清单",
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <CapabilityMap />;
}
