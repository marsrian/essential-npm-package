import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <Image
          src="/logo.jpg"
          width={50}
          height={50}
          alt="logo"
          className="block md:hidden w-7 h-7 rounded-full"
        />
        <h3 className="hidden md:block text-white text-lg font-bold">
          Essential React Package
        </h3>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </li>
          <ModeToggle />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
