"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Separator } from "./ui/separator";

export function WebpageEmptyPlaceholder() {
  const [isLoading, setIsLoading] = useState(false);
  const [siteUrl, setSiteUrl] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isMainDialog, setIsMainDialog] = useState(false);
  const [isDialog, setIsDialog] = useState(false);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSiteUrl(e.target.value);
  };

  const handleWebpageImport = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const fetchImages = await fetch("/api/get-images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: siteUrl,
        }),
      });
      if (!fetchImages.ok) {
        throw new Error("Network response was not ok");
      }
      const data: {
        error: any;
        urls: string[];
      } = await fetchImages.json();
      if (data.error) {
        setError(data.error);
      } else {
        setImages(data.urls);
      }
    } catch (error) {
      setError("Failed to fetch images");
    } finally {
      setIsLoading(false);
      setIsMainDialog(false);
      setIsDialog(false);
      setSiteUrl("");
    }
  };

  // useEffect(() => {
  //   if (url) {
  //     handleWebpageImport();
  //   }
  // }, [url]);

  return (
    <>
      <div className="col-span-3 lg:col-span-4 lg:border-l">
        <div className="h-full px-4 py-6 lg:px-8">
          <div className="space-between flex items-center">
            <div className="ml-auto mr-4">
              <Dialog>
                <DialogTrigger>
                  {/* <Button> */}
                  <div
                    onClick={() => setIsMainDialog(true)}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
                  >
                    <PlusCircledIcon className="mr-2 h-4 w-4" />
                    New Webpage
                  </div>
                  {/* </Button> */}
                </DialogTrigger>
                {isMainDialog && (
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Webpage</DialogTitle>
                      <DialogDescription>
                        Copy and paste the webpage URL to import.
                      </DialogDescription>
                    </DialogHeader>
                    <>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="url">Webpage URL</Label>
                          <Input
                            type={"url"}
                            name="url"
                            id="url"
                            placeholder="https://example.com/example-web-page"
                            value={siteUrl}
                            onChange={handleUrlChange}
                          />
                        </div>
                      </div>
                    </>
                    <DialogFooter>
                      <Button
                        disabled={!siteUrl || isLoading}
                        onClick={() => handleWebpageImport()}
                      >
                        {isLoading ? "Importing" : "Import Webpage"}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                )}
              </Dialog>
            </div>
          </div>
          <div className="h-full flex-col border-none p-0 data-[state=active]:flex">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Analyse Webpage
                </h2>
                <p className="text-sm text-muted-foreground">
                  Analyse images on your webpage with AI
                </p>
              </div>
            </div>
            <Separator className="my-4" />
            {images.length > 0 && (
              // <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border">
              <div className="flex justify-center py-8">
                <div className="grid grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="group rounded-lg border-4 border-transparent hover:border-amber-600 transition-colors duration-300 px-1 py-1"
                    >
                      {/* <Link href={"/"}> */}
                      <div className="relative">
                        <Image
                          alt="Fashionable person with red background"
                          className="w-full h-auto rounded-t-lg"
                          height="547"
                          src={image}
                          style={{
                            aspectRatio: "634/547",
                            objectFit: "cover",
                          }}
                          width="634"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 rounded-t-lg group-hover:bg-opacity-25 flex justify-center items-center transition-opacity duration-300" />
                      </div>
                      {/* </Link> */}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!images.length && (
              <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
                <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                  <Dialog>
                    <DialogTrigger>
                      <svg
                        width="48"
                        height="48"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 2048 2048"
                        className="text-muted-foreground"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setIsDialog(true)}
                      >
                        <path
                          fill="#6b7280"
                          d="M1664 1664h256v128h-256v256h-128v-256h-256v-128h256v-256h128v256zM384 128v1536h768v128H256V0h859l549 549v731h-128V640h-512V128H384zm768 91v293h293l-293-293z"
                        />
                      </svg>
                    </DialogTrigger>

                    <h3 className="mt-4 text-lg font-semibold">
                      No webpage added
                    </h3>
                    <p className="mb-4 mt-2 text-sm text-muted-foreground">
                      You have not added any webpage. Click + to add.
                    </p>
                    {isDialog && (
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add Webpage</DialogTitle>
                          <DialogDescription>
                            Copy and paste the webpage URL to import.
                          </DialogDescription>
                        </DialogHeader>
                        <>
                          <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                              <Label htmlFor="url">Webpage URL</Label>
                              <Input
                                type={"url"}
                                name="url"
                                id="url"
                                placeholder="https://example.com/example-web-page"
                                value={siteUrl}
                                onChange={handleUrlChange}
                              />
                            </div>
                          </div>
                        </>
                        <DialogFooter>
                          <Button
                            disabled={!siteUrl || isLoading}
                            onClick={() => handleWebpageImport()}
                          >
                            {isLoading ? "Importing" : "Import Webpage"}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    )}
                  </Dialog>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
