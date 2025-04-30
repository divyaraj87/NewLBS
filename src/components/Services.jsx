import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Mortgages",
    description: "Flexible options to help you own your home.",
    image: "/mortgage.jpg", // (Place inside /public folder)
    link: "#", // You can replace this with real page links
  },
  {
    title: "Savings",
    description: "Grow your money safely and securely.",
    image: "/savings.jpg",
    link: "#",
  },
  {
    title: "Insurance",
    description: "Protect what matters most to you.",
    image: "/insurance.jpg",
    link: "#",
  },
];

// Framer Motion Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">How Can We Help Today?</h2>
          <p className="text-gray-600">Choose from our range of services</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.link}
              variants={item}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer"
            >
              <img src={service.image} alt={service.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
