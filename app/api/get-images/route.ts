import { NextRequest } from "next/server";
import { JSDOM } from "jsdom";
import { default as createDOMPurify } from "dompurify";

interface ImageUrl {
  url: string;
}

export async function POST(request: NextRequest) {
  try {
    const { url } = (await request.json()) as ImageUrl;
    const response = await fetch(url);
    const text = await response.text();
    const dom = new JSDOM(text);
    const DOMPurify = createDOMPurify(dom.window as unknown as Window);
    const cleanHTML = DOMPurify.sanitize(text);

    const document = new JSDOM(cleanHTML).window.document;
    const imageElements = document.querySelectorAll("img");
    const imageUrls = Array.from(imageElements)
      .map((img) => {
        const src = img.src;
        // TODO: checks for images that are logos, images on external urls, images of small dimensions?, images on user defined url can only be fetched
        if (src.startsWith("https://")) {
          return src;
        } else if (!src.startsWith("http://")) {
          const originURL = new URL(url);
          const absoluteURL = new URL(src, originURL.origin);
          return absoluteURL.href;
        }
        return null;
      })
      .filter((url) => url !== null);
    return new Response(JSON.stringify({ urls: imageUrls }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error: any) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
