"use client";

import Image from "next/image";
import Link from "next/link";
import { useDarkMode } from "@/context/DarkModeContext";

export default function Home() {
  const { darkMode } = useDarkMode();

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-4 sm:p-6">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mx-auto">
        {/* Left Section */}
        <div className="md:w-1/2 p-4">
          <h1 className={`text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6 ${darkMode ? "text-purple-400" : "text-purple-900"}`}>
            World&apos;s Best URL Shortener
          </h1>
          <p className={`text-base sm:text-lg ${darkMode ? "text-purple-400" : "text-purple-900"} mb-4 sm:mb-6`}>
            Shorten your URLs with ease and efficiency. Try it out now!
          </p>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5">
            <Link
              href="/shorten"
              className="px-4 py-2 sm:px-5 sm:py-2 bg-purple-800 text-white font-bold rounded-lg hover:bg-purple-500 transition"
            >
              Try it out
            </Link>

            <Link
              href="https://github.com/mohammadhashim135"
              className="px-4 py-2 sm:px-5 sm:py-2 bg-purple-800 text-white font-bold rounded-lg hover:bg-purple-500 transition"
            >
              GitHub
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-4 mt-6 md:mt-0">
          <Image
            src="/vectorr.jpg"
            alt="URL Shortener"
            width={600}
            height={500}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
}