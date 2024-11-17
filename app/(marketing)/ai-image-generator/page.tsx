import Link from "next/link";
import Image from "next/image";
import MarketingNavBar from "@/components/marketing/NavBar";
import FooterBar from "@/components/marketing/FooterBar";
import Faq from "@/components/marketing/Faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Image Generator for Website - Imaiger",
  description:
    "Try out the best AI image generator tool for websites. Generate images with cutting edge artificial intelligence technology.",
};

export default function Home() {
  return (
    <>
      <MarketingNavBar />
      <div className="min-h-screen flex-[1] flex flex-col items-center px-2 justify-content-top">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-bold bg-gradient-to-r from-orange-600 to-amber-400 text-transparent bg-clip-text text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              AI Image Generator
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-white">
              Meet Imaiger, the ultimate platform for creators with zero AI
              experience who want to create AI images.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/pricing"
                rel="noreferrer"
                className="block w-full rounded border border-amber-600 bg-white px-12 py-3 text-sm font-medium text-black hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              >
                Try for Free
              </Link>

              <Link
                href="#learnmore"
                className="block w-full rounded border border-amber-600 px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="py-16">
            <div className="m-auto px-6 space-y-8 md:px-12 lg:px-56">
              <div className="m-auto text-center lg:w-7/12">
                <h2 className="text-2xl text-gray-400 font-bold md:text-4xl">
                  Your favorite companies use our platform.
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                <div className="p-4">
                  <Image
                    src="/google-logo.svg"
                    className=""
                    alt=""
                    width={131}
                    height={43}
                  />
                </div>
                <div className="p-4">
                  <Image
                    src="/bytedance-logo.svg"
                    className="w-32 "
                    alt=""
                    width={128}
                    height={35}
                  />
                </div>
                <div className="p-4">
                  <Image
                    src="/microsoft-logo.png"
                    className="w-32 "
                    alt=""
                    width={128}
                    height={27}
                  />
                </div>
                <div className="p-4">
                  <Image
                    src="/zapier-logo.png"
                    className="w-32"
                    alt=""
                    width={128}
                    height={35}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="learnmore">
          <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <Image
                    alt="generate image with ai"
                    layout="fill"
                    src="/imaiger-gallery-012.webp"
                    className="absolute inset-0 h-full w-full object-cover"
                  ></Image>
                </div>
              </div>

              <div className="relative flex items-center bg-gray-900">
                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl text-gray-200 font-bold sm:text-3xl">
                    Generate stunning AI images from your imagination.
                  </h2>

                  <p className="mt-4 text-gray-400">
                    Imaiger possesses the ability to generate stunning,
                    high-quality images using cutting-edge artificial
                    intelligence algorithms. With just a few simple inputs, our
                    platform can create visually striking artwork tailored to
                    your website&apos;s needs, saving you valuable time and
                    effort. Dedicated to empowering creators, we understand the
                    importance of customization. With an extensive array of
                    parameters at your disposal, you can fine-tune every aspect
                    of the AI-generated images to match your unique style,
                    brand, and desired aesthetic.
                  </p>

                  <Link
                    href="/pricing"
                    className="mt-8 inline-block rounded border border-amber-600 bg-white px-12 py-3 text-sm font-medium text-black hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-indigo-500"
                  >
                    Generate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl text-white font-bold sm:text-4xl">
                A beautiful image capturing nature&apos;s essence with flowing
                water, and earthy elements
                <span className="animate-ping">__</span>
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                <Image
                  alt="Party"
                  layout="fill"
                  src="/imaiger-gallery-010.webp"
                  className="absolute inset-0 h-full w-full object-cover"
                ></Image>
              </div>

              <div className="lg:py-16">
                <article className="space-y-4 text-gray-400">
                  <p>
                    By simply describing your desired image, you unlock a world
                    of artistic possibilities, enabling you to create visually
                    stunning websites that stand out from the crowd. Say goodbye
                    to dull images and unleash the full potential of your
                    creativity.
                  </p>

                  <p>
                    Gone are the days of hours spent searching for the perfect
                    image or struggling to create one from scratch.
                    Imaiger&apos;s lightning-fast AI image generation process
                    ensures you&apos;ll have a wealth of captivating visuals at
                    your fingertips, empowering you to focus on what you do best
                    — building an extraordinary website or creating a modern
                    blog.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
        <Faq />
      </div>
      <FooterBar />
    </>
  );
}
