"use client";

import { learningPathData } from "@/data/learning-path";
import { useProgress } from "@/hooks/use-progress";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { Link, useRouter } from "@/i18n/routing";

export default function LearningStages() {
    const { progress, toggleStage } = useProgress();
    const router = useRouter();

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">建议学习路线</h1>
                <p className="text-muted-foreground mt-2">
                    从基础到进阶，每个阶段都以产出一个可运行的项目为完成标准。
                </p>
            </div>

            <div className="relative border-l-2 border-muted ml-4 md:ml-6 space-y-12 pb-12">
                {learningPathData.learningStages.map((stage, index) => {
                    const isCompleted = progress.completedStages.includes(stage.id);
                    const isNext = !isCompleted && (index === 0 || progress.completedStages.includes(learningPathData.learningStages[index - 1].id));

                    return (
                        <div key={stage.id} className="relative pl-8 md:pl-12">
                            {/* Timeline Dot */}
                            <div
                                className={cn(
                                    "absolute -left-[9px] top-6 h-4 w-4 rounded-full border-2 bg-background transition-colors",
                                    isCompleted ? "border-primary bg-primary" : isNext ? "border-primary animate-pulse" : "border-muted-foreground"
                                )}
                            >
                                {isCompleted && <CheckCircle2 className="h-full w-full text-primary-foreground p-[1px]" />}
                            </div>

                            <Card className={cn("transition-all", isCompleted ? "opacity-80 hover:opacity-100" : "", isNext ? "ring-2 ring-primary shadow-lg" : "")}>
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <Badge variant="outline">{stage.duration}</Badge>
                                                <CardTitle>{stage.title}</CardTitle>
                                            </div>
                                            <CardDescription>{stage.goal}</CardDescription>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Checkbox
                                                id={`stage-${stage.id}`}
                                                checked={isCompleted}
                                                onCheckedChange={() => toggleStage(stage.id)}
                                                className="h-6 w-6"
                                            />
                                            <label
                                                htmlFor={`stage-${stage.id}`}
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                                            >
                                                标记为已完成
                                            </label>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex justify-end -mt-2 mb-2">
                                        <Button
                                            variant="link"
                                            className="text-primary p-0 h-auto font-semibold hover:no-underline group"
                                            onClick={() => router.push(`/roadmap/${stage.id}`)}
                                        >
                                            查看详情与资源 <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                                            <Circle className="h-3 w-3 fill-current" /> 关键知识点
                                        </h4>
                                        <ul className="grid md:grid-cols-2 gap-2">
                                            {stage.knowledgePoints.map((point, i) => (
                                                <li key={i} className="text-sm text-muted-foreground bg-secondary/50 p-2 rounded border">
                                                    {point.title}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                                        <h4 className="font-semibold text-sm mb-2 text-primary">✅ 验收标准</h4>
                                        <p className="text-sm leading-relaxed">{stage.criteria}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
