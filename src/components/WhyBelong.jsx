import React, { useState } from "react";
import { motion } from "framer-motion";

const WhyBelong = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="whybelong" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8"
        >
          Why It’s Better to Belong
        </motion.h2>

        {/* Video Thumbnail */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <img
            src="/video-thumbnail.jpg" // <-- Place a thumbnail image in /public
            alt="Video Thumbnail"
            className="rounded-xl shadow-lg"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-full p-4 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-4.596-2.65A1 1 0 009 9.382v5.236a1 1 0 001.156.987l4.596-2.65a1 1 0 000-1.736z"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Modal Video */}
        {open && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg overflow-hidden max-w-3xl w-full relative">
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-2 right-2 text-gray-700 hover:text-black"
              >
                ✕
              </button>

              {/* Embed YouTube or Video */}
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" // <-- Replace with your video link
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyBelong;
