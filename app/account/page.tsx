import { Metadata } from "next";
import { Sidebar } from "@/components/sidebar";
import { Separator } from "@/components/ui/separator";
import { MobileNav } from "@/components/mobile-navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Account - Imaiger",
  description: "Manage your Imaiger account",
};

export default function AccountPage() {
  return (
    <>
      <MobileNav />
      <div className="md:block">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar className="hidden lg:block sticky top-0" />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="h-full px-4 py-6 lg:px-8">
                <div className="h-full flex-col border-none p-0 data-[state=active]:flex">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        Manage your Account
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Set up billing to generate, analyse and recreate as many
                        images as you like. You will be charged and invoiced
                        once a month.
                      </p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex flex-col items-start justify-between">
                    <p className="pb-4 mb-2">
                      Manage your subscription on Stripe.
                    </p>
                    <Link
                      href="https://billing.stripe.com/p/login/9AQ6oL4Zs9IR6eQdQQ"
                      target="_blank"
                    >
                      <Button>Open customer portal</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
