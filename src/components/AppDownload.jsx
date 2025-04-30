import React from "react";
import { motion } from "framer-motion";
import android from './../images/android.PNG';
import ios from './../images/ios.PNG';
import Phone from './../images/Phone.PNG';

const AppDownload = () => {
  return (
    <section class="bg-yellow-500 py-16 px-6">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
      
     
      <div class="max-w-xl text-center md:text-left">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Do you have our app?
        </h2>
        <p class="text-gray-800 mb-6">
          Download it now to have access to your accounts no matter where you are.
        </p>
        <div class="flex justify-center md:justify-start gap-4">
          <a href="#">
            <img src={android} alt="App Store" class="h-12" />
          </a>
          <a href="#">
            <img src={ios} alt="Google Play" class="h-12" />
          </a>
        </div>
      </div>
  
     
      <div class="mt-10 md:mt-0 md:ml-12 animate-slide-in-left">
        <img src={Phone} alt="Phone Image" class="w-64 md:w-80 rotate-[15deg] shadow-xl" />
      </div>
  
    </div>
  </section>
  
  );
};

export default AppDownload;
