import { Metadata } from "next";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/mobile-navbar";
import MadeForYou from "@/components/MadeForYou";

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
                  <MadeForYou />
                </div>
                <div className="mt-6 space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Made for You
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Ready made AI presets and prompts. Coming Soon.
                  </p>
                </div>
                <Separator className="my-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
