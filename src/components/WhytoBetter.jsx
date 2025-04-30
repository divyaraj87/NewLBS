import React from "react";
import { motion } from "framer-motion";
import better from './../images/better-to-belong.png';

const WhytoBetter = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-left overflow-hidden">
      {/* Background Image */}
      <motion.img
        src={better} // <-- Make sure to have this image inside /public
        alt="Hero"
        className="absolute w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      />
    </section>
  );
};

export default WhytoBetter;
