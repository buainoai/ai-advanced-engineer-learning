import StageDetail from '@/components/pages/StageDetail';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { learningPathData } from '@/data/learning-path';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; stageId: string }> }): Promise<Metadata> {
    const { stageId } = await params;
    const stage = learningPathData.learningStages.find(s => s.id === stageId);

    if (!stage) {
        return {
            title: "阶段未找到",
        };
    }

    return {
        title: `${stage.title} - 学习路线`,
        description: stage.description || stage.goal,
    };
}

export function generateStaticParams() {
    // Generate params for all locales and stages
    const locales = ['en', 'zh'];
    const stages = learningPathData.learningStages.map(s => s.id);
    const params = [];

    for (const locale of locales) {
        for (const stageId of stages) {
            params.push({ locale, stageId });
        }
    }
    return params;
}

export default async function Page({ params }: { params: Promise<{ locale: string; stageId: string }> }) {
    const { locale, stageId } = await params;
    setRequestLocale(locale);

    return <StageDetail stageId={stageId} />;
}
