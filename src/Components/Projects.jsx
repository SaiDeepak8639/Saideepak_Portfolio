// src/components/Projects.jsx
import React from "react";
import projects from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 md:px-12 py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Title */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text 
                       text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          🚀 Projects
        </h2>
        <span className="block w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 
                        mx-auto mt-4 rounded"></span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="flex flex-col rounded-3xl overflow-hidden shadow-xl 
                       border border-gray-200 dark:border-gray-700
                       bg-white/10 dark:bg-gray-800/30 backdrop-blur-md 
                       transition transform hover:scale-[1.02] hover:shadow-2xl"
          >
            {/* Preview Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}${project.image}`}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <p className="text-sm font-semibold text-blue-600 dark:text-indigo-300 mb-4">
                Tech Stack: {project.tech}
              </p>

              {/* Footer with buttons */}
              <div className="mt-auto px-6 py-4 border-t border-gray-200 dark:border-gray-700 
                              flex justify-center gap-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium 
                               hover:bg-blue-700 transition flex items-center gap-2"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-green-600 text-white font-medium 
                               hover:bg-green-700 transition flex items-center gap-2"
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
