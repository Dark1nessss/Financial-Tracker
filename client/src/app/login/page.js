"use client";

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF, faApple} from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export default function LoginPage() {
  const [viewType, setViewType] = useState("Individuals");
  return (
    <>
      {/* Navbar */}
      <header className="bg-[#1C1C1C] rounded-full py-4 px-10 mx-auto max-w-screen-xl flex items-center justify-between mt-6 transition duration-400 ease-in-out">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/VorteX.png" alt="YourBank Logo" className="h-8 w-8 transition duration-400 ease-in-out" />
          <h1 className="text-white font-bold text-2xl ml-4 transition duration-400 ease-in-out">YourBanK</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-10">
          <a href="#" className="text-white text-lg hover:text-[#CCFF00] transition duration-400 ease-in-out">Home</a>
          <a href="#" className="text-white text-lg hover:text-[#CCFF00] transition duration-400 ease-in-out">Careers</a>
          <a href="#" className="text-white text-lg hover:text-[#CCFF00] transition duration-400 ease-in-out">About</a>
          <a href="#" className="text-white text-lg hover:text-[#CCFF00] transition duration-400 ease-in-out">Security</a>
        </nav>

        {/* Sign Up and Login Buttons */}
        <div className="flex items-center space-x-6">
          <a href="#" className="text-white text-lg hover:text-[#CCFF00] transition duration-400 ease-in-out">Sign Up</a>
          <a href="#" className="bg-[#CCFF00] text-black rounded-full px-6 py-2 font-semibold hover:bg-[#9FBD0A] transition duration-400 ease-in-out">Login</a>
        </div>
      </header>

      {/* Login Page */}
      <div className="min-h-screen bg-[#191919] flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl p-16 space-y-14 bg-[#1c1c1c] rounded-lg shadow-lg backdrop-blur-md">
          <h2 className="text-center text-5xl font-bold text-[#eaff00]">Login</h2>
          <p className="text-center text-gray-400 text-lg">
            Welcome back! Please log in to access your account.
          </p>

          <form className="mt-8 space-y-6">
            <div className="flex justify-between space-x-8 px-12">
              <input
                aria-label="Email address"
                name="email"
                type="email"
                required
                className="w-1/2 rounded-full px-6 py-3 bg-[#191919] text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#eaff00] placeholder-gray-500"
                placeholder="Enter your Email"
              />
              <input
                aria-label="Password"
                name="password"
                type="password"
                required
                className="w-1/2 rounded-full px-6 py-3 bg-[#191919] text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#eaff00] placeholder-gray-500"
                placeholder="Enter your Password"
              />
            </div>

            <div className="text-center mt-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-[#eaff00]">
                Forgot Password?
              </a>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <button
                type="submit"
                className="w-full max-w-md bg-[#eaff00] text-[#1c1c1c] py-3 rounded-full font-bold hover:bg-[#d1e000] transition duration-300 mx-auto"
              >
                Login
              </button>
              <button className="w-full max-w-md bg-[#222222] text-white py-3 rounded-full font-bold hover:bg-gray-700 transition duration-300 mx-auto">
                Sign Up
              </button>
            </div>

            <div className="flex items-center justify-center mt-6">
              <hr className="w-1/4 border-gray-600" />
              <span className="text-gray-400 mx-3">Or Continue with</span>
              <hr className="w-1/4 border-gray-600" />
            </div>

            <div className="flex justify-center space-x-8 mt-4">
              <button className="w-14 h-14 rounded-full bg-[#222222] flex items-center justify-center text-[#eaff00] hover:text-[#DB4437] transition duration-300">
                <FontAwesomeIcon icon={faGoogle} />
              </button>
              <button className="w-14 h-14 rounded-full bg-[#222222] flex items-center justify-center text-[#eaff00] hover:text-[#3b5998] transition duration-300">
                <FontAwesomeIcon icon={faFacebookF} />
              </button>
              <button className="w-14 h-14 rounded-full bg-[#222222] flex items-center justify-center text-[#eaff00] hover:text-[#A3AAAE] transition duration-300">
                <FontAwesomeIcon icon={faApple} />
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <section className="w-full bg-[#191919] py-12 flex items-center justify-between max-w-7xl mx-auto">
        {/* Title and Subtitle */}
        <div className="text-left">
          <h2 className="text-3xl font-bold text-[#eaff00]">
            Our <span className="text-white">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-base mt-4 max-w-3xl">
            Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service.
            See why our clients trust us for a secure and prosperous financial journey.
          </p>
        </div>

        {/* Toggle Button Wrapper */}
        <div className="relative flex items-center justify-between w-[300px] h-16 p-2 bg-[#191919] rounded-full shadow-lg border border-[#333333]">
          {/* Slightly Larger Background for Buttons */}
          <div className="absolute inset-0 w-full h-full bg-[#191919] rounded-full"></div>

          {/* Smaller Highlight */}
          <div
            className={`absolute w-[150px] h-10 bg-[#CCFF00] rounded-full transition-all duration-300 ${
              viewType === "Businesses" ? "translate-x-[135px]" : "translate-x-0"
            }`}
          ></div>

          {/* For Individuals Button */}
          <button
            className={`w-1/2 z-10 text-base font-semibold transition-all duration-300 ${
              viewType === "Individuals" ? "text-black" : "text-white"
            }`}
            onClick={() => setViewType("Individuals")}
          >
            Individuals
          </button>

          {/* For Businesses Button */}
          <button
            className={`w-1/2 z-10 text-base font-semibold transition-all duration-300 ${
              viewType === "Businesses" ? "text-black" : "text-white"
            }`}
            onClick={() => setViewType("Businesses")}
          >
            Businesses
          </button>
        </div>
      </section>
    </>
  );
}