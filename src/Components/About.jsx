import React from "react";
import { FaBrain, FaCloud, FaCogs, FaRobot } from "react-icons/fa";

export default function About() {
  const highlights = [
    {
      icon: <FaBrain className="text-cyan-600 text-3xl" />,
      title: "Innovative Thinker",
      text: "Passionate about solving complex problems with creative, data-driven software solutions that scale globally."
    },
    {
      icon: <FaCloud className="text-blue-500 text-3xl" />,
      title: "Cloud Expertise",
      text: "Hands-on experience with AWS, Azure, and Kubernetes for building secure, containerized, and cloud-native applications."
    },
    {
      icon: <FaCogs className="text-teal-500 text-3xl" />,
      title: "Full-Stack Builder",
      text: "Comfortable across front-end and back-end technologies — from React & Angular to Java Spring Boot & FastAPI."
    },
    {
      icon: <FaRobot className="text-indigo-500 text-3xl" />,
      title: "AI Enthusiast",
      text: "Integrating ML models using TensorFlow, PyTorch, and FastAPI to deliver intelligent, automation-ready solutions."
    }
  ];

  return (
    <section
      id="about"
      className="py-24 px-8 md:px-20 bg-gradient-to-b from-cyan-50 via-white to-blue-100 text-gray-800"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          About <span className="text-cyan-600">Me</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I’m a software engineer driven by curiosity and precision — building modern,
          scalable systems that blend AI, cloud, and full-stack technologies into seamless digital experiences.
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-cyan-100 transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Signature or Motto */}
      <div className="text-center mt-16">
        <p className="italic text-gray-500">
          “Technology is best when it connects people and ideas seamlessly. ”
        </p>
      </div>
    </section>
  );
}
