import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-[#141313]'>
    <nav className="bg-[#1c1c1c] py-4 px-8 flex justify-between items-center rounded-full max-w-7xl mx-auto shadow-lg mt-6 relative">
      {/* Logotipo */}
      <div className="flex items-center">
      <img src="/logo.png" alt="YourBank Logo" className="h-6 mr-4 transform transition-transform duration-300 hover:rotate-45" />
        <span className="text-[#C1F000] text-2xl font-bold">Your<span className="text-white text-2xl font-bold">BanK</span></span>
      </div>

      {/* Ícone do Menu para Mobile */}
      <button className="text-green-400 md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Links de Navegação - Mobile & Desktop */}
      <ul className={`md:flex md:space-x-4 text-white items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
        <li>
          <Link 
            to="/" 
            className="py-2 px-4 rounded-full bg-[#2E2E2E] text-white transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/careers" 
            className="py-2 px-4 rounded-full hover:text-[#C1F000] transition-colors duration-300"
          >
            Careers
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className="py-2 px-4 rounded-full hover:text-[#C1F000] transition-colors duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/security" 
            className="py-2 px-4 rounded-full hover:text-[#C1F000] transition-colors duration-300"
          >
            Security
          </Link>
        </li>
      </ul>

      {/* Botões de Login e Sign Up - Mobile & Desktop */}
      <div className="hidden md:flex space-x-6">
      <Link 
        to="/signup" 
        className="text-white px-3 py-2 rounded-full hover:text-[#C1F000] transition-colors duration-300">
        Sign Up
      </Link>
      <Link 
        to="/login" 
        className="bg-[#C1F000] text-black px-[30px] py-[7px] rounded-full hover:bg-[#A8E000] transition-colors duration-300 font-semibold">
        Login
      </Link>
      </div>
    </nav>
    </header>
  );
}

export default Navbar;