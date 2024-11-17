import MarketingNavBar from "@/components/marketing/NavBar";
import FooterBar from "@/components/marketing/FooterBar";
import PricingTable from "@/components/marketing/PricingTable";
import Faq from "@/components/marketing/Faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Imaiger",
  description:
    "Simple, transparent pricing. Unlock all features in the pro plan",
};

export default function PricingPage() {
  return (
    <>
      <MarketingNavBar />
      <section className="min-h-screen pt-10">
        <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[52rem]">
          <h2 className="font-Poppins text-3xl font-bold text-center text-white leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl">
            Try for free, for 7 days
          </h2>
          <p className="font-Poppins text-center mb-6 leading-normal text-slate-400 sm:text-lg sm:leading-7">
            Unlock all features including unlimited AI image generations.
          </p>
        </div>
        <PricingTable />
        <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[52rem]">
          <p className="font-Poppins text-center leading-normal text-slate-400 sm:leading-7">
            Imaiger is currently in beta.
          </p>
        </div>
        <Faq />
      </section>
      <FooterBar />
    </>
  );
}
