// src/App.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

// Components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex font-[Poppins] bg-gradient-to-b from-white via-cyan-50 to-blue-100 text-gray-800">
      {/* Fixed sidebar navigation */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-1 ml-20 md:ml-60">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
