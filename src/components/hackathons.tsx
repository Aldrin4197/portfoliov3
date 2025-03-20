import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { hackathonData } from "../data/hackathonData";

// Define Hackathons Component
const Hackathons: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section ref={ref} className="px-6 py-5">
      {/* Heading Section */}
      <motion.h2
        className="text-4xl font-bold text-primary text-center mb-5"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Hackathons.
      </motion.h2>

      <motion.h2
        className="text-sm text-secondary-500 text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        "During my time in university, I attended 4+ hackathons. People from
        around the country would come together and build incredible things in
        2-3 days. It was eye-opening to see the endless possibilities brought to
        life by a group of motivated and passionate individuals."
      </motion.h2>

      {/* Hackathon List */}
      <div className="space-y-6">
        {hackathonData.map((item, index) => (
          <motion.div
            className="flex items-start space-x-6"
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Left Side - Logo */}
            <div className="flex-shrink-0">
              <div className="avatar">
                <div className="w-16 h-16 rounded-full border border-base-300">
                  <img src={item.logo} alt={item.title} />
                </div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="flex-grow text-left">
              <p className="text-sm text-secondary-700">{item.date}</p>
              <h3 className="text-xl font-bold text-primary">{item.title}</h3>
              <p className="text-sm text-secondary">{item.location}</p>
              <p className="text-base text-secondary-500">{item.description}</p>
              <div className="divider"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;
