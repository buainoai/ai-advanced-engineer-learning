import { learningPathData } from "@/data/learning-path";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function CapabilityMap() {
    const getPriorityColor = (priority: string) => {
        if (priority.includes("高")) return "destructive"; // Red
        if (priority.includes("中/高")) return "default"; // Primary color (usually dark)
        return "secondary"; // Grey/Blue-ish
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">岗位能力模型</h1>
                <p className="text-muted-foreground mt-2">
                    把 JD 翻译成可学习的技能清单，覆盖算法、工程与业务。
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {learningPathData.capabilityModel.map((item, index) => (
                    <Card key={index} className="flex flex-col h-full">
                        <CardHeader>
                            <div className="flex items-start justify-between gap-2">
                                <CardTitle className="text-lg leading-tight">{item.category}</CardTitle>
                                <Badge variant={getPriorityColor(item.priority) as any} className="shrink-0">
                                    {item.priority.split(" ")[0]}
                                </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                                {item.priority.includes("(") ? item.priority.match(/\((.*?)\)/)?.[1] : item.priority}
                            </p>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col gap-4">
                            <div>
                                <h4 className="font-semibold text-sm mb-2 text-primary">核心知识点 (Input)</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                    {item.knowledge.map((k, i) => (
                                        <li key={i} className="leading-relaxed pl-1 -indent-1">{k}</li>
                                    ))}
                                </ul>
                            </div>

                            <Separator className="my-1" />

                            <div>
                                <h4 className="font-semibold text-sm mb-2 text-primary">可验证产出 (Output)</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                    {item.output.map((o, i) => (
                                        <li key={i} className="leading-relaxed pl-1 -indent-1">{o}</li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
