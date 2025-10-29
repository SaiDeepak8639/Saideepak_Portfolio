import React from "react";
import {
  FaJava,
  FaPython,
  FaReact,
  FaAws,
  FaDocker,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiTypescript,
  SiMongodb,
  SiKubernetes,
  SiTerraform,
} from "react-icons/si";

export default function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90, icon: <FaJava className="text-red-500" /> },
        { name: "Python", level: 85, icon: <FaPython className="text-yellow-500" /> },
        { name: "TypeScript", level: 80, icon: <SiTypescript className="text-blue-500" /> },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Spring Boot", level: 88, icon: <SiSpringboot className="text-green-500" /> },
        { name: "React.js", level: 90, icon: <FaReact className="text-cyan-500" /> },
        { name: "Node.js", level: 82, icon: <FaNodeJs className="text-lime-500" /> },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 85, icon: <FaAws className="text-yellow-400" /> },
        { name: "Docker", level: 80, icon: <FaDocker className="text-sky-500" /> },
        { name: "Kubernetes", level: 75, icon: <SiKubernetes className="text-indigo-500" /> },
        { name: "Terraform", level: 70, icon: <SiTerraform className="text-purple-500" /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 85, icon: <FaDatabase className="text-blue-500" /> },
        { name: "MongoDB", level: 78, icon: <SiMongodb className="text-green-500" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-20 bg-gradient-to-b from-white via-cyan-50 to-blue-100 text-gray-800"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Skills <span className="text-cyan-600">& Expertise</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Technologies I use to design, build, and scale digital systems
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-white/80 backdrop-blur-md border border-cyan-100 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-6 text-cyan-700">
              {cat.title}
            </h3>

            {cat.skills.map((skill, idx) => (
              <div key={idx} className="mb-5">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-gray-700 font-medium">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
