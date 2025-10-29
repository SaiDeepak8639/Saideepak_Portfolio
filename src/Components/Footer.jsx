// src/components/Footer.jsx
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">

        {/* Left Side - Social Links */}
        <div className="flex gap-4 mb-4 md:mb-0">
          <a
            href="https://github.com/SaiDeepak8639"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/saideepak-akkinapalli-62b7a2273/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500 transition"
          >
            <FaLinkedin size={20} />
          </a>
        </div> {/* ✅ Closed this div properly */}

        {/* Center - Initials Logo */}
        <div className="text-2xl font-bold text-yellow-400">SD</div>

        {/* Right Side - Contact Info */}
        <div className="flex flex-col items-center md:items-end text-sm text-gray-400 mt-4 md:mt-0 gap-1">
          <div className="flex items-center gap-2">
            <FaPhone size={14} className="text-yellow-400" />
            <span>+1 (913) 349-1756 </span>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope size={14} className="text-yellow-400" />
            <a
              href="mailto:saideepak.akkinapalli62@gmail.com"
              className="hover:underline text-gray-300"
            >
              saideepak.akkinapalli62@gmail.com
            </a>
          </div>

          <div className="text-gray-500 mt-1">
            © {new Date().getFullYear()} Saideepak Akkinapalli. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
