import { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { getUser, getSubscription } from "@/utils/supabase/queries";
import { redirect } from "next/navigation";
import { MobileNav } from "@/components/mobile-navbar";
import SocialGenerator from "@/components/webapp/SocialGenerator";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  title: "Social Image - Imaiger",
  description: "Generate social image.",
};

export default async function SocialImage() {
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
      <SocialGenerator />
    </>
  );
}
