import { Link } from "@/i18n/routing";
import { learningPathData } from "@/data/learning-path";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, BookOpen, ExternalLink, GraduationCap, CheckCircle2, Code2, Lightbulb } from "lucide-react";

// Simple Markdown Renderer for static content
const SimpleMarkdown = ({ content }: { content: string }) => {
    if (!content) return null;
    const paragraphs = content.split('\n').filter(Boolean);
    return (
        <div className="space-y-4 text-muted-foreground leading-relaxed">
            {paragraphs.map((para, i) => {
                const parts = para.split(/(\*\*.*?\*\*)/g);
                return (
                    <p key={i}>
                        {parts.map((part, j) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                                return <strong key={j} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
                            }
                            return part;
                        })}
                    </p>
                );
            })}
        </div>
    );
};

export default function StageDetail({ stageId }: { stageId: string }) {
    const stage = learningPathData.learningStages.find(s => s.id === stageId);

    if (!stage) {
        return (
            <div className="flex flex-col items-center justify-center h-96">
                <h2 className="text-2xl font-bold mb-4">未找到该阶段</h2>
                <Link href="/roadmap">
                    <Button variant="outline">返回路线图</Button>
                </Link>
            </div>
        );
    }

    const relatedResources = learningPathData.resources.filter(
        r => stage.relatedCategories?.includes(r.category)
    );

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 w-full max-w-full overflow-hidden">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/">首页</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/roadmap">学习路线</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{stage.title}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Link href="/roadmap">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <Badge variant="outline" className="text-sm px-3 py-1 bg-secondary/50">
                        {stage.duration}
                    </Badge>
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-primary">{stage.title}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
                    {stage.description || stage.goal}
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-8 min-w-0">

                    {/* Enhanced Knowledge Points Section */}
                    <Card className="border-t-4 border-t-primary">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl">
                                <GraduationCap className="h-6 w-6 text-primary" /> 核心知识体系详解
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-6">
                            {stage.knowledgePoints.map((point, i) => (
                                <div key={i} className="flex flex-col gap-4 p-5 rounded-xl border bg-card hover:shadow-sm transition-all overflow-hidden">
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <h3 className="font-bold text-lg text-primary">{point.title}</h3>
                                        <div className="flex gap-2">
                                            {point.tags.map(tag => (
                                                <Badge key={tag} variant="secondary" className="text-xs font-normal">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-amber-50/50 dark:bg-amber-950/20 p-3 rounded-lg border border-amber-100 dark:border-amber-900 flex gap-3">
                                        <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
                                        <p className="text-sm text-amber-900 dark:text-amber-100 leading-relaxed font-medium">
                                            {point.advice}
                                        </p>
                                    </div>

                                    {point.code && (
                                        <div className="relative group max-w-full">
                                            <div className="absolute -top-3 left-3 bg-secondary px-2 py-0.5 rounded text-xs font-mono text-muted-foreground flex items-center gap-1 border border-secondary z-10">
                                                <Code2 className="h-3 w-3" /> {point.code.language}
                                            </div>
                                            <pre className="bg-slate-950 text-slate-50 p-4 pt-6 rounded-lg text-sm font-mono overflow-x-auto border border-slate-800 max-w-full">
                                                {point.code.content}
                                            </pre>
                                            {point.code.description && (
                                                <p className="text-xs text-muted-foreground mt-2 italic text-right">
                                                    — {point.code.description}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Deep Dive Sections */}
                    {stage.deepDive && stage.deepDive.length > 0 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                                <BookOpen className="h-6 w-6 text-primary" /> 深度解析 (Deep Dive)
                            </h2>
                            {stage.deepDive.map((item, index) => (
                                <Card key={index} className="overflow-hidden gap-0 py-0">
                                    <CardHeader className="bg-secondary/20 border-b py-6">
                                        <CardTitle className="text-lg">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-6">
                                        <SimpleMarkdown content={item.content} />
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}

                    {/* Acceptance Criteria */}
                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2 text-primary">
                                <CheckCircle2 className="h-5 w-5" /> 阶段验收标准
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="leading-relaxed font-medium">
                                {stage.criteria}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6 min-w-0">
                    <div className="sticky top-20 space-y-6">
                        <h3 className="font-semibold text-lg">推荐学习资源</h3>
                        {relatedResources.length > 0 ? (
                            relatedResources.map((section, idx) => (
                                <Card key={idx} className="bg-card/50">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-base font-medium text-muted-foreground">
                                            {section.category}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        {section.links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group block p-3 rounded-md bg-background border hover:border-primary/50 transition-all hover:shadow-sm"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span className="font-medium group-hover:text-primary transition-colors truncate mr-2">
                                                        {link.title}
                                                    </span>
                                                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                                    {link.description}
                                                </p>
                                            </a>
                                        ))}
                                    </CardContent>
                                </Card>
                            ))
                        ) : (
                            <div className="text-sm text-muted-foreground p-4 border rounded-lg bg-muted/20">
                                暂无关联资源，请查阅全局资源库。
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
