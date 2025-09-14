// src/components/Publications.jsx
import React from "react";
import profile from "../data/profile";
import { FaBook } from "react-icons/fa";

export default function Publications() {
  const publications = [
    {
      title:
        "Development and Performance Evaluation of NavIC-Based Reefer Monitoring System",
      publisher:
        "Advances in Signal Processing and Communication Engineering, Springer",
      date: "July 2024",
      description:
        "Proposed a NavIC-based monitoring system to ensure real-time tracking of environmental conditions in refrigerated containers (reefers) for transporting temperature-sensitive goods.",
      link: profile.springer,
    },
  ];

  return (
    <section
      id="publications"
      className="relative px-6 md:px-12 py-20 bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Title */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold flex justify-center items-center gap-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
          <FaBook className="text-pink-500 drop-shadow-md" /> Publications
        </h2>
        <span className="block w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4 rounded-full"></span>
      </div>

      {/* Stylish Cards */}
      <div className="flex flex-col items-center space-y-10">
        {publications.map((pub, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="max-w-3xl w-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl p-8 transform hover:scale-[1.02] transition"
          >
            {/* Title */}
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-3">
              {pub.title}
            </h3>

            {/* Publisher + Date */}
            <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-3">
              Published In: {pub.publisher}, {pub.date}
            </p>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {pub.description}
            </p>

            {/* Link */}
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-md hover:shadow-lg hover:opacity-90 transition"
            >
              📎 View on Springer
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
