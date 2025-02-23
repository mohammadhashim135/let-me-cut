"use client";

import { useDarkMode } from "@/context/DarkModeContext"; // Import the context

export default function AboutPage() {
    const { darkMode } = useDarkMode();

    return (
        <div className="p-6 bg-gradient-to-r min-h-screen flex items-center justify-center">
            <div className={`p-8 rounded-lg shadow-lg max-w-lg w-full ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
                <h1 className="text-3xl font-bold text-center">LetMeCut</h1>
                <p className="mt-4 text-center">
                    LetMeCut is a URL shortener that makes sharing links easier and more efficient.
                </p>
                <p className="mt-4 text-center">
                    Contact Mohammad Hashim at <a href="https://github.com/mohammadhashim135" className={`underline ${darkMode ? "text-blue-400" : "text-blue-500"}`}>GitHub</a>
                </p>
            </div>
        </div>
    );
}