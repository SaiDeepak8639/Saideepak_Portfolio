import React from "react";

export default function Education() {
  const educationData = [
    {
      year: "2024",
      title: "Masters in Computer Science",
      institution: "University of Central Missouri",
      icon: "🎓",
      color: "from-cyan-400 to-blue-500",
    },
    {
      year: "2021",
      title: "Bachelor of Engineering in Electronics & Communication",
      institution: "Chaitanya Bharathi Institute of Technology",
      icon: "📡",
      color: "from-purple-400 to-pink-500",
    },
    {
      year: "2017",
      title: "Diploma in Communication Engineering",
      institution: "Government Institute of Electronics",
      icon: "💻",
      color: "from-pink-400 to-red-500",
    },
  ];

  return (
    <section
      id="education"
      className="relative px-6 md:px-12 py-24 bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 text-white"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Education
        </h2>
        <p className="mt-3 text-gray-300">
          My academic journey through technology & engineering
        </p>
      </div>

      {/* Horizontal Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {educationData.map((edu, index) => (
            <div key={index} className="flex flex-col items-center text-center relative">
              {/* Dot */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r ${edu.color} text-black font-bold shadow-lg mb-6`}
              >
                <span className="text-2xl">{edu.icon}</span>
              </div>

              {/* Card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-105 transition transform">
                <h3 className="text-lg md:text-xl font-semibold text-cyan-300">
                  {edu.title}
                </h3>
                <p className="text-gray-300 text-sm">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
