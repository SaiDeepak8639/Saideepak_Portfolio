// src/components/Skills.jsx
import React from "react";
import { FaJava, FaReact, FaAws, FaDocker, FaDatabase, FaNodeJs } from "react-icons/fa";
import { SiSpringboot, SiKubernetes, SiPostgresql, SiMongodb, SiPython, SiTypescript } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      title: "Languages",
      items: [
        { name: "Java 17", icon: <FaJava className="text-orange-600" /> },
        { name: "Python", icon: <SiPython className="text-blue-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-700" /> },
        { name: "JavaScript (ES6+)", icon: <FaNodeJs className="text-green-600" /> },
      ],
    },
    {
      title: "Frameworks",
      items: [
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
        { name: "React.js", icon: <FaReact className="text-sky-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-700" /> },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "MySQL", icon: <FaDatabase className="text-yellow-600" /> },
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-black text-white py-16 px-6 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold mb-10 text-center text-yellow-400">
        ⚡ Skills & Technologies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {skills.map((category, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold mb-4 text-pink-400">{category.title}</h3>
            <ul className="space-y-3">
              {category.items.map((skill, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
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
