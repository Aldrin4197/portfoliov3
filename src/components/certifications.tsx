import React from "react";
import certificationsData from "../data/certificationsData";
import { motion } from "framer-motion";

function Certifications() {
  return (
    <>
      <motion.h2
        className="text-4xl font-bold text-primary text-center mb-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Certifications.
      </motion.h2>

      <div className="w-full max-w-3xl mx-auto">
        <ul className="list text-left">
          {certificationsData.map((cert, index) => (
            <motion.li
              key={index}
              className="list-row flex flex-col md:flex-row items-start gap-4 p-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Awarding Body Image */}
              <div className="flex-shrink-0">
                <img
                  className="w-16 h-16 rounded-box"
                  src={cert.imgSrc}
                  alt={cert.organization}
                />
              </div>

              {/* Certification Info */}
              <div className="flex-grow text-left">
                <div className="text-lg font-bold text-primary">
                  {cert.title}
                </div>
                <div className="text-base text-secondary">
                  {cert.organization} • {cert.date}
                </div>
                <p className="text-base text-secondary-500 pt-1">
                  {cert.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Certifications;
