import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 grid gap-8 md:grid-cols-3">
        {/* Brand Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Building Society</h3>
          <p className="text-gray-400">
            123 Main Street,<br />City, Country 12345
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#services" className="hover:text-blue-400 transition">Services</a>
            </li>
            <li>
              <a href="#whybelong" className="hover:text-blue-400 transition">Why Belong</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-blue-400 transition">Testimonials</a>
            </li>
            <li>
              <a href="#appdownload" className="hover:text-blue-400 transition">Download App</a>
            </li>
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-start"
        >
          <h4 className="text-xl font-semibold mb-4">Connect with us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.5.6-2.34.7a4.15 4.15 0 0 0 1.82-2.27 8.27 8.27 0 0 1-2.62 1 4.13 4.13 0 0 0-7 3.77 11.7 11.7 0 0 1-8.5-4.3 4.13 4.13 0 0 0 1.28 5.52 4.07 4.07 0 0 1-1.86-.5v.05a4.14 4.14 0 0 0 3.3 4 4.15 4.15 0 0 1-1.85.07 4.13 4.13 0 0 0 3.85 2.86A8.3 8.3 0 0 1 2 19.54a11.7 11.7 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.34 8.34 0 0 0 24 5.5a8.19 8.19 0 0 1-2.36.65 4.1 4.1 0 0 0 1.8-2.26z" />
              </svg>
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99h-2.54V12h2.54V9.5c0-2.5 1.5-3.88 3.78-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54V12h2.74l-.44 2.89h-2.3v6.99C18.34 21.12 22 16.99 22 12z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Copy */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Building Society. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
