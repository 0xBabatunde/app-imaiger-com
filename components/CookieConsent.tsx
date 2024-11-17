"use client";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

const CookieConsent = ({ open = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const accept = () => {
    setIsOpen(false);
    localStorage.setItem("consentGranted", "true");
    document.cookie =
      "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    setTimeout(() => {
      setHide(true);
    }, 700);
  };

  const decline = () => {
    setIsOpen(false);
    setTimeout(() => {
      setHide(true);
    }, 700);
  };

  useEffect(() => {
    try {
      setIsOpen(true);
      if (document.cookie.includes("cookieConsent=true")) {
        if (!open) {
          setIsOpen(false);
          setTimeout(() => {
            setHide(true);
          }, 700);
        }
      }
    } catch (e) {}
  }, [open]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-[200] w-full transition-transform duration-700 sm:bottom-4 sm:left-4 sm:max-w-md bg-white",
          !isOpen
            ? "translate-y-8 opacity-0 transition-[opacity,transform]"
            : "translate-y-0 opacity-100 transition-[opacity,transform]",
          hide && "hidden"
        )}
      >
        <div className="m-2 rounded-md bg-secondary">
          <div className="grid gap-2">
            <div className="flex h-14 items-center justify-between border-b border-border p-4">
              <h1 className="text-lg font-medium">We use cookies</h1>
              {/* <CookieIcon className="size-[1.2rem]" /> */}
            </div>
            <div className="p-4">
              <p className="text-sm font-normal">
                We use cookies to ensure you get the best experience on our
                website. For more information on how we use cookies, please see
                our cookie policy.
                <br />
                <br />
                <span className="text-xs">
                  By clicking &quot;
                  <span className="font-medium opacity-80">Accept</span>&quot;,
                  you agree to our use of cookies.
                </span>
                <br />
                <Link
                  href="/privacy"
                  className="text-sm text-brand-990 underline"
                >
                  Learn more.
                </Link>
              </p>
            </div>
            <div className="flex gap-2 border-t border-border bg-background/20 p-4 py-5">
              <Button onClick={accept} className="w-full">
                Accept
              </Button>
              <Button onClick={decline} className="w-full" variant="secondary">
                Decline
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CookieConsent;
