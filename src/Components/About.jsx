import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-12 py-24 bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Illustration */}
        <div
          data-aos="fade-right"
          className="flex justify-center transform hover:scale-105 transition duration-500"
        >
          <img
            src="/R_Praneeth_Portfolio/developer-illustration.svg"
            alt="Developer Illustration"
            className="w-72 md:w-[26rem] drop-shadow-[0_0_25px_rgba(56,189,248,0.7)] animate-float"
          />
        </div>

     {/* Text Content */}
<div
  data-aos="fade-left"
  className="backdrop-blur-xl bg-white/10 border border-cyan-400/30 shadow-2xl rounded-3xl p-10"
>
  <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-300 mb-6">
    About Me
    <span className="block w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mt-3 rounded-full animate-pulse"></span>
  </h2>

{/* Professional Summary */}
<p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
  Full Stack Developer with <span className="font-semibold text-cyan-300">6 years of experience</span> 
  designing and delivering <span className="text-cyan-300">secure, scalable, and high-performance</span> 
  software across <span className="text-pink-400">healthcare</span> and 
  <span className="text-purple-400"> fintech</span> domains. Skilled in 
  <span className="font-semibold text-cyan-300"> C++11/17, Java (Spring Boot), and React</span>, 
  with hands-on expertise in <span className="text-cyan-300">AWS, Azure, Docker, Kubernetes</span>, 
  and <span className="text-cyan-300">CI/CD automation</span>.
</p>

{/* Technical Strengths */}
<p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
  Experienced in building <span className="italic">cloud-native microservices</span>, 
  <span className="italic"> event-driven architectures with Kafka</span>, and 
  optimizing databases such as <span className="text-cyan-300">PostgreSQL</span>, 
  <span className="text-cyan-300"> MySQL</span>, and 
  <span className="text-cyan-300"> MongoDB</span>. Proficient in 
  <span className="text-cyan-300"> performance tuning</span>, 
  <span className="text-cyan-300"> system integration</span>, and 
  <span className="text-cyan-300"> API security</span>.
</p>

{/* Domain Expertise */}
<p className="text-lg md:text-xl text-gray-200 leading-relaxed">
  Adept at developing <span className="font-semibold text-pink-400">HIPAA-compliant healthcare platforms</span> 
  and <span className="font-semibold text-purple-400">real-time financial systems</span> 
  while ensuring <span className="text-cyan-300">performance, compliance, and maintainability</span>. 
  Passionate about bridging <span className="text-cyan-300">system-level precision</span> with 
  <span className="text-pink-400"> full-stack innovation</span>.
</p>
</div>

      </div>
    </section>
  );
}
