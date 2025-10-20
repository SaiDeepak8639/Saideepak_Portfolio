// src/components/Skills.jsx
import React from "react";
import {
  FaJava,
  FaReact,
  FaAws,
  FaDocker,
  FaDatabase,
  FaNodeJs,
  FaCloud, // ✅ Added fallback icon for Azure
} from "react-icons/fa";
import {
  SiSpringboot,
  SiKubernetes,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiTypescript,
  SiCplusplus,
  SiTerraform,
  SiGithubactions,
  SiJirasoftware,
  SiCmake,
  SiWireshark,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      title: "Languages",
      items: [
        { name: "C++ (11/17)", icon: <SiCplusplus className="text-blue-400" /> },
        { name: "Java 17", icon: <FaJava className="text-red-500" /> },
        { name: "Python", icon: <SiPython className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
        { name: "JavaScript (ES6+)", icon: <FaNodeJs className="text-green-500" /> },
      ],
    },
    {
      title: "Frameworks",
      items: [
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-400" /> },
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-lime-500" /> },
        { name: "Simulink", icon: <FaDatabase className="text-orange-400" /> }, // placeholder
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
        { name: "MySQL", icon: <FaDatabase className="text-orange-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        { name: "AWS", icon: <FaAws className="text-yellow-400" /> },
        { name: "Azure DevOps", icon: <FaCloud className="text-sky-400" /> }, // ✅ Replaced SiAzuredevops
        { name: "Docker", icon: <FaDocker className="text-sky-400" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="text-indigo-400" /> },
        { name: "Terraform", icon: <SiTerraform className="text-purple-400" /> },
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: "GitHub Actions", icon: <SiGithubactions className="text-gray-300" /> },
        { name: "JIRA / Confluence", icon: <SiJirasoftware className="text-blue-500" /> },
        { name: "CMake", icon: <SiCmake className="text-red-400" /> },
        { name: "Wireshark", icon: <SiWireshark className="text-cyan-400" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-gray-950 via-purple-950 to-black text-white py-16 px-6 md:px-16 lg:px-24"
    >
      <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 text-transparent bg-clip-text">
        ⚡ Skills & Technologies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {skills.map((category, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold mb-4 text-cyan-300">
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.items.map((skill, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-200 hover:text-white"
                >
                  {skill.icon} <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
