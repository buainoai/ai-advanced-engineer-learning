"use client";

import { useState } from "react";
import { learningPathData, type ProjectItem } from "@/data/learning-path";
import { useProgress } from "@/hooks/use-progress";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Check, FolderOpen, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

// Project categories for color blocks
const getProjectCategoryColor = (index: number) => {
    const colors = [
        "bg-blue-50/50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900", // RAG/Tech
        "bg-orange-50/50 dark:bg-orange-950/20 border-orange-100 dark:border-orange-900", // Business/BI
        "bg-purple-50/50 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900", // Agent/Platform
        "bg-green-50/50 dark:bg-green-950/20 border-green-100 dark:border-green-900", // KG/Vertical
    ];
    return colors[index % colors.length];
};

export default function Projects() {
    const { progress, toggleProject } = useProgress();

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">实战项目库</h1>
                <p className="text-muted-foreground mt-2">
                    精选 9 个企业级实战项目，覆盖 RAG、Agent、KG、微调与工程化落地。
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {learningPathData.projects.map((project, index) => {
                    const isCompleted = progress.completedProjects.includes(project.id);
                    const colorClass = getProjectCategoryColor(index);

                    return (
                        <Card
                            key={project.id}
                            className={cn(
                                "flex flex-col h-full transition-all hover:shadow-md",
                                isCompleted ? "border-primary/50 bg-primary/5" : colorClass
                            )}
                        >
                            <CardHeader className="pb-3">
                                <div className="flex justify-between items-start gap-2">
                                    <div className={cn(
                                        "h-10 w-10 rounded-lg flex items-center justify-center shrink-0 text-primary transition-colors",
                                        isCompleted ? "bg-primary/20" : "bg-white/80 dark:bg-white/10"
                                    )}>
                                        {isCompleted ? <Check className="h-6 w-6" /> : <FolderOpen className="h-6 w-6" />}
                                    </div>
                                    {isCompleted && <Badge variant="default" className="bg-green-600 hover:bg-green-700">已完成</Badge>}
                                </div>
                                <CardTitle className="mt-4 text-xl leading-snug">{project.title}</CardTitle>
                                <CardDescription className="line-clamp-2 mt-2 h-10">
                                    {project.scenario}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="flex-1 min-h-0">
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.stack.slice(0, 3).map((tech, i) => (
                                        <Badge key={i} variant="secondary" className="font-normal text-xs bg-white/50 dark:bg-black/20 hover:bg-white/80">
                                            {tech}
                                        </Badge>
                                    ))}
                                    {project.stack.length > 3 && (
                                        <Badge variant="secondary" className="font-normal text-xs bg-white/50 dark:bg-black/20">+{project.stack.length - 3}</Badge>
                                    )}
                                </div>
                            </CardContent>

                            <CardFooter className="flex justify-between gap-3 pt-4 border-t border-black/5 dark:border-white/5 mt-auto">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" className="flex-1 bg-white/50 dark:bg-black/20 hover:bg-white/80">详情</Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                                        <DialogHeader>
                                            <DialogTitle>{project.title}</DialogTitle>
                                            <DialogDescription>{project.scenario}</DialogDescription>
                                        </DialogHeader>

                                        <div className="grid gap-6 py-4">
                                            <div className="space-y-3">
                                                <h4 className="font-semibold flex items-center gap-2">🛠️ 技术栈</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.stack.map(s => <Badge key={s}>{s}</Badge>)}
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <h4 className="font-semibold flex items-center gap-2 text-amber-600 dark:text-amber-500">
                                                    <AlertTriangle className="h-4 w-4" /> 关键难点
                                                </h4>
                                                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                                    {project.difficulties.map((d, i) => <li key={i}>{d}</li>)}
                                                </ul>
                                            </div>

                                            <div className="space-y-3 bg-muted/50 p-4 rounded-lg">
                                                <h4 className="font-semibold flex items-center gap-2">✅ 验收标准</h4>
                                                <p className="text-sm leading-relaxed">{project.criteria}</p>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>

                                <Button
                                    variant={isCompleted ? "secondary" : "default"}
                                    onClick={() => toggleProject(project.id)}
                                    className="flex-1"
                                >
                                    {isCompleted ? "撤销" : "完成"}
                                </Button>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
