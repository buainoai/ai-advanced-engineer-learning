在 Next.js 中集成 AdSense 的最佳实践是将 **“加载脚本”** 和 **“广告单元”** 分开，以保证性能（不阻塞页面加载）和复用性。

以下是一个模块化的、通过 `.env` 配置的完整方案。

### 1. 配置环境变量

首先，在你的项目根目录找到或新建 `.env.local` 文件，填入你的 Publisher ID（发布商 ID）。

> **注意**：必须以 `NEXT_PUBLIC_` 开头，否则在客户端（浏览器端）无法读取。

```bash
# .env.local
NEXT_PUBLIC_GOOGLE_ADSENSE_ID=ca-pub-xxxxxxxxxxxxxxxx

```

---

### 2. 创建全局脚本组件 (只加载一次)

AdSense 的核心 JS 文件只需要加载一次。我们使用 Next.js 的 `Script` 组件来优化加载时机。

新建文件：`components/AdSense/GoogleAdScript.tsx`

```tsx
import Script from "next/script";

const GoogleAdScript = () => {
  const publisherId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID;

  if (!publisherId) return null;

  return (
    <Script
      id="google-adsense"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive" // 页面交互后再加载，不阻塞首屏
    />
  );
};

export default GoogleAdScript;

```

**用法**：
在你的 `app/layout.tsx` (App Router) 或 `pages/_document.tsx` (Pages Router) 中引入它。

```tsx
// app/layout.tsx
import GoogleAdScript from "@/components/AdSense/GoogleAdScript";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* 全局加载脚本 */}
        <GoogleAdScript />
        {children}
      </body>
    </html>
  );
}

```

---

### 3. 创建通用广告单元组件

这是你可以到处放置的组件。它处理了 React 开发模式下的“重复渲染”导致的 AdSense 报错问题。

新建文件：`components/AdSense/AdUnit.tsx`

```tsx
"use client";

import { useEffect, useRef } from "react";

interface AdUnitProps {
  slot: string; // 广告单元 ID (在 AdSense 后台获取)
  format?: "auto" | "fluid" | "rectangle";
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const AdUnit = ({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  style,
}: AdUnitProps) => {
  const publisherId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID;
  // 用于标记该组件实例是否已经加载过广告，防止 React StrictMode 下的双重加载报错
  const adLoaded = useRef(false); 

  useEffect(() => {
    // 如果没有 ID 或已经加载过，直接返回
    if (!publisherId || adLoaded.current) return;

    try {
      // 检查 adsbygoogle 对象是否存在
      if (typeof window !== "undefined") {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        adLoaded.current = true;
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, [publisherId]);

  if (!publisherId) {
    console.warn("AdSense Publisher ID is missing in .env");
    return null;
  }

  return (
    <div className={`adsense-container ${className}`} style={{ minHeight: "100px", ...style }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={publisherId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
};

export default AdUnit;

```

---

### 4. 如何在页面中使用

现在你可以在任何页面、文章中间或侧边栏轻松插入广告，只需要传入 `slot` ID 即可。

```tsx
import AdUnit from "@/components/AdSense/AdUnit";

export default function BlogPost() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1>我的文章标题</h1>
      
      {/* 顶部横幅广告 */}
      <div className="my-8">
        <AdUnit slot="1234567890" />
      </div>

      <p>文章内容...</p>
      
      {/* 侧边栏正方形广告 */}
      <AdUnit 
        slot="0987654321" 
        style={{ width: '300px', height: '250px' }} 
        responsive={false} // 如果是固定尺寸，建议关闭响应式
      />
    </div>
  );
}

```

### 5. 关键优化点 (CLS 性能)

AdSense 最常见的问题是 **CLS (Cumulative Layout Shift)**。广告加载较慢，加载出来后会把下面的内容“顶”下去，这非常影响 SEO 分数。

**解决方案**：
给 `AdUnit` 的外层容器一个**最小高度**。

在上面的 `AdUnit.tsx` 代码中，我已经加了一个默认样式：

```javascript
style={{ minHeight: "100px", ...style }}

```

**建议**：如果你知道某个广告位是横幅（比如 90px 高），最好在使用时显式指定高度：

```tsx
<AdUnit 
  slot="xxxx" 
  className="w-full bg-gray-100" // 灰色背景占位，提升体验
  style={{ minHeight: "280px" }} // 预留高度，防止页面抖动
/>

```

### 总结

1. **安全性**：ID 放在 `.env`，不在代码里硬编码。
2. **性能**：`GoogleAdScript` 使用 `strategy="afterInteractive"`，不拖慢网页加载。
3. **开发体验**：`AdUnit` 组件内部处理了 `useRef` 和 `try-catch`，避免了 React 开发环境常见的 "adsbygoogle.push() error: All ins elements in the DOM with class=adsbygoogle already have ads in them" 错误。