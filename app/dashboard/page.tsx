import { Metadata } from "next";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { ImageArtwork } from "@/components/image-artwork";
import { Sidebar } from "@/components/sidebar";
import { generateImages, madeForYouImages } from "@/data/dashboard-images";
import { MobileNav } from "@/components/mobile-navbar";
import NavBar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Dashboard - Imaiger",
  description: "Imaiger dashboard to generate AI images and analyze webpage.",
};

export default function DashboardPage() {
  return (
    <>
      <MobileNav />
      <div className="md:block">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar className="hidden lg:block sticky top-0" />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="h-full px-4 py-6 lg:px-8">
                <div className="space-between flex items-center">
                  <div className="ml-auto mr-4">
                    <Button>
                      <PlusCircledIcon className="mr-2 h-4 w-4" />
                      New Image
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Generate Image
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Generate AI images for your website. Select from the
                      options below.
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="relative">
                  <ScrollArea>
                    <div className="flex space-x-4 pb-4">
                      {generateImages.map((image) => (
                        <ImageArtwork
                          key={image.name}
                          image={image}
                          className="w-[250px]"
                          aspectRatio="portrait"
                          width={250}
                          height={330}
                        />
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </div>
                <div className="mt-6 space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Made for You
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Ready made AI presets. Updated daily.
                  </p>
                </div>
                <Separator className="my-4" />
                <div className="relative">
                  <ScrollArea>
                    <div className="flex space-x-4 pb-4">
                      {madeForYouImages.map((image) => (
                        <ImageArtwork
                          key={image.name}
                          image={image}
                          className="w-[150px]"
                          aspectRatio="square"
                          width={150}
                          height={150}
                        />
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
