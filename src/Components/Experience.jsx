import React from "react";

export default function Experience() {
  const experienceData = [
    {
      role: "Full Stack Developer",
      company: "Centene Corporation",
      date: "Jan 2025 – Present | Saint Louis, MO",
      icon: "💻",
      color: "from-cyan-400 to-blue-500",
      tasks: [
        "Developing C++ and Spring Boot microservices for claims and eligibility workflows on AWS.",
    "Building React.js portals integrated with secure APIs and PostgreSQL databases.",
    "Implemented Kafka pipelines and AWS Lambda for asynchronous data processing.",
    "Automating CI/CD with GitHub Actions, Terraform, and EKS deployments."
      ],
    },
    {
      role: "Java Full Stack Developer",
      company: "TCS",
      date: "Jan 2020 – July 2023 | Hyderabad, India",
      icon: "🏦",
      color: "from-green-400 to-emerald-500",
      tasks: [
        "Developed Java and C++ services for payment authorization and risk validation systems.",
    "Built Angular dashboards for borrower onboarding and real-time transaction visibility.",
    "Designed secure REST APIs with OAuth2/JWT for core banking integrations.",
    "Deployed microservices on Azure AKS using CI/CD pipelines with SonarQube checks."
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Birlasoft",
      date: "Nov 2017 – July 2018 | Hyderabad, India",
      icon: "📡",
      color: "from-purple-400 to-pink-500",
      tasks: [
       "Developed Spring Boot APIs and Angular UIs for patient care and claim tracking.",
    "Integrated with EHR/EMR systems (Epic, Cerner) using FHIR/HL7 standards.",
    "Built Kafka consumers and Spring Batch jobs for claims reconciliation.",
    "Containerized services with Docker and deployed via Kubernetes pipelines."
      ],
    },
   
  ];

  return (
    <section
      id="experience"
      className="relative px-6 md:px-12 py-20 bg-gradient-to-b from-gray-950 via-purple-950 to-blue-900 text-white"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="text-gray-400 mt-3">My career growth and milestones</p>
      </div>

      {/* Timeline Vertical Style */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 via-blue-500 to-purple-500"></div>

        {experienceData.map((exp, i) => (
          <div
            key={i}
            className={`mb-16 flex ${
              i % 2 === 0 ? "justify-start" : "justify-end"
            } relative`}
          >
            {/* Connector Dot */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${exp.color} shadow-xl`}
            >
              <span className="text-2xl">{exp.icon}</span>
            </div>

            {/* Card */}
            <div
              className={`w-[45%] p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl ${
                i % 2 === 0 ? "ml-16 text-left" : "mr-16 text-right"
              }`}
            >
              <h3 className="text-xl font-bold text-cyan-300">{exp.role}</h3>
              <p className="text-sm text-gray-400 mb-3">
                {exp.company} | {exp.date}
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                {exp.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

