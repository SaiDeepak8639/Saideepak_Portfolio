// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Desktop Nav links */}
        <div className="hidden md:flex gap-6 text-sm md:text-base">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#education" className="hover:text-gray-300">Education</a>
          <a href="#experience" className="hover:text-gray-300">Experience</a>
          <a href="#skills" className="hover:text-gray-300">Skills</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#publications" className="hover:text-gray-300">Publications</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>

        {/* Theme toggle + Mobile menu button */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="px-3 py-1 rounded-lg border border-gray-400 dark:border-gray-600 
                       bg-white dark:bg-gray-900 text-sm font-medium 
                       text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>

          {/* Hamburger menu (mobile) */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-blue-500 text-white flex flex-col items-center justify-center space-y-8 text-2xl font-semibold z-50">
          <button
            className="absolute top-6 right-6 text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#publications" onClick={() => setMenuOpen(false)}>Publications</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
