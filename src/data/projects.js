// src/data/projects.js
const projects = [
  {
    title: "Blood Management Portal",
    description:
      "A full-stack portal for efficient blood donation and management, built with Java and Spring Boot on the backend, integrated with MySQL for secure data handling.",
    features: [
      "Real-time donor-recipient matching and inventory tracking",
      "Role-based access for donors, hospitals, and admins",
      "Responsive UI and RESTful APIs for efficient interaction",
    ],
    tech: "Java, Spring Boot, MySQL, React, Docker",
    github: "https://github.com/Praneeth340/blood-Management-Portal",
    demo: "",
    image: "blood-management.png",
  },
  {
    title: "Simple Notes App (Dockerized React + Django)",
    description:
      "A cross-platform notes app built for the TWS community using a full CI/CD-ready stack. Dockerized and deployed with Nginx reverse proxy.",
    features: [
      "Full-stack app with Django backend and React frontend",
      "Containerized with Docker and served via Nginx",
      "Deployed with CI/CD pipelines for smooth updates",
    ],
    tech: "React, Django, Docker, Nginx",
    github: "https://github.com/Praneeth340/notes-app",
    demo: "",
    image: "notes-app.png",
  },
  {
    title: "Reefer Monitoring System (IoT + Embedded + NavIC)",
    description:
      "A hardware-software system to monitor gas, humidity, and temperature levels in refrigerated containers, based on Springer-published research.",
    features: [
      "Integrated gas (MQ135) and DHT11 sensors with STM32",
      "Live display via I2C + LCD with UART debugging",
      "NavIC integration for real-time tracking",
    ],
    tech: "Embedded C, STM32, IoT, NavIC",
    github: "https://github.com/Praneeth340/Reefer-Monitoring-System",
    demo: "",
    image: "reefer-system.png",
  },
];

export default projects;
