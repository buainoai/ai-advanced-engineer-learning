import { learningPathData } from "@/data/learning-path";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Code2, Workflow, Layers } from "lucide-react";

export default function Tips() {
    const getIcon = (category: string) => {
        switch (category) {
            case "IDE技巧": return <Code2 className="h-5 w-5 text-blue-500" />;
            case "自动化": return <Workflow className="h-5 w-5 text-purple-500" />;
            case "UI开发": return <Layers className="h-5 w-5 text-pink-500" />;
            default: return <Lightbulb className="h-5 w-5 text-yellow-500" />;
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">实用技巧 & 最佳实践</h1>
                <p className="text-muted-foreground mt-2">
                    收集了 AI 驱动型开发中的高频实战技巧，助你从“搬砖”进化为“挖掘机手”。
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {learningPathData.tips.map((tip, index) => (
                    <Card key={index} className="flex flex-col h-full border-l-4 border-l-primary/40 hover:border-l-primary transition-all">
                        <CardHeader>
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-2">
                                    {getIcon(tip.category)}
                                    <CardTitle className="text-xl">{tip.title}</CardTitle>
                                </div>
                                <Badge variant="secondary">{tip.category}</Badge>
                            </div>
                            <CardDescription className="text-base mt-2">
                                {tip.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="bg-muted/50 p-4 rounded-md font-mono text-sm whitespace-pre-wrap border">
                                {tip.content}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
