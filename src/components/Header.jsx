import React from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import logo from './../images/logo.svg';

const Header = () => {
  return (
    <header className="bg-blue-900 blue-bg text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 h-15">
        
        {/* Left: Logo and Tagline */}
        <div className=" items-center gap-2">
            <img src={logo} alt="Logo" className="w-15 h-15" />
            <div className="text-yellow-400 text-xs yellow-text">It's better to belong</div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#savings" className="hover:text-yellow-400 transition">Savings</a>
          <a href="#mortgages" className="hover:text-yellow-400 transition">Mortgages</a>
          <a href="#your-society" className="hover:text-yellow-400 transition">Your Society</a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition">
            More <FiChevronDown size={16} />
          </div>
        </nav>

        {/* Right: Search Bar and Log in Button */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="I'm looking for..."
              className="rounded-full pl-4 pr-10 py-2 text-black placeholder-gray-500 focus:outline-none w-48"
            />
            <FiSearch className="absolute right-3 top-2.5 text-gray-500" />
          </div>
          <button className="border border-white rounded-full px-4 py-1 hover:bg-white hover:text-blue-900 transition">
            Log in
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
