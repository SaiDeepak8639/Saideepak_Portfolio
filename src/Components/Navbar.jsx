// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav className="bg-gray-900 text-white dark:bg-black sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <h1 className="text-xl font-bold">PRN</h1>

        {/* Nav links */}
        <div className="flex gap-6 text-sm md:text-base">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#education" className="hover:text-gray-300">Education</a>
          <a href="#experience" className="hover:text-gray-300">Experience</a>
          <a href="#skills" className="hover:text-gray-300">Skills</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#publications" className="hover:text-gray-300">Publications</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>

        {/* Theme toggle */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="px-4 py-1 rounded-lg border border-gray-400 dark:border-gray-600 
                     bg-white dark:bg-gray-900 text-sm font-medium 
                     text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </nav>
  );
}
