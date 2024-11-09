import Link from "next/link";
import React from "react";
import { GiThreeLeaves } from "react-icons/gi";

const Navbar = () => {
  return (
    <div>
      <header className="text-[#F6FCDF] bg-[#31511E] body-font z-50 relative">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <div
              className="w-10 h-10 text-[#F6FCDF] p-2 bg-[#859F3D] rounded-full text-2xl
      items-center"
            >
              <GiThreeLeaves />
            </div>
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />

            <span className="ml-3 text-xl">Smart Agro</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href={"/"}
              className="mr-7 hover:underline underline-offset-8"
            >
              Home
            </Link>
            <Link
              href={"/About"}
              className="mr-7 hover:underline underline-offset-8"
            >
              About Us
            </Link>
            <Link
              href={"/Products"}
              className="mr-7 hover:underline underline-offset-8"
            >
              Our Products
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
