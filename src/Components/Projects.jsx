import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Shopping List",
      image: `${import.meta.env.BASE_URL}Shopping.png`,
      description:
        "A full-stack app for managing shopping items efficiently with add, edit, and delete functionalities, providing a clean and interactive UI.",
      points: [
        "Built with JavaScript for responsive UI interactions",
        "Uses local storage for persistent data",
        "Optimized DOM manipulation for smooth performance",
      ],
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/8639608041/Shopping_List",
    },
    {
      title: "Flixx App",
      image: `${import.meta.env.BASE_URL}Flixx.png`,
      description:
        "A movie and TV show discovery app fetching real-time content from TMDB API and providing trending entertainment recommendations.",
      points: [
        "Integrated TMDB API for real-time movie data",
        "Built responsive UI with React components",
        "Added search and filter functionalities for dynamic browsing",
      ],
      tech: ["React", "TMDB API", "CSS3"],
      github: "https://github.com/8639608041/Flixx_App",
    },
    {
      title: "Clerk Auth (Next.js App)",
      image: `${import.meta.env.BASE_URL}Clerk.png`,
      description:
        "A secure authentication system using Clerk integrated with Next.js, offering reusable login, signup, and session management components.",
      points: [
        "Implemented Clerk for full-stack authentication",
        "Built using Next.js App Router with Tailwind CSS",
        "Optimized for modern React hooks and clean UI design",
      ],
      tech: ["Next.js", "Clerk", "Tailwind CSS"],
      github: "https://github.com/8639608041/Clerk_Next.js-App",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-20 bg-gradient-to-b from-[#090c24] via-[#15183d] to-[#1f1a4b] text-gray-100"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Featured <span className="text-purple-400">Projects</span>
        </h2>
        <p className="text-gray-300 mt-3">
          A few projects showcasing my full-stack development skills
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="group bg-[#10132e]/90 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image */}
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-56 object-cover rounded-t-2xl"
            />

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-purple-300 mb-3">
                {proj.title}
              </h3>
              <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                {proj.description}
              </p>

              <ul className="list-disc list-inside text-gray-400 text-sm mb-4 space-y-1">
                {proj.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {proj.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-xs font-medium border border-purple-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-center px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition"
              >
                <FaGithub className="inline-block mr-2" />
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
