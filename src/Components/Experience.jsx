import React from "react";

export default function Experience() {
  const experienceData = [
    {
      role: "Full Stack Developer",
      company: "Centene Corporation",
      date: "Jan 2025 – Present | Irving, TX",
      icon: "💻",
      aos: "fade-right",
      tasks: [
        "Developed React and Angular portals for healthcare claim intake and eligibility validation.",
        "Built backend microservices using Java Spring Boot with Spring Data JPA for secure and efficient claims processing.",
        "Documented and tested REST APIs with Swagger UI, cutting onboarding time for developers by 50%.",
        "Implemented Spring Batch jobs and integrated CSRF with JWT authentication to improve automation and security.",
      ],
    },
    {
      role: "Java Developer",
      company: "Wells Fargo",
      date: "Aug 2021 – July 2023 | Pune, India",
      icon: "🏦",
      aos: "fade-left",
      tasks: [
        "Ensured seamless frontend-backend integration in a microservices architecture, optimizing response time by 30%.",
        "Leveraged Spring Data JPA with Hibernate to interact with Oracle DB, improving query performance by 40%.",
        "Utilized Kafka for message publishing and consumption within a microservices architecture, enabling inter-service communication.",
        "Automated payroll and reconciliation workflows using Spring Batch jobs, reducing manual intervention and improving reliability.",
      ],
    },
    {
      role: "Java Developer",
      company: "T-Mobile",
      date: "Dec 2020 – July 2021 | Hyderabad, India",
      icon: "📡",
      aos: "fade-right",
      tasks: [
        "Built React and Angular dashboards for operations teams to monitor and approve fund transfer transactions.",
        "Developed Spring Boot APIs for payment initiation, settlement, and reconciliation workflows.",
        "Automated reconciliation tasks using Cron jobs on GCP Cloud Functions, reducing manual effort by 80%.",
      ],
    },
    {
      role: "Junior Engineer",
      company: "ECIL",
      date: "May 2017 – Nov 2017 | Hyderabad, India",
      icon: "⚙️",
      aos: "fade-left",
      tasks: [
        "Worked on Appworks, an enterprise content management platform in a Hub-supplier SCM model, enabling intelligent document workflows through BPM.",
        "Developed and maintained REST APIs, fixing bugs and enhancing code to improve system reliability.",
        "Built lightweight REST services using Node.js and Express.js to integrate with enterprise systems.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative px-6 md:px-12 py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      {/* Title */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Experience
        </h2>
        <span className="block w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-4 rounded"></span>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Gradient timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 via-blue-500 to-purple-500"></div>

        {experienceData.map((exp, i) => (
          <div
            key={i}
            className={`relative mb-20 flex items-center ${
              i % 2 === 0 ? "justify-start text-left" : "justify-end text-right"
            }`}
            data-aos={exp.aos}
          >
            {/* Dot / Icon */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white text-lg shadow-lg">
              {exp.icon}
            </div>

            {/* Card */}
            <div
              className={`w-full md:w-5/12 p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-gray-300 dark:border-gray-700 shadow-2xl transition-transform transform hover:scale-105 ${
                i % 2 === 0 ? "ml-12" : "mr-12"
              }`}
            >
              <h3 className="text-xl font-bold text-green-600 dark:text-green-300">
                {exp.company} – {exp.role}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {exp.date}
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
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
