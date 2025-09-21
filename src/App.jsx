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
import Publications from "./Components/Publications";
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 text-white font-[Poppins]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
