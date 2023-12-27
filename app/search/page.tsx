import { Metadata } from "next";
import SearchBox from "@/components/search-box";
import { Sidebar } from "@/components/sidebar";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Search - Imaiger",
  description: "Find millions of images generated with AI",
};

export default function SearchPage() {
  return (
    <div className="md:block">
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar className="hidden lg:block sticky top-0" />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="h-full px-4 py-6 lg:px-8">
                <div className="h-full flex-col border-none p-0 data-[state=active]:flex">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        AI Image Search
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Find millions of images generated with AI
                      </p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <SearchBox />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
