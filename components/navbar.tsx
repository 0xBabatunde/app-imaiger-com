import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="w-full sticky top-0 z-10 flex md:block px-4">
      <Link href="/">
        <Image
          src="/imaiger-logo.png"
          width={74}
          height={20}
          alt="imaiger logo"
        />
      </Link>
    </div>
  );
};

export default NavBar;
