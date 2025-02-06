"use client"; // Ensure this is at the top of the file

import React from "react";
import { usePathname } from "next/navigation"; // Import usePathname

const Navbar = () => {
  const pathname = usePathname(); // Get the current path

  const links = ["Home", "Services", "Resume", "Work"];
  const links2 = ["Home", "Services", "Resume", "Work", "Contact"];

  const isActive = (link: string) => {
    // Check if the current path matches the link
    if (link === "Home") {
      return pathname === "/" ? "underline text-green-500 " : "";
    }
    return pathname === `/${link.toLowerCase()}`
      ? "underline text-green-500"
      : "";
  };

  return (
    <div className="main navbar bg-base-100 text-white justify-between">
      <div className="navbar-start pl-20p ">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links2.map((links2) => (
              <li key={links2}>
                <a
                  href={links2 === "Home" ? "/" : `/${links2.toLowerCase()}`} // Adjusting href paths
                  className={isActive(links2)} // Apply active styles dynamically
                >
                  {links2}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a className="text-xl">
          Mustafa<span className="text-green-500">.</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex mr-80">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => (
            <li key={link}>
              <a
                href={link === "Home" ? "/" : `/${link.toLowerCase()}`} // Adjusting href paths
                className={isActive(link)} // Apply active styles dynamically
              >
                {link}
              </a>
            </li>
          ))}
          <a
            href="/contact"
            className="rounded-full font-extrabold bg-green-400 p-2 text-black hover:text-black hover:bg-white ml-4"
          >
            Contact
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
