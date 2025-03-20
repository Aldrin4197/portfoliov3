import { FaGithub } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projectData } from "../data/projectData";

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Projects() {
  // Reference for animation trigger
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <div ref={ref}>
        {/* Title with animation */}
        <motion.div
          className="text-4xl pb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-bold text-primary">Recent Projects.</h2>
          <p className="text-sm text-secondary-500 text-center p-4">
            I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
          </p>
        </motion.div>

        {/* Container for cards (2 columns layout) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {/* Project Cards with Animation */}
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="card card-border bg-base-100 w-full shadow-md hover:border-primary transition duration-500 ease-in-out"
              variants={cardVariants}
            >
              <figure>
                <img src={project.img} alt={project.title} />
              </figure>
              <div className="card-body">
                {/* Project Title and Status Badge (Aligned Right) */}
                <h2 className="card-title text-primary text-left flex justify-between items-center">
                  {project.title}
                  <div className="badge badge-soft badge-info ml-2">
                    {project.status}
                  </div>
                </h2>

                <p className="text-left">{project.desc}</p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 justify-left pb-4">
                  {project.tech.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="badge badge-outline badge-sm rounded-md badge-primary"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="card-actions justify-end">
                  <a
                    href={project.visitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn text-lg btn-neutral hover:btn-primary"
                  >
                    Visit
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-transform"
                  >
                    <FaGithub className="w-10 h-10 text-neutral hover:text-primary cursor-pointer" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Projects;
