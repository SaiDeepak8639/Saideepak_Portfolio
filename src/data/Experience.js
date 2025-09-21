// src/data/experience.js
const experience = [
  {
    company: "Centene Corporation",
    role: "Full Stack Developer",
    date: "Jan 2025 – Present",
    location: "Irving, TX",
    points: [
      "Built and deployed cloud-based eligibility and claims adjudication portal using Java 17, Spring Boot, React.js, and AWS EKS, ensuring HIPAA and NCQA compliance.",
"Designed FHIR-compliant APIs and integrated with EHR systems (Epic, Cerner) using OAuth2.0 and JWT, improving interoperability and secure data exchange.",
"Implemented Kafka event pipelines, AWS Lambda workflows, and Terraform-based infrastructure to handle claims, provider changes, and secure document storage.",
"Automated CI/CD with GitHub Actions and AWS CodePipeline, integrated monitoring with Prometheus/Grafana, and optimized PostgreSQL data models for high-volume transactions.",
    ],
  },
  {
    company: "Wells Fargo",
    role: "Java Developer",
    date: "Aug 2021 – July 2023",
    location: "Pune, India",
    points: [
      "Ensured seamless frontend-backend integration in a microservices architecture, optimizing response time.",
      "Leveraged Spring Data JPA with Hibernate to interact with Oracle DB, improving query performance.",
      "Utilized Kafka for message publishing and consumption within a microservices architecture.",
      "Automated payroll and reconciliation workflows using Spring Batch jobs.",
    ],
  },
  {
    company: "T-Mobile",
    role: "Java Developer",
    date: "Dec 2020 – July 2021",
    location: "Hyderabad, India",
    points: [
      "Built React and Angular dashboards for operations teams to monitor and approve fund transfer transactions.",
      "Developed Spring Boot APIs for payment initiation, settlement, and reconciliation workflows.",
      "Automated reconciliation tasks using Cron jobs on GCP Cloud Functions.",
    ],
  },
  {
    company: "ECIL",
    role: "Junior Engineer",
    date: "May 2017 – Nov 2017",
    location: "Hyderabad, India",
    points: [
      "Worked on Appworks, an enterprise content management platform in a Hub-supplier SCM model.",
      "Developed and maintained REST APIs and executed bug fixes and code enhancements.",
      "Built lightweight REST services using Node.js and Express.js for system integration.",
    ],
  },
];

export default experience;
