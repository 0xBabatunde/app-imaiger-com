"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const MarketingNavBar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="w-full bg-white shadow">
      <nav className="container mx-auto">
        <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <Image
                  src="/imaiger-logo.png"
                  width={74}
                  height={20}
                  alt="imaiger logo"
                />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-evenly space-y-8 md:flex md:space-x-8 md:space-y-0">
                <li className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                  <Link href="/ai-image-search">Search</Link>
                </li>
                <li className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                  <Link href="/ai-image-generator">Generate</Link>
                </li>
                <li className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                  <Link href="/#analyse">Analyse</Link>
                </li>
                <li className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                  <Link href="/pricing">Pricing</Link>
                </li>
                <Link href="/signin" rel="nofollow noreferrer">
                  <button
                    className="px-6 py-2.5 rounded-full bg-amber-600 text-white font-medium text-sm hover:bg-amber-700 transition-colors shadow-sm"
                    type="button"
                  >
                    Sign In
                  </button>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MarketingNavBar;
