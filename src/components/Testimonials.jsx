import React from "react";
import { motion } from "framer-motion";
import person1 from './../images/person1.jpg';
import person2 from './../images/person2.png';
import person3 from './../images/person3.jpg';

const testimonials = [
  {
    name: "Sarah L.",
    title: "Happy Member",
    quote: "Joining the Building Society was the best decision for my family's future!",
    image: person1, // Place in /public
  },
  {
    name: "James T.",
    title: "Loyal Customer",
    quote: "Their mortgage advice helped me buy my first home easily!",
    image: person2,
  },
  {
    name: "Emily R.",
    title: "Proud Member",
    quote: "I love the app and the customer service is outstanding!",
    image: person3,
  },
];

// Framer Motion Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          What Our Members Say
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition"
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-36 h-36 object-cover rounded-full z-[1] -mt-[60px] mb-[50px]"
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-blue-600 text-sm mb-4">{testimonial.title}</p>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
