import React from "react";
import profile from "../data/profile";
import { FaBookOpen } from "react-icons/fa";

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
      className="relative px-6 md:px-12 py-20 bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Title */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold flex justify-center items-center gap-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
          <FaBookOpen className="drop-shadow-md" /> Publications
        </h2>
        <span className="block w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-4 rounded-full animate-pulse"></span>
      </div>

      {/* Cards */}
      <div className="flex flex-col items-center space-y-10 relative z-10">
        {publications.map((pub, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="max-w-3xl w-full backdrop-blur-xl bg-white/10 border border-cyan-400/40 shadow-lg rounded-2xl p-8 hover:shadow-cyan-400/40 transition transform hover:scale-[1.02]"
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 mb-3">
              {pub.title}
            </h3>
            <p className="text-sm italic text-gray-300 mb-3">
              Published In: {pub.publisher}, {pub.date}
            </p>
            <p className="text-gray-200 mb-6 leading-relaxed">{pub.description}</p>
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold shadow-md hover:scale-105 transition"
            >
              📎 View on Springer
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
