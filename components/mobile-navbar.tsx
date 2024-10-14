"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Icons } from "@/components/icons";

export function MobileNav() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  return (
    <>
      <div className="sticky top-0 z-40 border-b bg-background flex flex-row flex-1 h-16 items-center justify-between mx-2">
        <Link href="/">
          <Image
            src="/imaiger-logo.png"
            width={74}
            height={20}
            alt="imaiger logo"
          />
        </Link>

        {/* <div className="mx-auto flex items-center space-x-2">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#6b7280"
              d="M12 13a1.49 1.49 0 0 0-1 2.61V17a1 1 0 0 0 2 0v-1.39A1.49 1.49 0 0 0 12 13Zm5-4V7A5 5 0 0 0 7 7v2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3ZM9 7a3 3 0 0 1 6 0v2H9Zm9 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z"
            />
          </svg>
          <Link
            id="upgrade"
            href="https://imaiger.com/pricing"
            target="_blank"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Upgrade to unlock
          </Link>
        </div> */}

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Icons.avatar className="h-8 w-8" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <div className="flex items-center justify-start gap-2 p-2">
              <div className="flex flex-col space-y-1 leading-none">
                <p className="font-medium">Welcome!</p>
                <p className="w-[200px] truncate text-sm text-muted-foreground">
                  User
                </p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard">Generate</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/analyse">Analyse</Link>
            </DropdownMenuItem>
            {/* <DropdownMenuItem asChild>
              <Link href="/search">Search</Link>
            </DropdownMenuItem> */}
            <DropdownMenuItem asChild>
              <Link
                // href="/account"
                href="https://billing.stripe.com/p/login/9AQ6oL4Zs9IR6eQdQQ"
                target="_blank"
              >
                Billing
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onSelect={(event) => {
                event.preventDefault();
                supabase.auth.signOut();
                router.refresh();
              }}
            >
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
