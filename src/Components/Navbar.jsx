// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";

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
    <nav className="backdrop-blur-md bg-white/10 dark:bg-black/20 border-b border-cyan-400/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]">
          PR
        </h1>

        {/* Desktop Nav links */}
        <div className="hidden md:flex gap-8 text-sm md:text-base">
          {[
            "Home",
            "Education",
            "Experience",
            "Skills",
            "Projects",
            "Publications",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-cyan-400 hover:text-purple-400 transition group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Theme toggle + Mobile menu button */}
        <div className="flex items-center gap-4">
         

          {/* Hamburger menu (mobile) */}
          <button
            className="md:hidden text-2xl text-cyan-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 flex flex-col items-center justify-center space-y-10 text-2xl font-semibold z-50 animate-fadeIn">
          <button
            className="absolute top-6 right-6 text-3xl text-cyan-300"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>
          {[
            "Home",
            "Education",
            "Experience",
            "Skills",
            "Projects",
            "Publications",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-cyan-300 hover:text-purple-300 transition transform hover:scale-110"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
