// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaBook, FaCertificate } from "react-icons/fa";
import profile from "../data/profile";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side - Social Links */}
        <div className="flex gap-4 mb-4 md:mb-0">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={profile.springer}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-500 transition"
          >
            <FaBook size={18} />
          </a>
          <a
            href="/cert.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-white hover:bg-yellow-400 transition"
          >
            <FaCertificate size={18} />
          </a>
        </div>

        {/* Center - Symbol / Logo */}
        <div className="text-2xl font-bold text-yellow-400">
          PRN
        </div>

        {/* Right Side - Copyright */}
        <div className="text-sm text-gray-400 mt-4 md:mt-0">
          © {new Date().getFullYear()} Praneeth Reddy Nagilla. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
