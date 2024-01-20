"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useRouter } from "next-nprogress-bar";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [generate, setGenerate] = useState(false);
  const [analyse, setAnalyse] = useState(false);
  const [search, setSearch] = useState(false);
  //const [profile, setProfile] = useState(false);
  //const [settings, setSettings] = useState(false);
  //const [suggestFeature, setSuggestFeature] = useState(false);
  //const [reportBug, setReportBug] = useState(false);

  const supabase = createClientComponentClient();

  const handleClick = async (event: any) => {
    switch (event.target.id) {
      case "Generate":
        router.push("/dashboard");
        break;
      case "Analyse":
        router.push("/analyse");
        break;
      case "Search":
        router.push("/search");
        break;
      case "Logout":
        await supabase.auth.signOut();
        router.refresh();
        break;
      case "Support":
        router.push("mailto:support@imaiger.com");
        break;
    }
  };

  useEffect(() => {
    if (pathname === "/dashboard") {
      setGenerate(true);
    } else if (pathname === "/analyse") {
      setAnalyse(true);
    } else if (pathname === "/search") {
      setSearch(true);
    }
  }, [pathname]);

  return (
    <div className="sticky top-20">
      <div className={cn("pb-12", className)}>
        {/*<Link href="/">
          <Image
            src="/imaiger-logo.png"
            width={94}
            height={40}
            alt="imaiger logo"
            className="px-3"
          />
  </Link>*/}
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Dashboard
            </h2>
            <div className="space-y-1">
              <Button
                id="Generate"
                variant={generate ? "secondary" : "ghost"}
                onClick={handleClick}
                className="w-full justify-start"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
                <div
                  id="Generate"
                  className="flex w-full justify-between items-center"
                >
                  <span id="Generate">Generate</span>
                  <HoverCard>
                    <HoverCardTrigger>
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
                    </HoverCardTrigger>
                    <HoverCardContent className="w-50">
                      <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                          <p className="text-sm">This is a Pro feature</p>
                          <div className="flex items-center pt-2">
                            <span className="text-xs text-muted-foreground">
                              <a
                                href="https://imaiger.com/pricing"
                                target="_blank"
                              >
                                Subscribe to Pro
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </Button>
              <Button
                id="Analyse"
                variant={analyse ? "secondary" : "ghost"}
                onClick={handleClick}
                className="w-full justify-start"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
                <div
                  id="Analyse"
                  className="flex w-full justify-between items-center"
                >
                  <span id="Analyse">Analyse</span>
                  <HoverCard>
                    <HoverCardTrigger>
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
                    </HoverCardTrigger>
                    <HoverCardContent className="w-50">
                      <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                          <p className="text-sm">This is a Pro feature</p>
                          <div className="flex items-center pt-2">
                            <span className="text-xs text-muted-foreground">
                              <a
                                href="https://imaiger.com/pricing"
                                target="_blank"
                              >
                                Subscribe to Pro
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </Button>
              <Button
                id="Search"
                variant={search ? "secondary" : "ghost"}
                onClick={handleClick}
                className="w-full justify-start"
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path
                    fill="#000000"
                    d="m479.6 399.716l-81.084-81.084l-62.368-25.767A175.014 175.014 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.034 175.034 0 0 0 101.619-32.377l25.7 62.2l81.081 81.088a56 56 0 1 0 79.2-79.195ZM48 192c0-79.4 64.6-144 144-144s144 64.6 144 144s-64.6 144-144 144S48 271.4 48 192Zm408.971 264.284a24.028 24.028 0 0 1-33.942 0l-76.572-76.572l-23.894-57.835l57.837 23.894l76.573 76.572a24.028 24.028 0 0 1-.002 33.941Z"
                  ></path>
                </svg>
                Search
              </Button>
            </div>
          </div>
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Manage
            </h2>
            <div className="space-y-1">
              <Button
                id="Profile"
                variant="ghost"
                className="w-full justify-start"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Profile
              </Button>
              <Button
                id="Settings"
                variant="ghost"
                className="w-full justify-start"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
                Settings
              </Button>
              <Button
                id="Support"
                variant="ghost"
                className="w-full justify-start"
                onClick={handleClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Support
              </Button>
              <Button
                id="Feature"
                variant="ghost"
                className="w-full justify-start"
              >
                <svg
                  viewBox="0 0 32 32"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.813 2.406L5.405 3.812L7.5 5.906L8.906 4.5L6.812 2.406zm18.375 0L23.093 4.5L24.5 5.906l2.094-2.093l-1.407-1.407zM16 3.03c-.33.004-.664.023-1 .064c-.01 0-.02-.002-.03 0c-4.056.465-7.284 3.742-7.845 7.78c-.448 3.25.892 6.197 3.125 8.095a5.238 5.238 0 0 1 1.75 3.03v6h2.28c.348.597.983 1 1.72 1s1.372-.403 1.72-1H20v-4h.094v-1.188c0-1.466.762-2.944 2-4.093C23.75 17.06 25 14.705 25 12c0-4.94-4.066-9.016-9-8.97zm0 2c3.865-.054 7 3.11 7 6.97c0 2.094-.97 3.938-2.313 5.28l.032.032A7.792 7.792 0 0 0 18.279 22h-4.374c-.22-1.714-.955-3.373-2.344-4.563c-1.767-1.5-2.82-3.76-2.468-6.312c.437-3.15 2.993-5.683 6.125-6.03a6.91 6.91 0 0 1 .78-.064zM2 12v2h3v-2H2zm25 0v2h3v-2h-3zM7.5 20.094l-2.094 2.093l1.407 1.407L8.905 21.5L7.5 20.094zm17 0L23.094 21.5l2.093 2.094l1.407-1.407l-2.094-2.093zM14 24h4v2h-4v-2z" />
                </svg>
                Suggest Idea
              </Button>
              <Button id="Bug" variant="ghost" className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                  <circle cx="17" cy="7" r="5" />
                </svg>
                Report Bug
              </Button>
              <Button
                id="Logout"
                onClick={handleClick}
                variant="ghost"
                className="w-full justify-start"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                Log out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
