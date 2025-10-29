import React, { useState } from "react";
import { FaHome, FaUserGraduate, FaLaptopCode, FaTools, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <GiBrain /> },
    { name: "Education", href: "#education", icon: <FaUserGraduate /> },
    { name: "Experience", href: "#experience", icon: <FaLaptopCode /> },
    { name: "Skills", href: "#skills", icon: <FaTools /> },
    { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="fixed top-0 left-0 h-full w-20 md:w-60 bg-white/70 backdrop-blur-lg border-r border-gray-200 shadow-xl flex flex-col justify-between z-50">
      {/* Logo Section */}
      <div className="flex items-center justify-center md:justify-start gap-2 px-4 py-6 border-b border-gray-300">
        <h1 className="text-2xl font-extrabold text-cyan-600 tracking-widest">SD</h1>
        <span className="hidden md:block text-gray-600 font-semibold">Deepak</span>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 flex flex-col items-center md:items-start mt-8 space-y-6">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="flex items-center gap-3 text-gray-700 hover:text-cyan-600 transition-all group text-sm md:text-base font-medium"
          >
            <span className="text-lg group-hover:scale-110 transition-transform">{link.icon}</span>
            <span className="hidden md:block">{link.name}</span>
          </a>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button
        className="absolute top-5 right-5 text-gray-700 md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
      </button>

      {/* Collapsible Overlay for Mobile */}
      {open && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center space-y-8 md:hidden z-50">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-xl font-semibold text-gray-800 hover:text-cyan-600 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
