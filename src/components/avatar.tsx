import logo from "../assets/me.png";
import { FaLinkedin, FaFacebook, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import TypingAnimation from "./TypingAnimation";

// Animation variants for icons
const iconVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.6 + index * 0.2, // Staggered delay
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function Avatar() {
  return (
    <div className="flex items-center justify-center gap-8 pt-25 pb-15">
      {/* Avatar Section */}
      <motion.div
        className="w-48 h-48 rounded-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={logo}
          alt="Aldrin's Avatar"
          className="w-48 h-48 object-cover rounded-full bg-primary-400 hover:bg-primary transition duration-500 ease-in-out"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="text-left"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h1 className="text-6xl font-bold pt-8">
          Hi, I’m <span className="text-primary hover:text-accent transition duration-500">Aldrin</span>
        </h1>
        <div className="text-2xl text-base-content font-bold text-left mt-2 mb-4">
          <TypingAnimation
            steps={[
              "a Software Developer.",
              "a Freelancer.",
              "a Tech Enthusiast.",
            ]}
            loop={true}
            delay={100}
            deleteSpeed={50}
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-left">
          {[
            {
              href: "https://www.linkedin.com/in/aldrin-jay-delos-reyes-559817267/",
              icon: <FaLinkedin size={28} />,
              name: "LinkedIn",
            },
            {
              href: "https://www.facebook.com/drindlr",
              icon: <FaFacebook size={28} />,
              name: "Facebook",
            },
            {
              href: "https://github.com/Aldrin4197",
              icon: <FaGithub size={28} />,
              name: "GitHub",
            },
            {
              href: "mailto:aldrinjay.delosreyes17@gmail.com",
              icon: <FaEnvelope size={28} />,
              name: "Email",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors duration-200"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              aria-label={item.name}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Avatar;
