import { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { getUser, getSubscription } from "@/utils/supabase/queries";
import { redirect } from "next/navigation";
import { MobileNav } from "@/components/mobile-navbar";
import BackgroundGenerator from "@/components/webapp/BackgroundGenerator";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  title: "Background Image - Imaiger",
  description: "Generate background image.",
};

export default async function BackgroundImage() {
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
      <BackgroundGenerator />
    </>
  );
}
