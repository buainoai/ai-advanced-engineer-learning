import { learningPathData } from "@/data/learning-path";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Box, Layers, Cpu, Zap, ExternalLink, Scale } from "lucide-react";

export default function Platforms() {
    const getIcon = (type: string) => {
        if (type.includes("DevOps")) return <Box className="h-6 w-6 text-blue-500" />;
        if (type.includes("App")) return <Layers className="h-6 w-6 text-green-500" />;
        if (type.includes("No-Code")) return <Zap className="h-6 w-6 text-yellow-500" />;
        return <Cpu className="h-6 w-6 text-purple-500" />;
    };

    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">AI 平台与工具链</h1>
                <p className="text-muted-foreground mt-2 max-w-3xl">
                    深度对比企业级 AI 开发平台 (Dify/Bisheng/Coze/n8n)，聚焦于二次开发能力与系统集成方案。
                    <br />
                    <span className="text-sm opacity-80">
                        * 仅会调库是不够的，架构师需要懂得如何基于现有平台进行扩展与定制。
                    </span>
                </p>
            </div>

            {/* Comparison Table Section */}
            <Card className="border-t-4 border-t-indigo-500">
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Scale className="h-5 w-5 text-indigo-500" />
                        <CardTitle>平台深度对比：扩展性与成本</CardTitle>
                    </div>
                    <CardDescription>
                        针对架构师最关心的“可定制性”与“落地成本”进行横向评测
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[150px]">平台</TableHead>
                                <TableHead>扩展性限制 (Extension Limits)</TableHead>
                                <TableHead>成本与部署 (Cost & Deployment)</TableHead>
                                <TableHead className="text-right">适用场景</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {learningPathData.platformComparisons?.map((item) => (
                                <TableRow key={item.name}>
                                    <TableCell className="font-medium text-base">{item.name}</TableCell>
                                    <TableCell className="text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed max-w-xs">
                                        {item.extensionLimit}
                                    </TableCell>
                                    <TableCell className="text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed max-w-xs">
                                        {item.costModel}
                                        <div className="mt-1 text-xs font-mono text-primary/70">{item.deployment}</div>
                                    </TableCell>
                                    <TableCell className="text-right text-sm font-medium text-primary">
                                        {item.fitFor}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Separator className="my-8" />

            {/* Platform Cards */}
            <div className="grid gap-6 lg:grid-cols-2">
                {learningPathData.platforms.map((platform, index) => (
                    <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-shadow border-t-4 border-t-primary/20">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-secondary rounded-lg">
                                        {getIcon(platform.type)}
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl">{platform.name}</CardTitle>
                                        <CardDescription className="text-xs font-mono mt-1">{platform.type}</CardDescription>
                                    </div>
                                </div>
                            </div>
                            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                                {platform.description}
                            </p>
                        </CardHeader>

                        <CardContent className="flex-1 space-y-6">

                            <div className="space-y-2">
                                <h4 className="text-sm font-semibold flex items-center gap-2">
                                    <Zap className="h-4 w-4 text-amber-500" /> 核心优势
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {platform.strengths.map((s, i) => (
                                        <Badge key={i} variant="outline" className="bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-100">
                                            {s}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-sm font-semibold flex items-center gap-2">
                                    <Layers className="h-4 w-4 text-blue-500" /> 集成能力
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {platform.integration.map((s, i) => (
                                        <Badge key={i} variant="outline" className="bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-100">
                                            {s}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <Separator />

                            <div className="bg-secondary/50 p-4 rounded-lg border border-secondary">
                                <h4 className="text-sm font-bold mb-2 flex items-center gap-2 text-primary">
                                    <Cpu className="h-4 w-4" /> 二次开发 / 架构师视角
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {platform.devFocus}
                                </p>
                            </div>

                        </CardContent>

                        <CardFooter>
                            <Button variant="ghost" className="w-full justify-between group" disabled>
                                <span>查看详细对比文档 (Coming Soon)</span>
                                <ExternalLink className="h-4 w-4 opacity-50" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
