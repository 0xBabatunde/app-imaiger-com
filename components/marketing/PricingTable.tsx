"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { CheckCircle2, BadgeDollarSign } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Label } from "@/components/ui/label";
// import Link from "next/link";

import type { Tables } from "@/types_db";
import { getStripe } from "@/utils/stripe/client";
import { checkoutWithStripe } from "@/utils/stripe/server";
import { getErrorRedirect } from "@/utils/helpers";
import { User } from "@supabase/supabase-js";
import { useRouter, usePathname } from "next/navigation";
// import { Card, CardContent, CardTitle } from "@/components/ui/card";

type Subscription = Tables<"subscriptions">;
type Product = Tables<"products">;
type Price = Tables<"prices">;
interface ProductWithPrices extends Product {
  prices: Price[];
}

interface PriceWithProduct extends Price {
  products: Product | null;
}
interface SubscriptionWithProduct extends Subscription {
  prices: PriceWithProduct | null;
}
interface Props {
  user: User | null | undefined;
  products: ProductWithPrices[];
  subscription: SubscriptionWithProduct | null;
}
export interface PricingTierFrequency {
  id: string;
  value: string;
  label: string;
  priceSuffix: string;
  priceUrl: Price[];
}

export interface PricingTier {
  name: string;
  id: string;
  href: string;
  discountPrice: string | Record<string, string>;
  price: string | Record<string, string>;
  description: string | React.ReactNode;
  features: string[];
  featured?: boolean;
  highlighted?: boolean;
  cta: string;
  soldOut?: boolean;
}

export const tiers: PricingTier[] = [
  {
    name: "Standard",
    id: "0",
    href: "/subscribe",
    price: { "1": "$19", "2": "$69" },
    discountPrice: { "1": "", "2": "" },
    description: `Perfect plan for Starters`,
    features: [
      "Unlimited Images",
      "Unlimited Searches",
      "Analyse Webpages",
      "Custom Edits",
      "Premium Support",
    ],
    featured: false,
    highlighted: false,
    soldOut: false,
    cta: "Try for Free",
  },
];

export default function PricingTable({ user, products, subscription }: Props) {
  const router = useRouter();
  const [priceIdLoading, setPriceIdLoading] = useState<string>();
  const currentPath = usePathname();
  const monthlyPrice = products[0]?.prices?.[0];
  const yearlyPrice = products[0]?.prices?.[1];

  const tier = tiers[0];

  const frequencies: PricingTierFrequency[] = [
    {
      id: "1",
      value: "1",
      label: "Monthly",
      priceSuffix: "month",
      priceUrl: monthlyPrice ? [monthlyPrice] : [],
    },
    {
      id: "2",
      value: "2",
      label: "Annually",
      priceSuffix: "year",
      priceUrl: yearlyPrice ? [yearlyPrice] : [],
    },
  ];
  const [frequency, setFrequency] = useState(frequencies[0]);

  const handleStripeCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);

    if (!user) {
      setPriceIdLoading(undefined);
      return router.push("/register");
    }

    const { errorRedirect, sessionId } = await checkoutWithStripe(
      price,
      currentPath
    );

    if (errorRedirect) {
      setPriceIdLoading(undefined);
      return router.push(errorRedirect);
    }

    if (!sessionId) {
      setPriceIdLoading(undefined);
      return router.push(
        getErrorRedirect(
          currentPath,
          "An unknown error occurred.",
          "Please try again later or contact a system administrator."
        )
      );
    }

    const stripe = await getStripe();
    stripe?.redirectToCheckout({ sessionId });

    setPriceIdLoading(undefined);
  };

  return (
    <div className="grid place-content-center">
      <div className="sm:grid w-full sm:grid-cols-2 gap-6 rounded-md p-8">
        <div className="flex flex-col gap-y-5 p-6">
          <div className="upper-part flex flex-col gap-y-4">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-red-100">
              <div className="h-3 w-3 rounded-full bg-zinc-100"></div>
            </div>
            <div className="account-and-description">
              <h3 className="font-semibold text-gray-900">Creator</h3>
              <p className="text-sm text-gray-600">Perfect plan for Creators</p>
            </div>

            <div className="tier-and-description">
              <h2 className="text-2xl text-gray-900 font-extrabold">$19</h2>
              <p className="text-sm text-gray-600">/ month</p>
            </div>
          </div>

          <Button
            className="w-full rounded-lg border border-amber-600 px-12 py-3 text-sm font-medium text-white hover:bg-amber-600 hover:text-white focus:outline-none focus:ring"
            onClick={() => {
              const selectedPrice = frequencies[0].priceUrl[0];
              if (selectedPrice) {
                handleStripeCheckout(selectedPrice);
              }
            }}
          >
            {subscription ? "Manage" : "Try for Free"}
          </Button>

          <div className="flex flex-col gap-y-1">
            {tier.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="h-4 w-4 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <p className="text-sm text-gray-600">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-5 rounded-lg bg-gray-900 p-6 text-white">
          <div className="upper-part flex flex-col gap-y-4">
            <div className="flex items-center justify-between">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-zinc-100">
                <div className="h-3 w-3 rounded-full bg-blue-600"></div>
              </div>
              <p className="rounded-md bg-blue-500 px-2 py-1 text-xs">
                Great Deal: 70% off
              </p>
            </div>
            <div className="account-and-description">
              <h3 className="font-semibold">Creator +</h3>
              <p className="text-sm">Perfect plan for Professionals</p>
            </div>
            <div className="tier-and-description">
              <h2 className="text-2xl font-extrabold">$69</h2>
              <p className="text-sm">/ year</p>
            </div>
          </div>

          <Button
            className="w-full rounded-lg border border-white px-12 py-3 text-sm font-medium text-black bg-white hover:bg-black hover:text-white focus:outline-none focus:ring"
            onClick={() => {
              const selectedPrice = frequencies[1].priceUrl[0];
              if (selectedPrice) {
                handleStripeCheckout(selectedPrice);
              }
            }}
          >
            {subscription ? "Manage" : "Try for Free"}
          </Button>

          <div className="flex flex-col gap-y-1">
            {tier.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="5"
                  stroke="currentColor"
                  className="h-4 w-4 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <p className="text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
