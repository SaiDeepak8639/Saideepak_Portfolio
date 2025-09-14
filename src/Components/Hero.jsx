export default function Hero() {
  return (
<section 
  id="home"
  className="flex flex-col md:flex-row items-start justify-between px-10 pb-8 max-w-7xl mx-auto
             bg-white dark:bg-[#1c1c1e] text-gray-900 dark:text-gray-100 transition-colors"
>
  {/* Left */}
  <div className="flex-1 text-center md:text-left mb-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-gray-100">
      PRANEETH REDDY NAGILLA
    </h1>
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
      FULL STACK DEVELOPER
    </h2>
    <p className="italic text-lg text-gray-600 dark:text-gray-400 mb-3">
      Masters in Computer Science, University of Central Missouri
    </p>
    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
      Building scalable, cloud-native, and AI-powered applications. Experienced with Java,
      Spring Boot, React, AWS, and MLOps. Focused on delivering elegant solutions with real-world impact.
    </p>





        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
          {["AWS & Azure Cloud", "Java & Spring Boot", "Kafka & Databases", "React & Angular", "AI & MLOps", "Generative AI"].map(tag => (
            <span key={tag} className="px-4 py-2 rounded-full bg-gray-100 dark:bg-[#2c2c2e] text-gray-700 dark:text-gray-300 text-sm">
              {tag}
            </span>
          ))}
        </div>

{/* Buttons */}
<div className="flex gap-4 justify-center md:justify-start">
  {/* Resume Button */}
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 rounded-lg bg-[#0071e3] text-white font-semibold shadow-md 
               hover:bg-[#005bb5] hover:shadow-lg transition-all duration-300"
  >
    View Resume
  </a>

  {/* GitHub Button */}
  <a
    href="https://github.com/praneeth340"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 rounded-lg border-2 border-[#0071e3] text-[#0071e3] font-semibold 
               hover:bg-[#0071e3] hover:text-white hover:shadow-lg transition-all duration-300"
  >
    GitHub Projects
  </a>
    {/* Download Resume */}
  <a
    href="resume.pdf"
    download
    className="border border-gray-500 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
  >
    Download Resume
  </a>
</div>


      </div>

      {/* Right */}
      <div className="flex-1 flex flex-col items-center">
     <div className="flex gap-4 justify-center mb-6">
  <img 
    src={`${import.meta.env.BASE_URL}aws.jpg`} 
    alt="AWS" 
    className="w-16 h-16 md:w-20 md:h-20 object-contain" 
  />
  <img 
    src={`${import.meta.env.BASE_URL}azure.jpg`} 
    alt="Azure" 
    className="w-16 h-16 md:w-20 md:h-20 object-contain" 
  />
  <img 
    src={`${import.meta.env.BASE_URL}mta.jpg`} 
    alt="MTA" 
    className="w-16 h-16 md:w-20 md:h-20 object-contain" 
  />
</div>

<img 
  src={`${import.meta.env.BASE_URL}profile.jpg`} 
  alt="Praneeth" 
  className="rounded-2xl shadow-xl border-4 border-[#0071e3] w-96 h-96 md:w-108 md:h-108 object-cover" 
/>



</div>
    </section>
  );
}
