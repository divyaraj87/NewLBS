import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import hero from './../images/hero.png';
import whiteStar from './../images/white-star.svg';
import greenStar from './../images/green-star.svg';

const Hero = () => {
  return (
    <>
    <section className="relative h-[60vh] flex items-center justify-left overflow-hidden">
      {/* Background Image */}
      <motion.img
        src={hero} // <-- Make sure to have this image inside /public
        alt="Hero"
        className="absolute w-full h-full object-cover h-[600px]"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Content */}
      <motion.div
        className="relative text-left text-white p-6 rounded-lg ml-14"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h5 className="text-4xl md:text-6xl font-bold mb-6">Be part of</h5>
        <h1 className="text-7xl md:text-7xl font-bold mb-6 yellow-text">our community</h1>
        
        {/* <Link to="services" smooth={true} duration={500}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold"
          >
            Find out more
          </motion.button>
        </Link> */}
      </motion.div>
    </section>
    <div className="bg-gray-100 py-2 px-4 flex flex-col md:flex-row items-center justify-between text-sm grey-bg">
    {/* Left text */}
    <div className="font-bold blue-text pl-12 text-2xl md:text-2xl">Join our 1 million members</div>

    {/* Right Trustpilot info */}
    <div className="flex items-center gap-1 text-gray-800 mt-1 md:mt-0 pr-12">
      <span className="font-semibold">Excellent</span>
      {/* Stars - Replace with image or emoji/styled stars */}
      <img src={whiteStar} alt="Trustpilot stars" className="h-4" />
      <img src={whiteStar} alt="Trustpilot stars" className="h-4" />
      <img src={whiteStar} alt="Trustpilot stars" className="h-4" />
      <img src={whiteStar} alt="Trustpilot stars" className="h-4" />
      <img src={whiteStar} alt="Trustpilot stars" className="h-4" />
      <span className="font-semibold">4.7 out of 5 based on 3,069 reviews</span>
      <img src={greenStar} alt="Trustpilot stars" className="h-4" />
      <span className="font-semibold">Trustpilot</span>
    </div>
  </div>
  </>
  );
};

export default Hero;
