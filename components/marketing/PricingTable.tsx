import Link from "next/link";
import React from "react";

export default function PricingTable() {
  return (
    <div className="grid place-content-center">
      <div className="sm:grid w-full sm:grid-cols-2 gap-6 rounded-md p-8">
        <div className="flex flex-col gap-y-5 p-6">
          <div className="upper-part flex flex-col gap-y-4">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-red-100">
              <div className="h-3 w-3 rounded-full bg-zinc-100"></div>
            </div>
            <div className="account-and-description">
              <h3 className="font-semibold text-white">Standard</h3>
              <p className="text-sm text-slate-400">
                Perfect plan for Starters
              </p>
            </div>

            <div className="tier-and-description">
              <h2 className="text-2xl text-white font-extrabold">$19</h2>
              <p className="text-sm text-slate-400">/ month</p>
            </div>
          </div>

          <Link href={"https://buy.stripe.com/6oEeWY3Aw4WU3h64gg"}>
            <button className="w-full rounded-lg border border-amber-600 px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring">
              Try for Free
            </button>
          </Link>

          <div className="flex flex-col gap-y-1">
            <div className="flex items-center gap-x-3">
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
              <p className="text-sm text-slate-400">Unlimited Images</p>
            </div>
            <div className="flex items-center gap-x-3">
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
              <p className="text-sm text-slate-400">Unlimited Searches</p>
            </div>
            <div className="flex items-center gap-x-3">
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
              <p className="text-sm text-slate-400">Analyse Webpages</p>
            </div>
            <div className="flex items-center gap-x-3">
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
              <p className="text-sm text-slate-400">Custom Edits</p>
            </div>
            <div className="flex items-center gap-x-3">
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
              <p className="text-sm text-slate-400">Premium Support</p>
            </div>
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
              <h3 className="font-semibold">Standard +</h3>
              <p className="text-sm">Perfect plan for Professionals</p>
            </div>
            <div className="tier-and-description">
              <h2 className="text-2xl font-extrabold">$69</h2>
              <p className="text-sm">/ year</p>
            </div>
          </div>

          <Link href={"https://buy.stripe.com/fZe3eg0okexu8Bq6oq"}>
            <button className="w-full rounded-lg border border-white px-12 py-3 text-sm font-medium text-black bg-white hover:bg-black hover:text-white focus:outline-none focus:ring">
              Try for Free
            </button>
          </Link>

          <div className="flex flex-col gap-y-1">
            <div className="flex items-center gap-x-3">
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
              <p className="text-sm">Unlimited Images</p>
            </div>
            <div className="flex items-center gap-x-3">
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
              <p className="text-sm">Unlimited Searches</p>
            </div>
            <div className="flex items-center gap-x-3">
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
              <p className="text-sm">Analyse Webpages</p>
            </div>
            <div className="flex items-center gap-x-3">
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
              <p className="text-sm">Custom Edits</p>
            </div>
            <div className="flex items-center gap-x-3">
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
              <p className="text-sm">Premium Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
