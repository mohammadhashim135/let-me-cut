"use client";

import { useState, useEffect } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ShortenPage() {
  const { darkMode } = useDarkMode();
  const [longUrl, setLongUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Short URL state updated:", shortUrl); // Debugging statement
  }, [shortUrl]);

  const handleGenerate = async () => {
    if (longUrl.trim() === "") {
      toast.error("Please enter a URL to shorten.");
      return;
    }

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: longUrl, shortUrl: customAlias }),
      });

      const data = await response.json();

      if (data.success) {
        console.log("Short URL generated:", data.data.shortUrl); // Debugging statement
        setShortUrl(data.data.shortUrl);
        setError("");
        toast.success("Short URL generated successfully!");
        setLongUrl(""); // Clear the long URL input field
        setCustomAlias(""); // Clear the custom alias input field
      } else {
        setError(data.message);
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error generating short URL:", error);
      setError("An error occurred while generating the short URL.");
      toast.error("An error occurred while generating the short URL.");
    }
  };

  return (
    <>
      <ToastContainer />
      {/* Background Wrapper to Match Navbar.js */}
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
        {darkMode ? (
          <div className="h-full w-full bg-black bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        ) : (
          <div className="h-full w-full bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
        )}
      </div>

      {/* Main Content */}
      <div className={`flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
        <h1 className={`text-2xl sm:text-3xl font-bold ${darkMode ? "text-purple-400" : "text-purple-900"}`}>
          LetMeCut
        </h1>

        <p className={`mt-2 text-base sm:text-lg ${darkMode ? "text-purple-300" : "text-purple-800"}`}>
        Shorten Your URLs with Ease
        </p>

        {/* URL Input Fields */}
        <div className="mt-6 w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Enter your long URL"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            className={`w-full p-2 sm:p-3 rounded-lg border ${darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white text-black border-gray-300"} focus:outline-none focus:ring-2 focus:ring-purple-500`}
          />

          <input
            type="text"
            placeholder="Enter a preferred short link"
            value={customAlias}
            onChange={(e) => setCustomAlias(e.target.value)}
            className={`w-full p-2 sm:p-3 rounded-lg border ${darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white text-black border-gray-300"} focus:outline-none focus:ring-2 focus:ring-purple-500`}
          />

          <button
            onClick={handleGenerate}
            className="w-full p-2 sm:p-3 bg-purple-800 text-white font-bold rounded-lg hover:bg-purple-500 transition"
          >
            Generate
          </button>
        </div>

        {/* Display Shortened URL */}
        {shortUrl && (
          <div className="mt-6 p-4 rounded-lg border text-center max-w-md w-full">
            <p className={`text-base sm:text-lg ${darkMode ? "text-purple-400" : "text-purple-900"}`}>
              Your Shortened URL:
            </p>
            <a
              href={`https://${shortUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl font-bold underline text-blue-500"
            >
              {shortUrl}
            </a>
          </div>
        )}

        {/* Display Error Message */}
        {error && (
          <div className="mt-6 p-4 rounded-lg border text-center max-w-md w-full text-red-500">
            {error}
          </div>
        )}
      </div>
    </>
  );
}