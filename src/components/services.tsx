import { motion, useInView } from "framer-motion";
import { useRef, ComponentType } from "react";
import { serviceData } from "../data/servicesData";

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      {/* Section Title */}
      <motion.div
        className="text-4xl pb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="font-bold text-primary">Services.</h2>
        <p className="text-sm text-secondary-500 text-center p-4">
          I offer practical and technical services to support clients and students alike.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {serviceData.map((service: ServiceData, index: number) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 bg-base-50 rounded-xl shadow-md p-4 border border-gray-800 hover:border-primary transition duration-300 ease-in-out"
            variants={cardVariants}
          >
            {/* Icon */}
            <div className="w-14 h-14 bg-primary rounded-md flex-shrink-0 flex items-center justify-center text-white">
              {service.icon && <service.icon className="w-6 h-6" />}
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-primary text-left">
                {service.title}
              </h3>
              <p className="text-sm text-secondary-600 text-left">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// Type declaration
interface ServiceData {
  title: string;
  desc: string;
  icon?: ComponentType<any>; // Accepts any React component (Lucide, FontAwesome, etc.)
}

export default Services;
