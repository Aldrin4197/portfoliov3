import { motion } from "framer-motion";
import experienceData from "../data/experiencedata";

// Animation variants for fading in items
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Experience() {
  return (
    <>
      {/* Title Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="text-4xl font-bold text-primary text-center pb-8"
      >
        <h2>Experience.</h2>
      </motion.div>

      {/* Timeline Container */}
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {experienceData.map((item, index) => (
          <motion.li
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
            viewport={{ once: true }}
          >
            {/* Divider between items */}
            {index !== 0 && <hr />}

            {/* Timeline Icon in the Middle */}
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Timeline Content */}
            <div
              className={`${
                index % 2 === 0
                  ? "timeline-start md:text-end md:mb-10 md:pr-8"
                  : "timeline-end text-left md:mb-10 md:pl-8"
              } mb-10 max-md:text-left max-md:mb-8`}
            >
              <div className="text-xl font-black text-primary">{item.title}</div>
              <div className="text-base text-secondary">
                {item.company} <span className="text-gray-500">({item.duration})</span>
              </div>
              <p className="text-sm text-secondary-500">{item.description}</p>
            </div>

            {/* Add HR line at the end except for the last item */}
            {index !== experienceData.length - 1 && <hr />}
          </motion.li>
        ))}
      </ul>
    </>
  );
}

export default Experience;
