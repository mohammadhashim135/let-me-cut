"use client";

import Link from "next/link"; // ✅ Import Next.js Link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faSun, faMoon, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "@/context/DarkModeContext"; // Import the context
import { useState } from "react";

const Navbar = () => {
  const { darkMode, toggleTheme } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="p-4 flex justify-between items-center bg-transparent">
        {/* Logo */}
        <div className={`logo font-bold text-xl ${darkMode ? "text-violet-300" : "text-violet-900"}`}>
          <Link href="/">
            <span className="cursor-pointer">
              <FontAwesomeIcon icon={faLink} /> LetMeCut
            </span>
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className={`text-xl ${darkMode ? "text-violet-300" : "text-violet-900"}`}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-4 font-bold ml-4 ${isMenuOpen ? "flex" : "hidden"} md:flex`}>
          <li>
            <Link
              href="/"
              className={`hover:text-violet-500 dark:hover:text-violet-400 ${darkMode ? "text-violet-300" : "text-violet-900"}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about" // ✅ Navigates to the About page
              className={`hover:text-violet-500 dark:hover:text-violet-400 ${darkMode ? "text-violet-300" : "text-violet-900"}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/shorten" // ✅ Navigates to the Shorten URL page
              className={`hover:text-violet-500 dark:hover:text-violet-400 ${darkMode ? "text-violet-300" : "text-violet-900"}`}
            >
              Try It Now
            </Link>
          </li>
          {/* Dark Mode Toggle Button */}
          <li>
            <button
              onClick={toggleTheme}
              className={`p-1 rounded-full transition duration-100 bg-transparent flex items-center text-xl hover:text-violet-500 dark:hover:text-violet-400 ${
                darkMode ? "text-violet-300" : "text-violet-900"
              }`}
            >
              {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
            </button>
          </li>
        </ul>
      </nav>

      {/* Background */}
<div className="fixed top-0 left-0 w-full min-h-screen -z-10">
  {darkMode ? (
    <div className="w-full min-h-screen bg-black bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
  ) : (
    <div className="w-full min-h-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
  )}
</div>

    </>
  );
};

export default Navbar;