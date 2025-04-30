import React from "react";
import { motion } from "framer-motion";
import Home from './../images/Home.PNG';
import Hand from './../images/Hand.PNG';

const statsData = [
  {
    value: "91,000",
    label: "Members",
  },
  {
    value: "9,146",
    label: "Mortgages",
  },
  {
    value: "£735m",
    label: "Total Assets",
  },
];

const Stats = () => {
  return (
    <section class="bg-gray-50 py-10 px-6">
  <div class="max-w-6xl mx-auto text-center">
    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 blue-text">
      We've been helping members for <span class="text-cyan-600 light-blue-text">150 years</span>
    </h2>
    <p class="text-cyan-600 font-semibold mt-2 light-blue-text">As at 27 March 2025...</p>

    <div class="mt-10 flex flex-col md:flex-row justify-center items-start md:items-center gap-10">
      
      <div class="flex items-start gap-4 max-w-l">
        <img src={Home} alt="House icon" class="w-10 h-10 shrink-0" />
        <p class="text-gray-700 text-sm md:text-base blue-text">
          With the help of our <strong class="text-lg text-gray-900 blue-text font-bold">991,000</strong> savings members,<br />
          we've supported <strong class="text-lg text-gray-900 blue-text font-bold">37,200</strong> in buying their new home
        </p>
      </div>

      
      <div class="hidden md:block h-16 border-l border-gray-300"></div>

      
      <div class="flex items-start gap-4 max-w-l">
        <img src={Hand} alt="Hand icon" class="w-10 h-10 shrink-0" />
        <p class="text-gray-700 text-sm md:text-base blue-text">
          We've given <strong class="text-lg text-gray-900 blue-text font-bold">£175m</strong> extra interest, by paying<br />
          0.79% above the rest of the market average
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default Stats;
