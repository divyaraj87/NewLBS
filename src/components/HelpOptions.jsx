import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Mortgage from './../images/Mortgages.PNG';
import Savings from './../images/Savings.PNG';
import Insurance from './../images/Insurance.PNG';

const services = [
  {
    title: "Mortgages",
    image: Mortgage, // Adjust to your image path
  },
  {
    title: "Savings",
    image: Savings,
  },
  {
    title: "Insurance",
    image: Insurance,
  },
];

const HelpOptions = () => {
  return (
    <section className="py-12 bg-white">
    <div className="text-center mb-10">
      <h2 className="text-2xl font-bold text-blue-900">
        How can we help today?
      </h2>
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center gap-10">
      {services.map((service) => (
        <motion.div
          key={service.title}
          className="relative bg-gray-100 rounded-xl p-6 w-[450px] text-center shadow-sm group"
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.h3
              className="text-lg font-bold text-blue-900 mb-4 flex items-center justify-center"
              initial={{ x: 10 }}
              whileHover={{ x: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {service.title}
          
            
          {/* Arrow Icon */}
          <motion.div
            className="absolute right-4 text-blue-800 opacity-0 group-hover:opacity-100"
            initial={{ x: -10 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FiArrowRight size={20} />
          </motion.div>
          </motion.h3>
          <img
            src={service.image}
            alt={service.title}
            className="mx-auto w-34 h-34 object-contain mb-2"
          />

        </motion.div>
      ))}
    </div>
  </section>
  );
};

export default HelpOptions;
