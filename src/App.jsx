import React from "react";
import profile from "./data/profile";
import projects from "./data/projects";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./index.css";
import emailjs from "@emailjs/browser";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


    return (
  <div className="bg-gray-50 min-h-screen font-sans">
    {/* ===== Navbar ===== */}
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold">PRN</div>
      <ul className="flex gap-6 text-lg">
        <li><a href="#home" className="hover:text-gray-200">Home</a></li>
       <li><a href="#education" className="hover:text-pink-400">Education</a></li>
    <li><a href="#experience" className="hover:text-pink-400">Experience</a></li>
    <li><a href="#internship" className="hover:text-pink-400">Internship</a></li>
    <li><a href="#skills" className="hover:text-pink-400">Skills</a></li>
    <li><a href="#publication" className="hover:text-pink-400">Publication</a></li>
    <li><a href="#projects" className="hover:text-pink-400">Projects</a></li>
    <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
      </ul>
    </nav>

    {/* ===== Hero Section ===== */}
   <section 
  id="home" 
  className="flex flex-col md:flex-row items-start justify-between px-10 py-12 max-w-7xl mx-auto"
>

      {/* Left Side */}
      <div className="flex-1 pr-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-fade-in-up">{profile.name}</h1>
        <h2 className="text-xl text-gray-600 mb-1">FULL STACK DEVELOPER</h2>
        <h2 className="text-lg text-gray-500 mb-2 italic">Masters in Computer Science from University of Central Missouri</h2>
        <h2 className="text-xl text-gray-600 mb-4">{profile.location}</h2>
        <p className="mt-6 text-gray-600 text-lg whitespace-pre-line">
          {profile.summary}
        </p>

        
      </div>

      {/* Right Side */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
       <div className="flex-1 flex justify-center mt-6 md:mt-[-40px]">
        
 <div className="flex-1 flex flex-col items-center mt-4 md:mt-6">
  {/* Certifications on Top */}
  <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-6">
    <img 
      src={`${import.meta.env.BASE_URL}aws.jpg`} 
      alt="AWS Certified Developer" 
      className="w-16 h-16 md:w-20 md:h-20" 
    />
    <img 
      src={`${import.meta.env.BASE_URL}azure.jpg`} 
      alt="Azure Developer Associate" 
      className="w-16 h-16 md:w-20 md:h-20" 
    />
    <img 
      src={`${import.meta.env.BASE_URL}mta.jpg`} 
      alt="Microsoft MTA" 
      className="w-16 h-16 md:w-20 md:h-20" 
    />
  </div>

  {/* Profile Picture Below */}
  <img
    src={`${import.meta.env.BASE_URL}profile.jpg`}
    alt={profile.name}
    className="rounded-2xl shadow-xl border-4 border-black max-w-xs md:max-w-sm"
  />
</div>




</div>


      </div>
    </section>
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans px-4 pt-6 pb-12 relative w-full">
      {/* Main Profile Content */}
      <div className="">

        <div className="flex flex-col md:flex-row md:gap-16 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">🎯 I specialize in:</h3>
            <ul className="list-disc list-inside">
              <li className="whitespace-nowrap">Microservices architecture</li>
              <li className="whitespace-nowrap">CI/CD automation</li>
              <li className="whitespace-nowrap">Backend systems development</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 whitespace-nowrap">📊 Industry experience in:</h3>
            <ul className="list-disc list-inside">
              <li>Finance</li>
              <li>Healthcare</li>
              <li>Telecom</li>
            </ul>
          </div>
          <div className="md:mt-0 mt-6 md:ml-[-20px]">
            <h3 className="text-xl font-semibold mb-2">🧠 Developer Strengths</h3>
            <ul className="list-disc list-inside">
              <li className="whitespace-nowrap">Strong grasp of Data Structures & Algorithms for building efficient, optimized code</li>
              <li className="whitespace-nowrap">Passionate about solving real-world problems using logical thinking and design</li>
              <li className="whitespace-nowrap">Blend backend engineering with product mindset to build scalable, user-driven solutions</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 mb-10">
          <a href="resume.pdf" target="_blank" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">View Resume</a>
          <a href="resume.pdf" download className="border border-gray-500 px-4 py-2 rounded hover:bg-gray-100">Download Resume</a>
        </div>
        <section id="education" style={{ backgroundColor: '#e5e7eb', padding: '2rem', borderRadius: '1rem', margin: '2rem 1rem' }}>
  <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>🎓 Education</h2>

  <ul style={{ paddingLeft: '1.25rem', listStyleType: 'disc', color: '#374151' }}>
    <li>Master of Science in Computer Science from University of Central Missouri, Missouri, USA - Dec 2024 </li>
    <li>Bachelor of Engineering in Electronics and Communication from Osmania University, Hyderabad, India - Apr 2021</li>
    <li>Diploma in Communication Engineering from Government Institute of Electronics, Hyderabad, India - May 2017</li>
  </ul>
</section>



<section id="experience" className="">  
   {/* Experience Section */}
        <div className="bg-slate-800 text-white p-6 rounded-lg mb-10">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>

          {/* Centene */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Centene Corporation – Full Stack Developer</h3>
            <p className="text-sm text-gray-300">Jan 2025 – Present | Irving, TX</p>
            <ul className="list-disc list-inside text-gray-200">
              <li>Developed HIPAA-compliant Spring Boot microservices with OAuth2, JWT, and mTLS for secure claims and EHR integrations.</li>
              <li>Integrated Kafka and Redis for real-time eligibility validation, and exposed REST APIs for ML model inference in risk workflows.</li>
              <li>Automated CI/CD using GitHub Actions and Jenkins with container signing, SonarQube checks, and secure EKS deployments via Helm/Terraform.</li>
            </ul>
          </div>

          {/* Wells Fargo */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Wells Fargo – Java Developer</h3>
            <p className="text-sm text-gray-300">Aug 2021 – July 2023 | Pune, India</p>
            <ul className="list-disc list-inside text-gray-200">
              <li>Built secure APIs and batch jobs for payroll and sub-ledger reconciliation using Spring Boot, Kafka, and PostgreSQL.</li>
              <li>Created ML-ready financial datasets and optimized SQL for anomaly detection models.</li>
             <li>Automated pipelines with Jenkins, SonarQube, and Nexus; led backend integration for audit-ready reporting modules.</li>
            </ul>
          </div>

          {/* T-Mobile */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold">T-Mobile – Java Developer</h3>
            <p className="text-sm text-gray-300">Dec 2020 – July 2021 | Hyderabad, India</p>
            <ul className="list-disc list-inside text-gray-200">
              <li>Developed Angular dashboards and integrated secure REST APIs for NEFT/RTGS/IMPS transaction modules.</li>
              <li>Implemented JWT-based authentication, responsive UI components, and role-based dashboards.</li>
              <li>Shadowed backend team and contributed to debugging Node.js APIs and improving real-time frontend/backend sync.</li>
            </ul>
          </div>

          {/* ECIL */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold">ECIL – Junior Engineer</h3>
            <p className="text-sm text-gray-300">May 2017 – Nov 2017 | Hyderabad, India</p>
            <ul className="list-disc list-inside text-gray-200">
              <li>Worked on Hospital Management System using Java, HTML, and SQL</li>
              <li>Improved patient data retrieval and appointment scheduling modules</li>
              <li>Coordinated with cross-functional teams in an agile environment</li>
            </ul>
          </div>
        </div>
</section>

<section id="internship" className="">
   {/* Internships Section */}
        <div className="bg-gray-700 text-white border border-gray-600 rounded-xl p-6 mt-6">
          <h2 className="text-3xl font-bold mb-4">Internships</h2>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold">🛠 BHEL, Hyderabad, India – Intern</h3>
            <p className="text-md text-gray-300">May 2019 – June 2019</p>
            <ul className="list-disc list-inside mt-2 text-lg">
              <li>Studied PLC integration in CNC machines to improve automation and efficiency</li>
              <li>Built a Java Spring Boot dashboard to visualize live machine metrics</li>
              <li>Documented findings and presented insights to engineers, strengthening reporting skills</li>
            </ul>
          </div>
        </div>
</section>

<section id="skills" className="">
   {/* Technical Skills Section */}
        <div className="bg-black text-white mt-10 rounded-xl overflow-hidden">
          <h2 className="text-2xl font-bold p-4">Skills</h2>
          <table className="w-full table-auto">
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold w-1/3 border-r border-gray-700">Languages</td>
                <td className="p-3 border-l border-gray-700">Java 17, JavaScript (ES6+), TypeScript, Python, SQL, PL/SQL, Shell Script</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">Databases</td>
                <td className="p-3 border-l border-gray-700">PostgreSQL, Aurora PostgreSQL, MySQL, MongoDB, Redshift, DynamoDB, Snowflake</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">J2EE Technologies</td>
                <td className="p-3 border-l border-gray-700">RESTful Web Services, JPA, Microservices, Kafka, Spring Data JPA, Spring Batch</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">UI Technologies</td>
                <td className="p-3 border-l border-gray-700">HTML5, CSS3, JavaScript, TypeScript, Angular, React.js, Bootstrap, Redux, JSON, AJAX</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">Frameworks</td>
                <td className="p-3 border-l border-gray-700">Spring Boot, Spring MVC, Spring Cloud, Spring Security, Hibernate, Flask, Express.js</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">Cloud Technologies</td>
                <td className="p-3 border-l border-gray-700">AWS (EC2, S3, RDS, Lambda, EKS, KMS, IAM, CloudWatch, SageMaker, Kinesis), Azure (AKS, App Services, Azure ML), GCP (basic)</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">Messaging Services</td>
                <td className="p-3 border-l border-gray-700">Kafka, RabbitMQ, AWS SQS, AWS SNS</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">DevOps & CI/CD</td>
                <td className="p-3 border-l border-gray-700">Jenkins, GitHub Actions, GitLab CI, ArgoCD, Docker, Helm, Kubernetes, OpenShift</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">Monitoring & Logging</td>
                <td className="p-3 border-l border-gray-700">Dynatrace, Grafana, Prometheus, ELK Stack, Splunk, AWS CloudWatch, CloudTrail</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">Web Services</td>
                <td className="p-3 border-l border-gray-700">REST, GraphQL, SOAP</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">Reporting & Visualization</td>
                <td className="p-3 border-l border-gray-700">Power BI, Tableau, Splunk, ELK Stack</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">Testing Tools</td>
                <td className="p-3 border-l border-gray-700">JUnit, TestNG, Postman, Cypress, Mockito, Selenium, REST Assured, Cucumber</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">Version Control</td>
                <td className="p-3 border-l border-gray-700">Git, GitHub, GitLab, Bitbucket, JIRA, Confluence</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-bold border-r border-gray-700">Security & Access</td>
                <td className="p-3 border-l border-gray-700">OAuth2.0, JWT, IAM Roles & Policies, AWS KMS, RBAC, TLS/mTLS, Vault, Encryption Techniques</td>
              </tr>
              <tr>
                <td className="p-3 font-bold border-r border-gray-700">Web/Application Servers</td>
                <td className="p-3 border-l border-gray-700">Tomcat, Nginx, Apache</td>
              </tr>
            </tbody>
          </table>
        </div>
</section>

<section id="publication" className="">
    {/* Publications Section */}
        <div className="bg-white border border-gray-300 rounded-xl p-6 mt-12 shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center">
            📘 <span className="ml-2">Publications</span>
          </h2>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Development and Performance Evaluation of NavIC-Based Reefer Monitoring System
            </h3>
            <p className="text-gray-800 text-md mb-1">
              <strong>Published In:</strong> <em>Advances in Signal Processing and Communication Engineering</em>, Springer, July 2024
            </p>
            <p className="text-gray-700 text-md mb-3">
              Proposed a NavIC-based monitoring system to ensure real-time tracking of environmental conditions in refrigerated containers (reefers) for transporting temperature-sensitive goods. The system leverages NavIC for precise geolocation, enhancing logistics efficiency and reducing spoilage losses.
            </p>
            <a
              href="https://link.springer.com/chapter/10.1007/978-981-97-0562-7_15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-medium hover:underline"
            >
              📎 View Publication on Springer
            </a>
          </div>
        </div>
</section>
<section id="projects" className="">
  
     {/* Projects Section */}
        <h3 className="text-3xl font-semibold mb-6 mt-16 text-center text-gray-900">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center px-6 md:px-16 lg:px-24">
          <div className="bg-gray-100 shadow-2xl rounded-2xl p-8 hover:shadow-3xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">🩸 Blood Management Portal</h3>
            <a href="https://github.com/Praneeth340/blood-Management-Portal" target="_blank" className="text-blue-600 font-medium">GitHub: View Project</a>
            <p className="mt-3 text-gray-800">A full-stack portal for efficient blood donation and management, built with Java and Spring Boot on the backend and integrated with MySQL for secure data handling.</p>
            <ul className="list-disc list-inside text-base mt-3 text-gray-700">
              <li>Built real-time donor-recipient matching and inventory tracking features</li>
              <li>Implemented role-based access for donors, hospitals, and admins</li>
              <li>Designed responsive UI and RESTful APIs for smooth data flow</li>
            </ul>
            <p className="text-base mt-3 font-semibold text-gray-800">Tech Stack: Java, Spring Boot, MySQL, REST APIs, JSP/Servlets</p>
          </div>

          <div className="bg-gray-100 shadow-2xl rounded-2xl p-8 hover:shadow-3xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">📝 Simple Notes App (Dockerized React + Django)</h3>
            <a href="https://github.com/Praneeth340/notes-app" target="_blank" className="text-blue-600 font-medium">GitHub: View Project</a>
            <p className="mt-3 text-gray-800">A cross-platform notes app created for the TWS community using a full CI/CD-ready stack. Dockerized for easy deployment and integrated with Nginx reverse proxy.</p>
            <ul className="list-disc list-inside text-base mt-3 text-gray-700">
              <li>Developed a full-stack app with Django backend and React frontend</li>
              <li>Containerized with Docker and served using Nginx reverse proxy</li>
              <li>Built for scalable deployment with RESTful APIs and database support</li>
            </ul>
            <p className="text-base mt-3 font-semibold text-gray-800">Tech Stack: Django, React, Node.js, Docker, Nginx, PostgreSQL</p>
          </div>

          <div className="bg-gray-100 shadow-2xl rounded-2xl p-8 hover:shadow-3xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">📡 Reefer Monitoring System (IoT + Embedded + NavIC)</h3>
            <p className="text-blue-600 font-medium">Based on Springer-published research</p>
            <p className="mt-3 text-gray-800">A complete hardware-software system to monitor gas, humidity, and temperature levels in refrigerated containers. Built using STM32 microcontroller, I2C sensors, and LCDs with UART debugging and GPS-based tracking via NavIC.</p>
            <ul className="list-disc list-inside text-base mt-3 text-gray-700">
              <li>Integrated gas (MQ135) and DHT11 sensors via I2C and LCD for live display</li>
              <li>Used STM32 (C/CubeMX) for embedded logic, UART communication, and timing</li>
              <li>Parsed GPS data from GPRMC strings and displayed real-time geolocation</li>
              <li>Extended system aligns with published NavIC reefer monitoring paper</li>
            </ul>
            <p className="text-base mt-3 font-semibold text-gray-800">Tech Stack: Embedded C, STM32, HAL Drivers, I2C, UART, LCD, GPS, MQ135, DHT11</p>
          </div>
        </div>
</section>



<section id="contact" className="">
     <h3 className="text-3xl font-semibold mb-6 mt-16 text-center text-gray-900">Contact</h3>
  
        {/* Contact Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
          <div className="bg-gray-100 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            <p className="text-2xl mb-2">📞</p>
            <p className="text-blue-600 font-medium">+1 (913) 282-1310</p>
          </div>
          <div className="bg-gray-100 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            <p className="text-2xl mb-2">📧</p>
            <p className="text-blue-600 font-medium">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nagillapraneeth88@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline ml-2 inline-block"
              >
                📩 nagillapraneeth88@gmail.com
              </a>
            </p>
          </div>
          <div className="bg-gray-100 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            <p className="text-2xl mb-2">💻</p>
            <a href="https://github.com/Praneeth340" className="text-blue-600 font-medium" target="_blank">GitHub Profile</a>
          </div>
          <div className="bg-gray-100 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            <p className="text-2xl mb-2">🔗</p>
            <a href="https://www.linkedin.com/in/praneeth-nagilla/" className="text-blue-600 font-medium" target="_blank">LinkedIn Profile</a>
          </div>
          <div className="bg-gray-100 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            <p className="text-2xl mb-2">📄</p>
            <a href="https://doi.org/10.1007/978-981-97-0562-7_15" className="text-blue-600 font-medium" target="_blank">Springer Publication</a>
          </div>
          <div className="bg-gray-100 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            <p className="text-2xl mb-2">📄</p>
            <a href={`${import.meta.env.BASE_URL}cert.jpg`} className="text-blue-600 font-medium" target="_blank" rel="noopener noreferrer">
              Certifications
            </a>
          </div>
        </div>
<section id="contact" className="py-16 bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
    
    {/* Left Side - Image */}
    <div>
      <img
        src={`${import.meta.env.BASE_URL}contact.jpg`} 
        alt="Contact Illustration"
        className="rounded-lg shadow-lg"
      />
    </div>

   {/* Right Side - Contact Form */}
<div>
  <h2 className="text-3xl font-bold mb-6 text-yellow-400">
    CONTACT ME <span className="text-white">TO GET STARTED</span>
  </h2>

  <form
    id="contact-form"
    className="space-y-4"
    onSubmit={(e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_b1m8jsc",   // ✅ Your Service ID
          "template_mjpq5eu",   // ✅ Your Template ID
          e.target,            // Pass the form element
          "AFmtGuVOOTsDnSVON"    // ✅ Your Public Key
        )
        .then(
          (result) => {
            console.log("✅ Message sent:", result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.error("❌ Error:", error.text);
            alert("Failed to send message. Try again.");
          }
        );

      e.target.reset(); // clears form after submit
    }}
  >
    <input
      type="text"
      name="from_name"
      placeholder="Name"
      className="w-full p-3 rounded-md text-black"
      required
    />
    <input
      type="email"
      name="from_email"
      placeholder="Email"
      className="w-full p-3 rounded-md text-black"
      required
    />
    <textarea
      name="message"
      placeholder="Message"
      rows="5"
      className="w-full p-3 rounded-md text-black"
      required
    ></textarea>

    <button
      type="submit"
      className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
    >
      SEND ME A MESSAGE
    </button>
  </form>
</div>
</div>
</section>

</section>
<footer className="bg-gray-900 text-white text-center py-4 mt-12">
  <p className="text-sm">
    © {new Date().getFullYear()} Praneeth Reddy Nagilla. All Rights Reserved.
  </p>
</footer>




       

      

       

      

     

      </div>
    </div>
     </div>
  );
}

export default App;