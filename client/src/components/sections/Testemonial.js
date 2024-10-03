import React from 'react'
import { useState } from 'react';

const Testemonial = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeButton, setActiveButton] = useState('Online Banking');
  return (
    <section className="testimonials-section text-white lg:ml-16 py-8">
    <div className="lg:px-56 px-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Our <span className="text-[#A5E404]">Testimonials</span>
          </h2>
          <p className="text-lg mb-12 max-w-4xl">
            Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="relative flex justify-center items-center w-[280px] h-14 bg-[#2B2B2B] rounded-full overflow-hidden -translate-x-14">
          {/* Background Highlight */}
          <div
            className={`absolute h-2/3 w-[50%] bg-[#A5E404] rounded-full transition-transform duration-300 ease-in-out ${
              isActive ? "translate-x-[45%]" : "-translate-x-[65px]"
            }`}
          ></div>

          {/* Button for Individuals */}
          <button
            className={`z-10 w-1/2 text-md font-medium pl-[5px] ${
              !isActive ? "text-black" : "text-white"
            } transition-colors duration-300`}
            onClick={() => setIsActive(false)}
          >
            For Individuals
          </button>

          {/* Button for Businesses */}
          <button
            className={`z-10 w-1/2 text-md font-medium pr-[5px] ${
              isActive ? "text-black" : "text-white"
            } transition-colors duration-300`}
            onClick={() => setIsActive(true)}
          >
            For Businesses
          </button>
        </div>
      </div>

      {/* Space between Title and Cards */}
      <div className="my-8"></div>

      {/* Testimonial Cards */}
      <div className="relative flex justify-center items-center">
        {/* Left Navigation Arrow */}
        <button className="absolute left-0 transform translate-x-8 z-10 bg-[#141313] hover:bg-[#A5E404] transition-colors p-3 rounded-full">
          <img
            src="/left_pointer.png"
            alt="Previous"
            className="w-8 h-8"
          />
        </button>

        {/* Testimonials */}
        <div className="flex space-x-12 items-center mx-auto">
          <div className="text-center">
            <img src="/indent.png" alt="Quote Icon" className="w-12 h-12 mb-4 mx-auto" />
            <p className="text-lg text-gray-400 max-w-xs mx-auto">
              YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.
            </p>
            <p className="text-[#A5E404] mt-4">Sara T</p>
          </div>

          <div className="border-l border-gray-600 text-center px-8">
            <img src="/indent.png" alt="Quote Icon" className="w-12 h-12 mb-4 mx-auto" />
            <p className="text-lg text-gray-400 max-w-xs mx-auto">
              I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.
            </p>
            <p className="text-[#A5E404] mt-4">John D</p>
          </div>

          <div className="border-l border-gray-600 text-center px-8">
            <img src="/indent.png" alt="Quote Icon" className="w-12 h-12 mb-4 mx-auto" />
            <p className="text-lg text-gray-400 max-w-xs mx-auto">
              I love the convenience of YourBank’s mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.
            </p>
            <p className="text-[#A5E404] mt-4">Emily G</p>
          </div>
        </div>

        {/* Right Navigation Arrow */}
        <button className="absolute right-0 transform -translate-x-8 z-10 bg-[#141313] hover:bg-[#A5E404] transition-colors p-3 rounded-full">
          <img
            src="/left_pointer.png"
            alt="Next"
            className="w-8 h-8 rotate-180"
          />
        </button>
      </div>
    </div>
  </section>
  )
}

export default Testemonial