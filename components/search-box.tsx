"use client";
import React, { useState } from "react";
import { useRouter } from "next-nprogress-bar";

import { Icons } from "@/components/icons";

export default function SearchBox() {
  const [keyword, setKeyword] = useState("");
  const [placeholder] = useState("Search...");
  const [isLoading, setIsLoading] = React.useState<boolean>(false); // Add loading state
  const router = useRouter();

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setKeyword(e.target.value);
  };

  const handleKeyUp = (e: { code: string }) => {
    if (e.code === "Enter") {
      handleSubmit();
    }
  };

  async function handleSubmit() {
    setIsLoading(true); // Set loading state to true
    router.push(`/search/${keyword}`.replace(/\s+|,|--/g, "-").toLowerCase());
    setIsLoading(false); // Set loading state back to false when done
  }

  return (
    <div className="sticky top-20 z-10">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
          className="h-5 w-5 text-gray-500 dark:text-gray-400"
        >
          <path
            fill="#000000"
            d="m479.6 399.716l-81.084-81.084l-62.368-25.767A175.014 175.014 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.034 175.034 0 0 0 101.619-32.377l25.7 62.2l81.081 81.088a56 56 0 1 0 79.2-79.195ZM48 192c0-79.4 64.6-144 144-144s144 64.6 144 144s-64.6 144-144 144S48 271.4 48 192Zm408.971 264.284a24.028 24.028 0 0 1-33.942 0l-76.572-76.572l-23.894-57.835l57.837 23.894l76.573 76.572a24.028 24.028 0 0 1-.002 33.941Z"
          ></path>
        </svg>
      </div>
      <input
        className="block w-full p-4 pl-10 text-lg font-Poppins text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-amber-600 focus:border-amber-600 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-amber-600 dark:focus:border-amber-600"
        type="search"
        id="username-search"
        value={keyword}
        onChange={handleChange}
        placeholder={placeholder}
        onKeyUp={handleKeyUp}
        disabled
      />
      <button
        type="submit"
        className={`text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-black/80 focus:ring-4 focus:ring-amber-600 focus:outline-none font-medium rounded-lg text-lg px-4 py-2 ${
          isLoading ? "cursor-not-allowed opacity-50" : ""
        }`} // Add loading styles
        onClick={() => {
          handleSubmit();
        }}
        disabled
        // disabled={isLoading} // Disable the button when loading
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          "Search"
        )}
        {/* Change button text based on loading state */}
      </button>
    </div>
  );
}
