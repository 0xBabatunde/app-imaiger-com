"use client";

import * as React from "react";

//import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
//import { useRouter } from "next-nprogress-bar";

//import type { Database } from "@/lib/database.types";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  //const router = useRouter();
  //const supabase = createClientComponentClient<Database>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function handleSignUp(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  /*async function handleSignUp(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.push("/verify");
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  async function handleGoogleSignUp() {
    setIsLoading(true);
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
    setIsLoading(false);
  }*/

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form method="post" onSubmit={handleSignUp}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              required
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="••••••••••"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              required
            />
          </div>
          <Button
            type="submit"
            formAction="/auth/register"
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  );
}
