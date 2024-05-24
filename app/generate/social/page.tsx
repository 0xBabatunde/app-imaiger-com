"use client";
import { useState } from "react";
import Image from "next/image";

import { MobileNav } from "@/components/mobile-navbar";
import SearchBox from "@/components/search-box";
import { Icons } from "@/components/icons";
import Link from "next/link";

/*export const metadata: Metadata = {
  title: "Generate Social Image - Imaiger",
  description: "Generate social images for your web project",
};*/

const sleep = (ms: number | undefined) => new Promise((r) => setTimeout(r, ms));

export default function SocialImage() {
  //const [isLoading, setIsLoading] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [prediction, setPrediction] = useState<any>(null);
  const [error, setError] = useState(null);

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setKeyword(e.target.value);
  };

  const handleKeyUp = (e: { code: string }) => {
    if (e.code === "Enter") {
      handleSubmit(e);
    }
  };

  const handleSubmit = async (e: {
    code?: string;
    preventDefault?: any;
    target?: any;
  }) => {
    e.preventDefault();
    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: e.target.value,
      }),
    });
    let prediction = await response.json();
    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    setPrediction(prediction);

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(1000);
      const response = await fetch("/api/predictions/" + prediction.id);
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      setPrediction(prediction);
    }
  };

  return (
    <>
      <MobileNav />
      <div className="md:block">
        <div className="mx-4 my-4 grid grid-cols-3 gap-4">
          <div className="col-span-2 sticky top-20 z-10">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Icons.logo className="mr-2 h-4 w-4" />
            </div>
            <input
              className="block w-full p-4 pl-10 text-lg font-Poppins text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-amber-600 focus:border-amber-600 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-amber-600 dark:focus:border-amber-600"
              id="social-generate"
              value={keyword}
              onChange={handleChange}
              placeholder="Type in your prompt to generate..."
              onKeyUp={handleKeyUp}
            />
          </div>
          <div className="">
            <SearchBox />
          </div>
        </div>

        <div className="container h-full py-6 justify-center">
          <div className="grid h-full items-stretch gap-6">
            <div className="md:order-1">
              <div className="flex flex-col space-y-4">
                {prediction && prediction.output && (
                  <Link
                    href="https://imaiger.com/pricing"
                    className="text-lg underline"
                  >
                    Subscribe to pro for higher quality images
                  </Link>
                )}
                {prediction ? (
                  <div>
                    {prediction.output ? (
                      <div className="mt-[21px] min-w-[760px] content-center rounded-md border bg-muted h-[100px] lg:h-[700px]">
                        <Image
                          src={prediction.output[prediction.output.length - 1]}
                          alt="output"
                          sizes="100vw"
                          width={1320}
                          height={680}
                          className="relative top-2 left-[7px]"
                        />
                      </div>
                    ) : (
                      <div className="mt-[21px] min-w-[760px] rounded-md border bg-muted h-[100px] lg:h-[700px] animate-pulse">
                        <div className="flex items-center justify-center bg-gray-500 rounded-md dark:bg-gray-700 min-w-[760px] h-[100px] lg:h-[700px]">
                          <Icons.image />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    role="status"
                    className="mt-[21px] min-w-[760px] rounded-md border bg-muted h-[100px] lg:h-[700px]"
                  >
                    <div className="flex items-center justify-center bg-gray-500 rounded-md dark:bg-gray-700 min-w-[760px] h-[100px] lg:h-[700px]">
                      <svg
                        className="w-10 h-10 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
