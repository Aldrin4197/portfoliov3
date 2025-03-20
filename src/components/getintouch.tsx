import { motion } from "framer-motion";
import avatar from "../assets/jjk.png"; // Change path if necessary

function Getintouch() {
  // Animation variants for fading in elements
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 pt-8">
      {/* Heading with Animation */}
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="text-4xl font-bold text-primary text-center mb-3"
      >
        Get in touch.
      </motion.h2>

      <div className="flex items-center gap-6">
        {/* Avatar Section with Animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 0.2 }} // Slight delay for avatar animation
          className="avatar"
        >
          <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={avatar} alt="Aldrin's Avatar" />
          </div>
        </motion.div>

        {/* Text Section with Animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 0.4 }} // Slight delay for text animation
          className="text-left"
        >
          <p className="text-md text-base-content">
            Want to chat? Just shoot me a DM with a direct question on <a href="facebook.com"><span className="text-secondary font-bold">Facebook </span></a>
            and I'll respond as soon as I can.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Getintouch;
