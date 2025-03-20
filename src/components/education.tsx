import sns from "../assets/sns.jpg";
import ssu from "../assets/ssu.png";
import cs50 from "../assets/harvard.png";
import { motion } from "framer-motion";

// Base education data array
const initialEducationData = [
  {
    logo: cs50,
    school: "CS50x 2023",
    degree: "Introductory Computer Science Course",
    date: "July 2023 - December 2023",
    link: "https://cs50.harvard.edu/x/",
  },
  {
    logo: ssu,
    school: "Samar State University",
    degree: "Bachelor of Science in Electronics Engineering",
    date: "July 2014 - May 2019",
    link: "https://ssu.edu.ph/",
  },
  {
    logo: sns,
    school: "Samar National School",
    degree: "Secondary Education",
    date: "July 2010 - March 2014",
    link: "https://www.sns.edu.ph/",
  },
];

// Additional dynamic entries (can be loaded from API or user-defined)
// const newEducationData = [
//   {
  //   logo: sns,
  //   school: "Samar National School",
  //   degree: "Secondary Education",
  //   date: "July 2010 - March 2014",
  //   link: "https://www.sns.edu.ph/",
// //   }
// ];
// Merge initial and new education data
// const educationData = [...initialEducationData, ...newEducationData];


const educationData = [...initialEducationData];

// Parent animation variant to stagger child animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each child animation
    },
  },
};

// Animation variant for individual elements
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Education() {
  return (
    <>
      {/* Title */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="text-4xl font-bold text-primary mb-6"
      >
        <h2 className="animate-fadeInUp">Education.</h2>
      </motion.div>

      {/* Container for sections with stagger animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="space-y-4"
      >
        {/* Dynamic Education Sections */}
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            variants={fadeInVariants}
            className="flex items-center gap-4 p-4"
          >
            {/* Logo */}
            <div className="w-20 h-20 rounded-full">
              <img
                src={edu.logo}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col text-left">
              {/* School Name with Link */}
              <a
                href={edu.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-xl text-primary hover:text-accent"
              >
                {edu.school}
              </a>
              <div className="text-base text-secondary-500">{edu.degree}</div>
            </div>

            {/* Date */}
            <div className="ml-auto text-base text-gray-500">{edu.date}</div>
            
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default Education;
