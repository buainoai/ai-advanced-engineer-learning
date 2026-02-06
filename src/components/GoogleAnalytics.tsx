// components/GoogleAnalytics.tsx
'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    // 如果没有配置 ID，则不渲染任何内容，防止报错
    if (!gaId) {
        return null;
    }

    return (
        <>
            {/* 1. 引入 gtag.js 脚本 */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                strategy="afterInteractive"
            />

            {/* 2. 初始化配置 */}
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaId}');
        `}
            </Script>
        </>
    );
}