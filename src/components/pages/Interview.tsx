"use client";

import { useState } from "react";
import { learningPathData } from "@/data/learning-path";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

export default function Interview() {
    const [search, setSearch] = useState("");

    const filteredQuestions = learningPathData.interviewQuestions.filter(q =>
        q.question.toLowerCase().includes(search.toLowerCase()) ||
        q.answer.toLowerCase().includes(search.toLowerCase()) ||
        q.module.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">面试自测清单</h1>
                <p className="text-muted-foreground mt-2">
                    在面试前，请对着这个清单进行自我“拷打”。如果能流畅回答并举出自己项目中的例子，说明你已准备就绪。
                </p>
            </div>

            <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="搜索考点..."
                    className="pl-8"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="bg-card rounded-lg border">
                <Accordion type="single" collapsible className="w-full">
                    {filteredQuestions.map((q, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="px-6">
                            <AccordionTrigger className="hover:no-underline py-4">
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-left">
                                    <Badge variant="outline" className="w-fit shrink-0">{q.module}</Badge>
                                    <span className="font-medium text-base">{q.question}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                                <div className="bg-secondary/30 p-4 rounded-md border-l-4 border-primary">
                                    <span className="font-semibold text-foreground block mb-1">参考答案方向：</span>
                                    {q.answer}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                {filteredQuestions.length === 0 && (
                    <div className="p-8 text-center text-muted-foreground">
                        未找到相关面试题
                    </div>
                )}
            </div>
        </div>
    );
}
