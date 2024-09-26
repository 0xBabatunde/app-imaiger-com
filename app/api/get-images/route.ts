import { NextRequest } from "next/server";

export const runtime = "edge";
interface ImageUrl {
  url: string;
}

export async function POST(request: NextRequest) {
  try {
    const { url } = (await request.json()) as ImageUrl;
    const response = await fetch(url);
    const text = await response.text();

    // Use DOMParser instead of JSDOM
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");

    const imageElements = doc.querySelectorAll("img");
    const imageUrls = Array.from(imageElements)
      .map((img) => {
        const src = (img as HTMLImageElement).src;
        if (src.startsWith("https://")) {
          return src;
        } else if (!src.startsWith("http://")) {
          const originURL = new URL(url);
          const absoluteURL = new URL(src, originURL.origin);
          return absoluteURL.href;
        }
        return null;
      })
      .filter((url): url is string => url !== null);

    // Fetch each image URL to ensure it's valid
    const validImageUrls = await Promise.all(
      imageUrls.map(async (imageUrl) => {
        try {
          const response = await fetch(imageUrl, { method: "HEAD" });
          return response.ok ? imageUrl : null;
        } catch {
          return null;
        }
      })
    );

    const filteredImageUrls = validImageUrls.filter(
      (url): url is string => url !== null
    );

    return new Response(JSON.stringify({ urls: filteredImageUrls }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
    });
  }
}
