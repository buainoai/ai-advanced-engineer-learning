import Script from "next/script";

const GoogleAdScript = () => {
    const publisherId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID;

    if (!publisherId) return null;

    return (
        <Script
            id="google-adsense"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${publisherId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive" // 页面交互后再加载，不阻塞首屏
        />
    );
};

export default GoogleAdScript;