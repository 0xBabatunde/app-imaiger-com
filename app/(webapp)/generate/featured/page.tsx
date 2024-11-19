"use client";
import Image from "next/image";
import {
  DownloadIcon,
  LucideEdit,
  CornerDownLeft,
  Mic,
  Paperclip,
  ImageIcon,
  Loader2Icon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SetStateAction, useState, useEffect } from "react";
import { MobileNav } from "@/components/mobile-navbar";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

export default function FeaturedImage() {
  const [signedIn, setSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [promptText, setPromptText] = useState("");
  const [prediction, setPrediction] = useState<any>(null);
  const [textAutoFocus, setTextAutoFocus] = useState(false);
  const [error, setError] = useState(null);
  const [userSignedIn, setUserSignedIn] = useState<boolean>(false);
  // const supabase = createClient();

  const sleep = (ms: number | undefined) =>
    new Promise((r) => setTimeout(r, ms));

  const handlePromptText = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPromptText(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Enhance the user prompt with Claude
    const formData = new FormData();
    formData.append("prompt", `${promptText}`);
    // formData.append("game", `${game}`);
    const firstResponse = await fetch("/api/claude", {
      method: "POST",
      body: formData,
    });
    let enhancedPrompt = await firstResponse.json();

    // Send the enhanced prompt to Stable Diffusion
    const enhancedFormData = new FormData();
    enhancedFormData.append("prompt", `${enhancedPrompt.content[0].text}`);

    const response = await fetch("/api/predictions", {
      method: "POST",
      body: enhancedFormData,
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

      if ((await prediction.output?.length) === 3) {
        setIsLoading(false);
      }
    }
  };

  const handleDownload = async (imageUrl: string, index: number) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `featured_image_${index + 1}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <>
      <MobileNav />
      <div className="md:block">
        <div className="container h-full py-6 justify-center">
          <div className="grid h-full items-stretch gap-6">
            <div className="md:order-1">
              <div className="flex flex-col space-y-4">
                <div className="flex-1 gap-4 overflow-auto mt-6">
                  <div className="relative flex flex-col md:flex-row h-auto rounded-xl p-4 lg:col-span-2">
                    {/* Left side buttons */}
                    <div className="w-full md:w-16 mb-4 md:mb-0 flex flex-row md:flex-col justify-center items-center space-y-0 md:space-y-4 space-x-4 md:space-x-0">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() =>
                                handleDownload(prediction?.output[1], 0)
                              }
                              disabled={!prediction?.output}
                            >
                              <DownloadIcon className="h-4 w-4" />
                              <span className="sr-only">Download Image</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="right">
                            Download Image
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    {/* Left side buttons end*/}
                    <div className="flex-grow">
                      <div className="grid gap-4 relative w-full mb-8">
                        {prediction?.output ? (
                          <>
                            <Image
                              alt={`featured image`}
                              className="w-full h-auto rounded-xl"
                              width={305}
                              height={172}
                              src={prediction.output[1]}
                              style={{
                                aspectRatio: "305/172",
                                objectFit: "cover",
                              }}
                              unoptimized={true}
                            />
                            <div
                              className="absolute inset-0 bg-black bg-opacity-0 rounded-xl group-hover:bg-opacity-25 flex justify-center items-center transition-opacity duration-300"
                              style={{
                                aspectRatio: "305/172",
                              }}
                            >
                              <div className="absolute hidden group-hover:flex flex-col top-1 right-1"></div>
                            </div>
                          </>
                        ) : (
                          <div
                            className="rounded-xl border bg-muted w-full h-auto"
                            style={{
                              aspectRatio: "305/172",
                            }}
                          >
                            <div
                              className="flex items-center justify-center bg-gray-500 dark:bg-gray-700 w-full h-auto rounded-xl"
                              style={{
                                aspectRatio: "305/172",
                              }}
                            >
                              {isLoading ? (
                                <Loader2Icon className="animate-spin" />
                              ) : (
                                <ImageIcon />
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      <form
                        onSubmit={handleSubmit}
                        className="relative overflow-hidden rounded-lg border border-gray-500 dark:border-gray-700 bg-background focus-within:ring-1 focus-within:ring-ring"
                        x-chunk="dashboard-03-chunk-1"
                      >
                        <Label htmlFor="message" className="sr-only">
                          Message
                        </Label>
                        <Textarea
                          autoFocus={textAutoFocus}
                          id="message"
                          placeholder="Type in your prompt or describe what you want to create..."
                          value={promptText}
                          onChange={handlePromptText}
                          className="min-h-12 resize-none border-0  p-3 shadow-none focus-visible:ring-0"
                        />
                        <div className="flex items-center p-3 pt-0">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" disabled>
                                  <Paperclip className="size-4" />
                                  <span className="sr-only">Attach file</span>
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent side="top">
                                Attach File
                              </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" disabled>
                                  <Mic className="size-4" />
                                  <span className="sr-only">
                                    Use Microphone
                                  </span>
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent side="top">
                                Use Microphone
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          <Button
                            type="submit"
                            size="sm"
                            className="ml-auto gap-1.5"
                            disabled={isLoading || !promptText}
                          >
                            {isLoading ? "Creating..." : "Create Image"}
                            {isLoading ? (
                              <Loader2Icon className="size-3.5 animate-spin" />
                            ) : (
                              <CornerDownLeft className="size-3.5" />
                            )}
                          </Button>
                        </div>
                      </form>
                    </div>
                    {/* Right side buttons */}
                    <div className="w-full md:w-16 mt-4 md:mt-0 flex flex-row md:flex-col justify-center items-center space-y-0 md:space-y-4 space-x-4 md:space-x-0">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => {
                                /* Add edit functionality */
                              }}
                              disabled={!prediction?.output}
                            >
                              <LucideEdit className="h-4 w-4" />
                              <span className="sr-only">Edit Image</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="left">
                            Edit Image
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    {/* Right side buttons end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
