import {
    LayoutDashboard,
    Map,
    Route as RouteIcon,
    FolderKanban,
    Library,
    BookOpenCheck,
    Lightbulb,
    Box,
} from "lucide-react";

export const NAV_ITEMS = [
    { label: "仪表盘", path: "/", icon: LayoutDashboard },
    { label: "能力图谱", path: "/capability", icon: Map },
    { label: "学习路线", path: "/roadmap", icon: RouteIcon },
    { label: "实战项目", path: "/projects", icon: FolderKanban },
    { label: "资源库", path: "/resources", icon: Library },
    { label: "平台工具", path: "/platforms", icon: Box },
    { label: "实用技巧", path: "/tips", icon: Lightbulb },
    { label: "面试题库", path: "/interview", icon: BookOpenCheck },
];
