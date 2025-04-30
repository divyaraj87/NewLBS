import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomePage from './sections/HomePage';
import { motion } from 'framer-motion';
const App = () => {
  const [data, setData] = useState([]);

  /* useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setData(res.data));
  }, []); */
  const fadeIn = (direction = "up", delay = 0) => {
    return {
      hidden: { opacity: 0, y: direction === "up" ? 40 : direction === "down" ? -40 : 0, x: direction === "left" ? 40 : direction === "right" ? -40 : 0 },
      show: { opacity: 1, y: 0, x: 0, transition: { delay, duration: 0.6, ease: "easeOut" } }
    };
  };
  return (

    <div className="font-sans">
     <HomePage />

    </div>
  );
};

export default App;
