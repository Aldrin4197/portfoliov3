import Timeline from "../components/experience";
import Avatar from "../components/avatar";
import Education from "../components/education";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Hackathons from "../components/hackathons";
import About from "../components/about";
import Certifications from "../components/certifications";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import Stats from "../components/stats";
import ContactForm from "../components/contactform";
import Services from "../components/services";
import Feedback from "../components/feedback";
import FeedbackViewer from "../components/feedbackViewer";

function Home() {
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

  return (
    <>
      <Avatar />
      <About />
      <div className="divider"></div>
      <Skills />
      <div className="divider"></div>
      <Stats />
      <div className="divider"></div>
      <Timeline />
      <div className="divider"></div>
      <Services />
      <div className="divider"></div>
      <Projects />
      <div className="divider"></div>
      <Education />
      <div className="divider"></div>
      <Certifications />
      <div className="divider"></div>
      <Hackathons />
      <div className="divider"></div>
      <ContactForm />
      <div className="divider"></div>
      <Feedback />
      <div className="divider"></div>
      <FeedbackViewer />
      <div className="divider"></div>

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
    </>
  );
}

export default Home;
