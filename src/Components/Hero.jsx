import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-20 py-20 bg-gradient-to-br from-white via-cyan-50 to-blue-100 text-gray-800"
    >
      {/* Left side – Photo */}
      <div
        data-aos="fade-right"
        className="flex justify-end md:justify-start mb-12 md:mb-0 md:w-1/2 pl-4 md:pl-12"
      >
        <div className="relative">
          {/* Soft glow behind image */}
          <div className="absolute inset-0 bg-cyan-300 blur-3xl rounded-full opacity-40 animate-pulse"></div>

          {/* Profile photo (Vite base URL) */}
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Saideepak Akkinapalli"
            className="relative w-56 h-56 md:w-72 md:h-72 object-cover rounded-full shadow-2xl border-4 border-cyan-400"
          />
        </div>
      </div>

      {/* Right side – Text */}
      <div
        data-aos="fade-left"
        className="md:w-1/2 flex flex-col justify-center text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
          Hey 👋, I’m <span className="text-cyan-600">Saideepak Akkinapalli</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-6">
          Software Engineer | Full Stack Developer
        </h2>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-md mx-auto md:mx-0 mb-6">
          Passionate about crafting <span className="text-cyan-600 font-medium">scalable</span> and{" "}
          <span className="text-blue-600 font-medium">AI-driven</span> applications.  
          Experienced across <span className="text-cyan-700">healthcare</span>,{" "}
          <span className="text-blue-700">fintech</span>, and{" "}
          <span className="text-indigo-700">enterprise modernization</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-6">
        <a
  href={`${import.meta.env.BASE_URL}resume.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition"
>
  📄 View Resume
</a>

           
          <a
            href="mailto:saideepak.akkinapalli62@gmail.com"
            className="px-6 py-2 rounded-lg border border-cyan-500 text-cyan-700 hover:bg-cyan-100 transition"
          >
            ✉️ Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-5 text-2xl text-gray-700">
          <a
            href="https://www.linkedin.com/in/saideepak-akkinapalli-269658211/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/SaiDeepak8639"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-600 transition"
          >
            <FaGithub />
          </a>
         <a
    href="mailto:saideepak.akkinapalli62@gmail.com"
    className="hover:text-cyan-600 transition"
  >
    <FaEnvelope />
  </a>
        </div>
      </div>
    </section>
  );
}
