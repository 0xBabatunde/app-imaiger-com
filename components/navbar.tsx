import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="w-full pb-6 lg:pb-0 sticky top-0 z-1">
      <div>
        <div className="absolute flex md:block px-4">
          <Link href="/">
            <Image
              src="/imaiger-logo.png"
              width={74}
              height={20}
              alt="imaiger logo"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
