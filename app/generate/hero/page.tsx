import { Metadata } from "next";
import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { WebpageEmptyPlaceholder } from "@/components/webpage-empty-placeholder";
import { MobileNav } from "@/components/mobile-navbar";
import { PlusCircledIcon } from "@radix-ui/react-icons";

export const metadata: Metadata = {
  title: "Generate Hero Image - Imaiger",
  description: "Generate hero images for your web project",
};

export default function HeroImage() {
  return (
    <>
      <MobileNav />
      <div className="md:block">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
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
                <div className="h-full flex-col border-none p-0 data-[state=active]:flex">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        Generate Hero Image
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Generate hero images for your web project
                      </p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <WebpageEmptyPlaceholder />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
