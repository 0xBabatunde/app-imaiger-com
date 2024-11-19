import React from "react";

import Image from "next/image";
import MarketingNavBar from "@/components/marketing/NavBar";
import FooterBar from "@/components/marketing/FooterBar";
import SearchBoxIndex from "@/components/marketing/SearchBoxIndex";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Image Search Tool for AI Generated Images - Imaiger",
  description:
    "Try out the best AI generated image search tool. Search millions of art and images generated with cutting edge artificial intelligence technology.",
};

export default function AiImageSearch() {
  return (
    <>
      <MarketingNavBar />
      <div className="min-h-screen flex-[1] flex flex-col items-center px-2 justify-content-top">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:pt-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-bold bg-gradient-to-r from-orange-600 to-amber-400 text-transparent bg-clip-text text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-5">
              AI Image Search: Find millions of AI generated images.
            </h1>
          </div>
        </section>
        <SearchBoxIndex />

        <section className="container mx-auto px-4">
          <div className="columns-2 md:columns-4 gap-4 space-y-4">
            <div className="break-inside-avoid">
              <Image
                className="h-auto w-full rounded-lg"
                src="/water-throne.jpeg"
                alt=""
                height={768}
                width={512}
              />
            </div>
            <div className="break-inside-avoid">
              <Image
                className="h-auto w-full rounded-lg"
                src="/car-in-sunset.jpeg"
                alt=""
                height={624}
                width={624}
              />
            </div>
            <div className="break-inside-avoid">
              <Image
                className="h-auto w-full rounded-lg"
                src="/city-scenes.jpeg"
                alt=""
                height={768}
                width={512}
              />
            </div>
            <div className="break-inside-avoid">
              <Image
                className="h-auto w-full rounded-lg"
                src="/robotic-bunny.jpeg"
                alt=""
                height={624}
                width={624}
              />
            </div>
            <div className="break-inside-avoid">
              <Image
                className="h-auto w-full rounded-lg"
                src="/cave.jpeg"
                alt=""
                height={768}
                width={512}
              />
            </div>
            <div className="break-inside-avoid">
              <Image
                className="h-auto w-full rounded-lg"
                src="/city-of-la.jpeg"
                alt=""
                height={374}
                width={624}
              />
            </div>
            <div className="break-inside-avoid">
              <Image
                className="h-auto w-full rounded-lg"
                src="/natural-dog.jpeg"
                alt=""
                height={640}
                width={512}
              />
            </div>
            <div className="break-inside-avoid">
              <Image
                className="h-auto w-full rounded-lg"
                src="/house-in-the-woods.jpeg"
                alt=""
                height={374}
                width={624}
              />
            </div>
            <div className="break-inside-avoid">
              <Image
                className="h-auto w-full rounded-lg"
                src="/minimalistic-house.jpeg"
                alt=""
                height={624}
                width={624}
              />
            </div>
            <div className="break-inside-avoid">
              <Image
                className="h-auto w-full rounded-lg"
                src="/garden.jpeg"
                alt=""
                height={768}
                width={512}
              />
            </div>
            <div className="break-inside-avoid">
              <Image
                className="h-auto w-full rounded-lg"
                src="/deep-orb.jpeg"
                alt=""
                height={624}
                width={624}
              />
            </div>
            <div className="break-inside-avoid">
              <Image
                className="h-auto w-full rounded-lg"
                src="/orange-cat.jpeg"
                alt=""
                height={512}
                width={512}
              />
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                <p>
                  Use Imaiger to search and generate AI images in seconds. Our
                  sophisticated AI image search delivers accuracy in its results
                  every time. It&apos;s never been easier to find quality images
                  for any purpose.
                </p>
                <h2 className="text-xl font-bold leading-tight sm:text-4xl mb-2 mt-4 text-gray-900">
                  Sophisticated AI Image Search Engine
                </h2>
                <p>
                  Finding and creating AI images is simpler than ever with
                  Imaiger. AI images enable you to seek exactly what you&apos;re
                  looking for, for a range of purposes. Whether you want images
                  for your website or jokes to send to your friends, our AI
                  image search tool gets you results in seconds.
                </p>
                <p>
                  Imaiger gives you powerful tools to allow you to search and
                  filter images based on a number of different categories. Find
                  the images you want by searching for keywords, colors and even
                  images based on size. Whatever you&apos;re looking for,
                  Imaiger makes it slick and easy. Forget using search engines
                  that aren&apos;t designed with AI images in mind. Get all of
                  the results you need and none of those you don&apos;t with a
                  specialized search engine.
                </p>
                <h2 className="text-xl font-bold leading-tight sm:text-4xl mb-2 mt-4 text-gray-900">
                  Generate AI Image
                </h2>
                <p>
                  Imaiger doesn&apos;t just find images for you—it generates
                  them too! In addition to being an AI image finder, Imaiger
                  uses the latest machine learning technologies to create images
                  from your prompts. If you can&apos;t find what you&apos;re
                  looking for, simply generate new images from the very
                  beginning. Our tool takes your prompts and turns them into
                  unique images that match your needs. Keep customizing and
                  tweaking your images to get exactly what you want.
                </p>
                <h2 className="text-xl font-bold leading-tight sm:text-4xl mb-2 mt-4 text-gray-900">
                  Get More from AI Images
                </h2>
                <p>
                  How do you make the most of our artificial intelligence image
                  search? Imaiger is easy to use and offers you a choice of
                  filters to help you narrow down any search. There&apos;s no
                  need to have any technical knowledge to find the images you
                  want. All you need is an idea of what you&apos;re looking for
                  so you can start your search. As you search, refine what you
                  want using our filters and by changing your prompt to discover
                  the best images. Consider using Imaiger for a variety of
                  purposes, whether you want to use it as an individual or for
                  your business. You can find AI images of all types with our
                  cutting-edge technology.
                </p>
                <h2 className="text-xl font-bold leading-tight sm:text-4xl mb-2 mt-4 text-gray-900">
                  How to Use AI Image Search and Generation
                </h2>
                <p>
                  Anyone can use our AI image search engine. After you create an
                  account and sign in, you can search for images using different
                  parameters. Choose to search using relevant keywords or filter
                  the images you want to see by color, size and other factors.
                </p>
                <p>
                  There&apos;s no need to hold back on your search. Use specific
                  keywords to find exactly what you&apos;re looking for and add
                  detail to your search. If you&apos;re unsure about what you
                  want, start with a broad search and narrow it down as you
                  browse the results you receive. Get the images you&apos;re
                  looking for in seconds and discover images that you won&apos;t
                  find elsewhere.
                </p>
                <p>
                  Can&apos;t find what you&apos;re looking for? Generate your
                  images instead. Our image generation tool will create unique
                  images that you won&apos;t find anywhere else.
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>
      <FooterBar />
    </>
  );
}
