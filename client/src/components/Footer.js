import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white py-12">
      <div className="container mx-auto text-center">
        {/* Logo and Navigation */}
        <div className="flex justify-center items-center mb-6 space-x-4">
          <img 
            src="/logo.png" 
            alt="YourBank Logo" 
            className="h-8 transform transition-transform duration-300 hover:rotate-45" 
          />
          <span className="text-xl font-bold text-white">Your<span className="text-xl font-bold text-[#C1F000]">BanK</span></span>
        </div>

        {/* Navigation Links */}
        <ul className="flex justify-center space-x-8 text-sm mb-6 border-b border-[#333333] pb-4">
          <li><Link to="/" className="hover:text-[#C1F000] transition-colors duration-300">Home</Link></li>
          <li><Link to="/careers" className="hover:text-[#C1F000] transition-colors duration-300">Careers</Link></li>
          <li><Link to="/about" className="hover:text-[#C1F000] transition-colors duration-300">About</Link></li>
          <li><Link to="/security" className="hover:text-[#C1F000] transition-colors duration-300">Security</Link></li>
        </ul>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8 text-sm">
          <p className="flex items-center"><span className="text-[#C1F000] mr-2"><img src="/mail.png" alt="YourBank Mail" className="h-4 transform transition-transform duration-[900ms] hover:rotate-[360deg]" /> </span> hello@skillbridge.com</p>
          <p className="flex items-center"><span className="text-[#C1F000] mr-2"><img src="/phone.png" alt="YourBank Phone" className="h-4 transform transition-transform duration-[900ms] hover:rotate-[360deg]" /> </span> +91 91813 23 2309</p>
          <p className="flex items-center"><span className="text-[#C1F000] mr-2"><img src="/location.png" alt="YourBanK Location" className="h-4 transform transition-transform duration-[900ms] hover:rotate-[360deg]" /> </span> Somewhere in the World</p>
        </div>

        {/* Social Media and Legal Links */}
        <div className="bg-[#191919] py-6 rounded-full px-5">
          <div className="container mx-auto flex justify-between items-center">
            {/* Social Media Links on the Left */}
            <div className="flex space-x-4">
              <a href="https://facebook.com"><FaFacebook className="h-10 w-10 p-2 bg-[#C1F000] text-black rounded-full hover:scale-110 transform transition-transform duration-300" /></a>
              <a href="https://twitter.com"><FaTwitter className="h-10 w-10 p-2 bg-[#C1F000] text-black rounded-full hover:scale-110 transform transition-transform duration-300" /></a>
              <a href="https://linkedin.com"><FaLinkedin className="h-10 w-10 p-2 bg-[#C1F000] text-black rounded-full hover:scale-110 transform transition-transform duration-300" /></a>
            </div>

            {/* Reserved Rights in the Middle */}
            <p className="text-sm text-center text-gray-400">&copy; 2024 YourBanK. All rights reserved.</p>

            {/* Privacy Policy and Terms on the Right */}
            <div className="text-right">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-[#C1F000] transition-colors duration-300">Privacy Policy</Link> | 
              <Link to="/terms-of-service" className="text-gray-400 hover:text-[#C1F000] transition-colors duration-300"> Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;