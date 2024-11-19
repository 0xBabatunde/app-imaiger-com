"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { checkoutWithStripe } from "@/utils/stripe/server";
import { getStripe } from "@/utils/stripe/client";

export default function SubscriptionRedirect() {
  const router = useRouter();

  useEffect(() => {
    const handleSubscriptionRedirect = async () => {
      const priceId = localStorage.getItem("priceId");

      if (!priceId) {
        router.push("/dashboard");
        return;
      }

      try {
        const { sessionId, errorRedirect } = await checkoutWithStripe(
          { id: priceId } as any,
          "/dashboard"
        );

        if (errorRedirect) {
          router.push(errorRedirect);
          return;
        }

        if (sessionId) {
          const stripe = await getStripe();
          stripe?.redirectToCheckout({ sessionId });
        }

        localStorage.removeItem("priceId");
      } catch (error) {
        console.error("Error redirecting to checkout:", error);
        router.push("/dashboard");
      }
    };

    handleSubscriptionRedirect();
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-amber-600"></div>
    </div>
  );
}
