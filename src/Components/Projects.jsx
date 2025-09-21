// src/components/Projects.jsx
import React from "react";
import projects from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 md:px-12 py-20 bg-gradient-to-br from-gray-950 via-purple-950 to-black text-white"
    >
      {/* Title */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text 
                       text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          🚀 Projects
        </h2>
        <span className="block w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 
                        mx-auto mt-4 rounded-full animate-pulse"></span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="flex flex-col rounded-3xl overflow-hidden shadow-lg 
                       bg-gradient-to-br from-gray-900 to-gray-800 
                       hover:shadow-[0_0_25px_rgba(139,92,246,0.7)]
                       transition transform hover:scale-[1.03]"
          >
            {/* Preview Image with Overlay */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}${project.image}`}
                alt={project.title}
                className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.split(",").map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r 
                               from-purple-500/30 to-blue-500/30 text-blue-200 border border-blue-400/40"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>

              {/* Footer with buttons */}
              <div className="mt-auto pt-4 flex justify-center gap-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 
                               text-white font-medium hover:opacity-90 transition flex items-center gap-2"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 
                               text-white font-medium hover:opacity-90 transition flex items-center gap-2"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
