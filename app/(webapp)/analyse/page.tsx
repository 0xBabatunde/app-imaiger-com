import { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { getSubscription, getUser } from "@/utils/supabase/queries";
import { Sidebar } from "@/components/sidebar";
import { WebpageEmptyPlaceholder } from "@/components/webpage-empty-placeholder";
import { MobileNav } from "@/components/mobile-navbar";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  title: "Analyse Webpage - Imaiger",
  description: "Analyse images on your webpage with AI",
};

export default async function AnalysePage() {
  const supabase = createClient();
  const [user, subscription] = await Promise.all([
    getUser(supabase),
    getSubscription(supabase),
  ]);

  if (!user) {
    return redirect("/signin");
  }
  if (!subscription) {
    return redirect("/pricing");
  }
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
