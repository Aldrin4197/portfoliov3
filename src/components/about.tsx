import { motion } from "framer-motion";

function About() {
  // Animation Variants
  const slideInVariants = {
    hidden: { opacity: 0, x: 50 }, // Start from the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      {/* Animated Title */}
      <motion.h2
        className="text-2xl font-bold text-primary text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={slideInVariants}
      >
        About.
      </motion.h2>

      {/* Animated Description */}
      <motion.div
        className="text-md text-secondary-500 text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={slideInVariants}
      >
        At the end of 2022, transitioned to focus into learning software
        development. A self-taught developer with a background in
        <a
          href="#"
          className="font-black text-primary hover:text-accent"
        >
          <span> Electronics Engineering</span>
        </a>
        . I am also passionate about prototyping, tinkering, and competing in
        local and regional product and research competitions to explore creative
        and technical challenges.
      </motion.div>
    </>
  );
}

export default About;
