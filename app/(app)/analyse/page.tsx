import { Metadata } from "next";
import { Sidebar } from "@/components/sidebar";
import { WebpageEmptyPlaceholder } from "@/components/webpage-empty-placeholder";
import { MobileNav } from "@/components/mobile-navbar";

export const metadata: Metadata = {
  title: "Analyse Webpage - Imaiger",
  description: "Analyse images on your webpage with AI",
};

export default function AnalysePage() {
  return (
    <>
      <MobileNav />
      <div className="md:block">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar className="hidden lg:block sticky top-0" />
            <WebpageEmptyPlaceholder />
          </div>
        </div>
      </div>
    </>
  );
}
