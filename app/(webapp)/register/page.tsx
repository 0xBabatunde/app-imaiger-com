import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/user-register-form";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getRedirectMethod } from "@/utils/auth-helpers/settings";

export const metadata: Metadata = {
  title: "Register - Imaiger",
  description: "Create a new Imaiger account.",
};

export default function SignUp() {
  const redirectMethod = getRedirectMethod();

  // Check if the user is already logged in and redirect to the dashboard page if so
  // const supabase = createClient();

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // if (user) {
  //   return redirect("/dashboard");
  // } else if (!user) {
  //   return redirect("/register");
  // }

  return (
    <>
      <div className="container grid relative min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/signin"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-black">
            <Image
              src="/register-on-imaiger.webp"
              alt="imaiger register page"
              fill
              className="w-full h-full object-cover"
            />{" "}
          </div>
          <div className="flex md:block absolute md:left-8">
            <Link href="/">
              <Image
                src="/imaiger-logo.png"
                width={74}
                height={20}
                alt="imaiger logo"
                className="hover:cursor-pointer"
              />
            </Link>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This platform has saved me countless hours of work and
                helped me create stunning AI images faster than ever
                before.&rdquo;
              </p>
              <footer className="text-sm">Sally May</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Fill the form below to create your account
              </p>
            </div>
            <UserAuthForm redirectMethod={redirectMethod} />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="https://imaiger.com/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="https://imaiger.com/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
