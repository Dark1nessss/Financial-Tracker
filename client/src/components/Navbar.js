import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className='bg-[#141313]'>
      <nav className="bg-[#1c1c1c] py-4 px-8 flex justify-between items-center rounded-full max-w-7xl mx-auto shadow-lg mt-6 relative">
        {/* Icon */}
        <div className="flex items-center">
          <img src="/logo.png" alt="YourBank Logo" className="h-6 mr-4 transform transition-transform duration-300 hover:rotate-45" />
          <span className="text-[#C1F000] text-2xl font-bold">Your<span className="text-white text-2xl font-bold">BanK</span></span>
        </div>

        {/* Icon for Mobile Menu */}
        <button className="text-green-400 md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Links and Navigation - Mobile & Desktop */}
        <ul className={`md:flex text-white items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
          {['/', '/careers', '/about', '/security'].map((path, index) => (
            <li key={path}>
              <Link
                to={path}
                className={`py-2 px-4 rounded-lg transition-colors duration-300 ${
                  location.pathname === path ? 'bg-[#2E2E2E] text-white' : 'hover:text-[#C1F000]'
                }`}
              >
                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Buttons for Login and Sign Up - Mobile & Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/register"
            className="text-white px-3 py-2 rounded-full hover:text-[#C1F000] transition-colors duration-300"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-[#C1F000] text-black px-[30px] py-[7px] rounded-full hover:bg-white transition-colors duration-300 font-semibold"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
