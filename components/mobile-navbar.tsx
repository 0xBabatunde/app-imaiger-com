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
            <DropdownMenuItem asChild>
              <Link href="/search">Search</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#">Billing</Link>
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
