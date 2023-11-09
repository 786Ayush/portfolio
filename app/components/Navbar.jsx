"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MenuOverlay from "./MenuOverlay";


const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbaropen, setnavbaropen] = useState(false);
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4  flex-wrap items-center justify-between mx-auto px-4 py-2">
        
        <Link
          href={"/"}
          className="text-3xl md:text-5xl text-white flex-semibold"
        >
          <img src="/logo-removebg-preview.png" alt="logo" class="md:h-24 lg:h-28  h-16"/>
        </Link>
        <div className="mobile-menu block md:hidden">
          {navbaropen ? (
            <button
              onClick={() => setnavbaropen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setnavbaropen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden  md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title}></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {
        navbaropen?
        <MenuOverlay links={navLinks}/>:
        null
      }
    </nav>
  );
};

export default Navbar;
