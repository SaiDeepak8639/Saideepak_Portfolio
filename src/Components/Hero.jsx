export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between 
                 px-6 sm:px-12 md:px-16 py-16 max-w-6xl mx-auto 
                 bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 
                 text-white overflow-hidden rounded-3xl shadow-2xl"
    >
      {/* Left Section (Certifications + Text) */}
      <div className="flex-1 w-full text-center md:text-left mb-10 md:mb-0">
        {/* Certifications Row */}
        <div className="flex gap-4 justify-center md:justify-start mb-6 flex-wrap">
          {[
            { src: `${import.meta.env.BASE_URL}aws.jpg`, alt: "AWS" },
            { src: `${import.meta.env.BASE_URL}azure.jpg`, alt: "Azure" },
            { src: `${import.meta.env.BASE_URL}mta.jpg`, alt: "MTA" },
          ].map((cert) => (
            <div
              key={cert.alt}
              className="p-2 bg-white/10 backdrop-blur-xl border border-cyan-400/30 
                         rounded-xl shadow-md hover:scale-105 transition"
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="w-14 h-14 md:w-16 md:h-16 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Name & Role */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 
                       bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 
                       text-transparent bg-clip-text drop-shadow-lg">
          Praneeth R
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4">
          Full Stack Developer
        </h2>

        {/* Intro */}
        <p className="italic text-base text-gray-300 mb-2">
          Masters in Computer Science, University of Central Missouri
        </p>
        <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-lg mx-auto md:mx-0">
          Building <span className="text-cyan-300">scalable</span>,{" "}
          <span className="text-purple-300">cloud-native</span>, and{" "}
          <span className="text-pink-300">AI-powered applications</span>. Skilled in{" "}
          <span className="font-semibold">Java, Spring Boot, React, AWS</span> and{" "}
          <span className="font-semibold">MLOps</span>, focused on delivering elegant
          solutions with real-world impact.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 my-5 justify-center md:justify-start">
          {[
            "AWS & Azure Cloud",
            "Java & Spring Boot",
            "Kafka & Databases",
            "React & Angular",
            "AI & MLOps",
            "Generative AI",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl 
                         border border-cyan-400/30 text-cyan-200 text-xs shadow-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
         <a
  href={`${import.meta.env.BASE_URL}resume.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 
             text-black font-bold shadow hover:scale-105 transition text-sm"
>
  View Resume
</a>

          <a
            href="https://github.com/586praneeth"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg border border-cyan-400 text-cyan-300 font-medium 
                       hover:bg-cyan-400 hover:text-black transition text-sm"
          >
            GitHub Projects
          </a>
       <a
  href={`${import.meta.env.BASE_URL}resume.pdf`}
  download
  className="px-5 py-2 rounded-lg border border-gray-400 text-gray-200 font-medium 
             hover:bg-white/10 transition text-sm"
>
  Download Resume
</a>

        </div>
      </div>

      {/* Right Section (Profile Image) */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative">
          <div className="absolute inset-0 rounded-full border-4 border-cyan-400 blur-md animate-pulse"></div>
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Praneeth"
            className="relative rounded-full shadow-xl border-4 border-cyan-400 
                       w-52 h-52 md:w-72 md:h-72 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
