"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] border-b border-gray-800 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo1.png" alt="logo" className="h-14 md:h-16 object-contain" />
          <span className="ml-2 text-white font-bold text-xl md:text-2xl hidden md:inline">
            Ayush Gupta
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="p-2 rounded-md border border-gray-500 text-gray-200 hover:text-white hover:border-white transition"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-xl text-white z-40">
          {navLinks.map((link, idx) => (
            <NavLink
              key={idx}
              href={link.path}
              title={link.title}
              onClick={() => setNavbarOpen(false)}
            />
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
