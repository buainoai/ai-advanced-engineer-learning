"use client";

import { useState } from "react";
import { learningPathData } from "@/data/learning-path";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExternalLink, Search } from "lucide-react";

export default function Resources() {
    const [search, setSearch] = useState("");

    const allCategories = ["全部", ...learningPathData.resources.map(r => r.category)];
    const [activeTab, setActiveTab] = useState("全部");

    const filterLinks = (category: string) => {
        let sections = learningPathData.resources;
        if (category !== "全部") {
            sections = sections.filter(s => s.category === category);
        }

        // Flatten and filter by search
        return sections.flatMap(s =>
            s.links.filter(l =>
                l.title.toLowerCase().includes(search.toLowerCase()) ||
                l.description.toLowerCase().includes(search.toLowerCase())
            ).map(l => ({ ...l, category: s.category }))
        );
    };

    const filteredLinks = filterLinks(activeTab);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">学习资源库</h1>
                <p className="text-muted-foreground mt-2">
                    精选官方文档与深度教程，拒绝浅尝辄止。
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="搜索文档或教程..."
                        className="pl-8"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <Tabs defaultValue="全部" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
                <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0 justify-start">
                    {allCategories.map(cat => (
                        <TabsTrigger
                            key={cat}
                            value={cat}
                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border bg-card px-4 py-2 h-auto"
                        >
                            {cat}
                        </TabsTrigger>
                    ))}
                </TabsList>

                <TabsContent value={activeTab} className="mt-6">
                    {filteredLinks.length > 0 ? (
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {filteredLinks.map((link, i) => (
                                <Card key={i} className="group hover:border-primary/50 transition-colors">
                                    <CardHeader>
                                        <CardTitle className="text-lg flex items-center justify-between gap-2">
                                            {link.title}
                                            <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
                                        </CardTitle>
                                        <CardDescription className="line-clamp-2">{link.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xs text-muted-foreground mb-4 bg-secondary inline-block px-2 py-1 rounded">
                                            {link.category}
                                        </div>
                                        <Button asChild variant="secondary" className="w-full">
                                            <a href={link.url} target="_blank" rel="noopener noreferrer nofollow">访问资源</a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 text-muted-foreground">
                            没有找到匹配的资源
                        </div>
                    )}
                </TabsContent>
            </Tabs>
        </div>
    );
}
