import "./App.css";
import Timeline from "./components/experience";
import Toggle from "./components/mode-toggle";
import Avatar from "./components/avatar";
import Education from "./components/education";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Hackathons from "./components/hackathons";
import About from "./components/about";
import Certifications from "./components/certifications";
import Getintouch from "./components/getintouch";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import Stats from "./components/stats";

function App() {
  // State to show/hide scroll-to-top button
  const [showButton, setShowButton] = useState(false);

  // Show button when scrolled down 300px
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Global click handler to blur any focused element
  const handleGlobalClick = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <div onClick={handleGlobalClick} className="w-full h-full cursor-default">
      {/* Top Right Controls (Mode Toggle + Download CV Button) */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
  {/* Download CV Button First */}
  <motion.a
    href="/assets/cv.pdf" // Update the path to your CV
    download="Aldrin_CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-primary btn-sm transition-all duration-300 hover:bg-secondary hover:text-white"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    Download CV
  </motion.a>

  {/* Dark/Light Mode Toggle */}
  <Toggle />
</div>


      {/* Main Content */}
      <div className="w-full max-w-3xl justify-center mx-auto flex flex-col gap-8">
        <Avatar />
        <About />
        <div className="divider"></div>
        <Skills />
        <div className="divider"></div>
        <Stats />
        <div className="divider"></div>
        <Projects />
        <div className="divider"></div>
        <Timeline />
        <div className="divider"></div>
        <Education />
        <div className="divider"></div>
        <Certifications />
        <div className="divider"></div>
        <Hackathons />
        <div className="divider"></div>
        <Getintouch />
        <div className="divider"></div>
      </div>

      {/* Scroll-to-Top Button with Intro & Outro Animation */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 btn btn-primary btn-circle shadow-lg z-50"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to Top"
          >
            <FaArrowUp className="h-5 w-5 text-base-100" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
