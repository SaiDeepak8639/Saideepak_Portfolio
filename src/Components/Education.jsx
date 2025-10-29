import React from "react";
import { FaUniversity, FaLaptopCode, FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      year: "2025",
      degree: "Master of Science in Computer Science",
      school: "University of Central Missouri, USA",
      icon: <FaGraduationCap className="text-cyan-600 text-3xl" />,
      color: "from-cyan-400 to-blue-500",
    },
    {
      year: "2022",
      degree: "Bachelor of Engineering in Computer Science",
      school: "Malla Reddy Engineering College, India",
      icon: <FaUniversity className="text-blue-600 text-3xl" />,
      color: "from-blue-400 to-purple-400",
    },
   
  ];

  return (
    <section
      id="education"
      className="py-24 px-6 md:px-20 bg-gradient-to-b from-white via-cyan-50 to-blue-100 text-gray-800"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Education <span className="text-cyan-600">& Journey</span>
        </h2>
        <p className="text-gray-600 mt-2">
          My academic path that shaped my software and analytical foundation.
        </p>
      </div>

      {/* Horizontal timeline */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-8 max-w-6xl mx-auto">
        {education.map((edu, index) => (
          <div
            key={index}
            className="relative w-full lg:w-1/3 bg-white rounded-2xl p-8 shadow-lg border border-cyan-100 hover:shadow-2xl transition-all duration-300"
          >
            {/* Ribbon on top */}
            <div
              className={`absolute -top-3 left-6 right-6 h-1 rounded-full bg-gradient-to-r ${edu.color}`}
            ></div>

            <div className="flex flex-col items-center text-center space-y-3">
              {edu.icon}
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-2">
                {edu.degree}
              </h3>
              <p className="text-sm text-gray-500">{edu.school}</p>
              <span className="inline-block mt-2 px-3 py-1 text-sm bg-cyan-100 text-cyan-700 font-medium rounded-full shadow-sm">
                {edu.year}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Connector line for large screens */}
      <div className="hidden lg:block w-[70%] mx-auto h-[2px] bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mt-16 rounded-full"></div>
    </section>
  );
}
