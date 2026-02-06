"use client";

import { learningPathData } from "@/data/learning-path";
import { useProgress } from "@/hooks/use-progress";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, BookOpen, Code, Brain, Map as MapIcon, FolderKanban, BookOpenCheck, Lightbulb } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function Dashboard() {
    const { progress } = useProgress();

    const totalStages = learningPathData.learningStages.length;
    const completedStages = progress.completedStages.length;
    const progressPercentage = Math.round((completedStages / totalStages) * 100);

    const nextStage = learningPathData.learningStages.find(
        s => !progress.completedStages.includes(s.id)
    );

    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">{learningPathData.title}</h1>
                <p className="text-muted-foreground text-lg max-w-3xl">
                    {learningPathData.subtitle}
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">总进度</CardTitle>
                        <Trophy className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{progressPercentage}%</div>
                        <Progress value={progressPercentage} className="h-2 mt-2" />
                        <p className="text-xs text-muted-foreground mt-2">
                            完成 {completedStages} / {totalStages} 个阶段
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">核心能力</CardTitle>
                        <Brain className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{learningPathData.capabilityModel.length} 项</div>
                        <p className="text-xs text-muted-foreground mt-1">覆盖 Agent, RAG, KG 等领域</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">实战项目</CardTitle>
                        <Code className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{learningPathData.projects.length} 个</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            完成 {progress.completedProjects.length} 个项目
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">学习资源</CardTitle>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{learningPathData.resources.reduce((acc, curr) => acc + curr.links.length, 0)} +</div>
                        <p className="text-xs text-muted-foreground mt-1">精选官方文档与教程</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>当前目标</CardTitle>
                        <CardDescription>
                            {nextStage ? "继续你的学习之旅" : "恭喜！你已完成所有学习阶段"}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {nextStage ? (
                            <div className="space-y-4">
                                <div className="flex items-center justify-between bg-secondary/50 p-4 rounded-lg">
                                    <div>
                                        <h3 className="font-semibold">{nextStage.title}</h3>
                                        <p className="text-sm text-muted-foreground">预计用时: {nextStage.duration}</p>
                                    </div>
                                    <Link href="/roadmap">
                                        <Button>
                                            去学习 <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-sm font-semibold">核心目标:</h4>
                                    <p className="text-sm text-muted-foreground">{nextStage.goal}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-8 text-center">
                                <Trophy className="h-12 w-12 text-yellow-500 mb-4" />
                                <h3 className="text-xl font-bold">全栈 AI 工程师达成！</h3>
                                <p className="text-muted-foreground mt-2">
                                    你已经掌握了所有核心技能。现在去构建改变世界的应用吧！
                                </p>
                            </div>
                        )}
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>快速入口</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-2">
                        <Link href="/capability">
                            <Button variant="outline" className="w-full justify-start">
                                <MapIcon className="mr-2 h-4 w-4" /> 查看能力图谱
                            </Button>
                        </Link>
                        <Link href="/projects">
                            <Button variant="outline" className="w-full justify-start">
                                <FolderKanban className="mr-2 h-4 w-4" /> 浏览实战项目
                            </Button>
                        </Link>
                        <Link href="/tips">
                            <Button variant="outline" className="w-full justify-start">
                                <Lightbulb className="mr-2 h-4 w-4" /> 实用技巧
                            </Button>
                        </Link>
                        <Link href="/interview">
                            <Button variant="outline" className="w-full justify-start">
                                <BookOpenCheck className="mr-2 h-4 w-4" /> 面试自测
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
