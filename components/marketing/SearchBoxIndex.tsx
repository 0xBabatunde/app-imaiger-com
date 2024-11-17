"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import styles from "../styles/Home.module.css";

export default function SearchBoxIndex() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push("/pricing");
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <div className="sticky top-1 z-10 mb-12 md:pb-12">
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyUp={handleSubmit}
          autoFocus={true}
          placeholder="Search..."
          className="w-[522px] h-12 text-[inherit] [outline:0] shadow-[2px_4px_8px_0_rgba(0,0,0,0.15)] transition-all duration-300 ease-[ease] m-auto pl-7 pr-[58px] py-0 rounded-[30px] border-[none] border-[1.3px] border-solid border-[#f2f2f2];"
        />
      </div>
    </>
  );
}
