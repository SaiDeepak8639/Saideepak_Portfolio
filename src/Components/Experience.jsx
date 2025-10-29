import React from "react";
import { FaCode, FaServer, FaLaptopCode } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Humana",
      duration: "July 2025 – Present | Remote, USA",
      icon: <FaCode className="text-cyan-600 text-2xl" />,
      highlights: [
        "Developed predictive analytics system using FastAPI, TensorFlow, and AWS.",
        "Architected microservices with Kubernetes and asynchronous data processing.",
        "Automated model deployments via Docker, Terraform, and GitHub Actions.",
        "Collaborated with data scientists and DevOps teams for HIPAA-compliant workflows.",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "Pajosys Technologies LLC",
      duration: "Jan 2025 – May 2025 | Missouri, USA",
      icon: <FaLaptopCode className="text-blue-600 text-2xl" />,
      highlights: [
        "Designed responsive React.js interfaces using Tailwind CSS and REST APIs.",
        "Optimized UI rendering and implemented Jest/Mocha unit testing.",
        "Collaborated with backend teams to refine data flows and API performance.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Trigent",
      duration: "Nov 2020 – July 2023 | Hyderabad, India",
      icon: <FaServer className="text-indigo-600 text-2xl" />,
      highlights: [
        "Modernized monolithic apps to microservices using Spring Boot and Angular.",
        "Developed REST APIs and message queues (RabbitMQ, Kafka).",
        "Configured CI/CD via Jenkins and Azure DevOps for global deployments.",
        "Led migration of enterprise workloads to AWS and Azure.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-20 bg-gradient-to-b from-cyan-50 via-white to-blue-100 text-gray-800"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Professional <span className="text-cyan-600">Experience</span>
        </h2>
        <p className="text-gray-600 mt-2">Roles and responsibilities through my software journey</p>
      </div>

      {/* Timeline container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full"></div>

        {/* Experience Cards */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative w-full md:w-[32%] bg-white p-8 rounded-2xl shadow-lg border border-cyan-100 hover:shadow-2xl transition-all duration-300 ${
                i % 2 === 0 ? "md:translate-y-6" : "md:-translate-y-6"
              }`}
            >
              {/* Ribbon bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-t-2xl"></div>

              <div className="flex items-center justify-center mb-4">{exp.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{exp.role}</h3>
              <p className="text-sm font-medium text-gray-500 mb-3">{exp.company}</p>
              <p className="text-xs text-gray-500 mb-4">{exp.duration}</p>

              <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
                {exp.highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
