"use client";

import { useEffect } from "react";
import {
    Github,
    Moon,
    Sun,
    FileText,
    Zap,
    Trophy,
    HelpCircle,
    Layers
} from "lucide-react";
import { NAV_ITEMS } from "@/config/nav";
import { learningPathData } from "@/data/learning-path";
import { useRouter } from "@/i18n/routing";
import { useTheme } from "@/contexts/ThemeContext";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";

export function SearchCommand({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: (open: boolean) => void;
}) {
    const router = useRouter();
    const { toggleTheme } = useTheme();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen(!open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, [open, setOpen]);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="搜索知识点... (Type a command or search...)" />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="导航 (Navigation)">
                    {NAV_ITEMS.map((item) => (
                        <CommandItem key={item.path} onSelect={() => runCommand(() => router.push(item.path))}>
                            <item.icon className="mr-2 h-4 w-4" />
                            <span>{item.label}</span>
                        </CommandItem>
                    ))}
                </CommandGroup>

                <CommandSeparator />

                <CommandGroup heading="学习阶段 (Stages)">
                    {learningPathData.learningStages.map((stage) => (
                        <CommandItem
                            key={stage.id}
                            onSelect={() => runCommand(() => router.push(`/roadmap/${stage.id}`))}
                            value={stage.title + " " + stage.goal}
                        >
                            <FileText className="mr-2 h-4 w-4 text-blue-500" />
                            <span>{stage.title}</span>
                        </CommandItem>
                    ))}
                </CommandGroup>

                <CommandGroup heading="实战项目 (Projects)">
                    {learningPathData.projects.map((project) => (
                        <CommandItem
                            key={project.id}
                            onSelect={() => runCommand(() => router.push(`/projects`))}
                            value={project.title + " " + project.scenario}
                        >
                            <Trophy className="mr-2 h-4 w-4 text-orange-500" />
                            <span>{project.title}</span>
                        </CommandItem>
                    ))}
                </CommandGroup>

                <CommandGroup heading="实用技巧 (Tips)">
                    {learningPathData.tips.map((tip) => (
                        <CommandItem
                            key={tip.title}
                            onSelect={() => runCommand(() => router.push(`/tips`))}
                            value={tip.title + " " + tip.description}
                        >
                            <Zap className="mr-2 h-4 w-4 text-yellow-500" />
                            <span>{tip.title}</span>
                        </CommandItem>
                    ))}
                </CommandGroup>

                <CommandGroup heading="平台工具 (Platforms)">
                    {learningPathData.platforms.map((platform) => (
                        <CommandItem
                            key={platform.name}
                            onSelect={() => runCommand(() => router.push(`/platforms`))}
                            value={platform.name + " " + platform.description}
                        >
                            <Layers className="mr-2 h-4 w-4 text-purple-500" />
                            <span>{platform.name}</span>
                        </CommandItem>
                    ))}
                </CommandGroup>

                <CommandGroup heading="面试题 (Interview)">
                    {learningPathData.interviewQuestions.map((q, i) => (
                        <CommandItem
                            key={i}
                            onSelect={() => runCommand(() => router.push(`/interview`))}
                            value={q.question + " " + q.answer}
                        >
                            <HelpCircle className="mr-2 h-4 w-4 text-green-500" />
                            <span className="truncate">{q.question}</span>
                        </CommandItem>
                    ))}
                </CommandGroup>

                <CommandSeparator />
                <CommandGroup heading="通用 (General)">
                    <CommandItem onSelect={() => runCommand(() => toggleTheme())}>
                        <Sun className="mr-2 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute mr-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span>切换主题 (Toggle Theme)</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => window.open("https://github.com/buainoai", "_blank"))}>
                        <Github className="mr-2 h-4 w-4" />
                        <span>GitHub</span>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
}
