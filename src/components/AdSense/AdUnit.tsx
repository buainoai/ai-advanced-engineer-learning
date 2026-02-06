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