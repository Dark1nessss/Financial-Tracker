import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const linksRef = useRef([]);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  useEffect(() => {
    const activeIndex = linksRef.current.findIndex(link => link.pathname === activeLink);
    if (activeIndex !== -1 && linksRef.current[activeIndex]) {
      const linkElement = linksRef.current[activeIndex];
      setIndicatorStyle({
        width: `${linkElement.offsetWidth}px`,
        left: `${linkElement.offsetLeft}px`,
        backgroundColor: '#2E2E2E',
        opacity: 0.5,
        height: '150%',
        borderRadius: '8px',
      });
    }
  }, [activeLink]);

  return (
    <header className="bg-[#141313]">
      <nav className="bg-[#1c1c1c] py-4 px-8 flex justify-between items-center rounded-full max-w-7xl mx-auto shadow-lg mt-6 relative">
        {/* Icon */}
        <div className="flex items-center">
          <img src="/logo.png" alt="YourBank Logo" className="h-6 mr-4 transform transition-transform duration-300 hover:rotate-45" />
          <span className="text-[#C1F000] text-2xl font-bold">
            Your<span className="text-white text-2xl font-bold">BanK</span>
          </span>
        </div>

        {/* Icon for Mobile Menu */}
        <button className="text-green-400 md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Links and Navigation - Mobile & Desktop */}
        <ul className={`md:flex text-white items-center space-x-6 ${isOpen ? 'block' : 'hidden'} md:block relative`}>
          {/* Sliding Indicator */}
          <div
            className="absolute transition-all duration-300"
            style={indicatorStyle}
          ></div>

          {/* Menu Items */}
          {['/', '/careers', '/about', '/security'].map((path, index) => (
            <li key={path}>
              <Link
                to={path}
                ref={el => (linksRef.current[index] = el)}
                className={`py-2 px-4 rounded-full transition-colors duration-300 ${activeLink === path ? 'text-white' : 'hover:text-[#C1F000]'}`}
                onClick={() => setActiveLink(path)}
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