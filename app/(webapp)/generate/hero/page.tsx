import { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { getUser, getSubscription } from "@/utils/supabase/queries";
import { redirect } from "next/navigation";
import { MobileNav } from "@/components/mobile-navbar";
import HeroGenerator from "@/components/webapp/HeroGenerator";


export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  title: "Hero Image - Imaiger",
  description: "Generate hero image.",
};

export default async function HeroImage() {
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
      <HeroGenerator />
    </>
  );
}
