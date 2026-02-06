// app/ads.txt/route.ts

export async function GET() {
    // 从环境变量读取 ID
    const publisherId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID;

    if (!publisherId) {
        return new Response("AdSense ID not configured", { status: 500 });
    }

    // 构建 ads.txt 的内容
    // 格式: google.com, pub-xxxxxxxxxxxxxxxx, DIRECT, f08c47fec0942fa0
    // 注意：f08c47fec0942fa0 是 Google 的固定认证 ID，所有人都是这个
    const content = `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0`;

    return new Response(content, {
        headers: {
            "Content-Type": "text/plain",
        },
    });
}