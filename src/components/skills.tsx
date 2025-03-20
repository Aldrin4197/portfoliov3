import { motion, useInView } from "framer-motion";
import { useRef } from "react";


function Skills() {
  // Create a reference for the section
  const ref = useRef(null);

  // Detect when the section is in view
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <div ref={ref}>
        {/* Title with animation */}
        <motion.div
          className="text-4xl font-bold text-primary gap-8 pb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2>Skills.</h2>
        </motion.div>

        {/* Badges container with animation */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.1, // Stagger animation for each badge
                delayChildren: 0.2,
              },
            },
          }}
        >
          {/* Individual badge animation */}
          {[
            "Embedded Systems",
            "Laravel",
            "Next.js",
            "Python",
            "Vite",
            "MySQL",
            "MongoDB",
            "TailwindCSS",
            "WordPress",
            "Vue",
            "Arduino",
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="badge badge-neutral badge-lg rounded-md hover:badge-primary transition-all duration-200"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Skills;
