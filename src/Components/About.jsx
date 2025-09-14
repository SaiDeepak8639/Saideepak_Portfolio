import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-12 py-16 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Illustration */}
        <div data-aos="fade-right" className="flex justify-center">
         <img 
  src="/Praneeth_Nagilla_Portfolio/developer-illustration.svg" 
  alt="Developer Illustration" 
  className="w-72 md:w-96 drop-shadow-xl"
/>
        </div>

        {/* Text Content */}
        <div
          data-aos="fade-left"
          className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            About Me
            <span className="block w-16 h-1 bg-blue-600 mt-2 rounded"></span>
          </h2>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I am a <span className="font-bold text-blue-600">Full Stack Developer </span> 
             passionate about building scalable, secure, and cloud-native applications.
          </p>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            My experience spans <span className="font-semibold">healthcare</span>, 
            <span className="font-semibold">finance</span>, and 
            <span className="font-semibold"> telecom</span> domains, 
            where I deliver impactful solutions.
          </p>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Skilled in <span className="font-bold">Java, Spring Boot, React, Angular, AWS</span>, 
            and <span className="font-bold">Databases</span>, 
            I love solving complex problems with clean, elegant solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
