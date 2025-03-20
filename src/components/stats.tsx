import { motion } from "framer-motion";

function Stats() {
  // Animation variants for fading in stats and scaling them slightly
  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      <div className="text-md stats stats-vertical lg:stats-horizontal shadow">
        <motion.div
          className="stat"
          initial="hidden"
          animate="visible"
          variants={statVariants}
        >
          <div className="text-primary text-base font-bold stat-title">Satisfied Clients</div>
          <div className="stat-value">30+</div>
          <div className="stat-desc text-md">Active since 2023</div>
        </motion.div>

        <motion.div
          className="stat"
          initial="hidden"
          animate="visible"
          variants={statVariants}
          transition={{ delay: 0.2 }} // Slight delay for the second stat
        >
          <div className="text-primary text-base font-bold stat-title">Finished Projects</div>
          <div className="stat-value">30+</div>
          <div className="stat-desc text-md">Completed by 2025</div>
        </motion.div>

        <motion.div
          className="stat"
          initial="hidden"
          animate="visible"
          variants={statVariants}
          transition={{ delay: 0.4 }} // Slight delay for the third stat
        >
          <div className="text-primary text-base font-bold stat-title">Positive Feedbacks</div>
          <div className="stat-value">95%</div>
          <div className="stat-desc text-md">Updated as of 2025</div>
        </motion.div>
      </div>
    </>
  );
}

export default Stats;
