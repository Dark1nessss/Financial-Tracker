import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="bg-[#141313] text-white">
      {/* Welcome Section */}
      <section className="landing-container relative flex flex-col lg:flex-row items-start justify-between lg:py-20 lg:px-56 px-6 py-8">
        {/* Left Section */}
        <div className="left-section max-w-lg lg:ml-16">
          <div className="badge-container mb-4 flex items-center">
            <img src="/verifyicon.png" alt="Verify" className="w-6 h-6 mr-2" />
            <span className="bg-[#2B2B2B] text-white py-2 px-4 rounded-full">
              No LLC Required, No Credit Check.
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Welcome to YourBanK <br /> Empowering Your{' '}
            <span className="text-[#A5E404]">Financial Journey</span>
          </h1>
          <p className="text-lg mb-8">
            At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.
          </p>
          <Link to="login">
            <button className="bg-[#A5E404] text-black py-3 px-6 rounded-full hover:bg-white transition-colors duration-300 font-semibold">
              Open Account
            </button>
          </Link>
        </div>

        {/* Right Section with Combined Transactions and Background Decoration */}
        <div className="right-section-container relative lg:max-w-lg w-full flex-shrink-0 lg:self-center lg:-translate-x-32 mt-8 lg:mt-0">
          {/* Transactions Section (This is on top of arrows) */}
          <div className="relative z-10">
            <img src="/transactions.png" alt="Transactions and Money Exchange" className="w-full h-auto" />
          </div>

          {/* Background Decoration (Behind Transactions) */}
          <div className="absolute top-0 right-0 opacity-75 z-0 lg:translate-x-64 translate-y-12">
            <img src="/trendup.png" alt="Upward Arrows" className="w-9/12 h-auto" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section bg-[#141313] text-white lg:ml-16 pb-8">
        <div className="lg:px-56 px-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-[#A5E404]">Products</span>
              </h2>
              <p className="text-lg mb-12 max-w-4xl">
                Discover a range of comprehensive and customizable banking products at YourBanK, designed to suit your unique financial needs and aspirations.
              </p>
            </div>

            {/* Toggle Buttons */}
            <div className="relative flex justify-center items-center w-64 h-14 bg-[#2B2B2B] rounded-full overflow-hidden">
              {/* Background Highlight */}
              <div
                className={`absolute h-2/3 w-[45%] bg-[#A5E404] rounded-full transition-transform duration-300 ease-in-out ${
                  isActive ? "translate-x-[100%]" : "translate-x-0"
                }`}
              ></div>

              {/* Button for Individuals */}
              <button
                className={`z-10 w-1/2 text-md font-medium ${
                  !isActive ? "text-black" : "text-white"
                } transition-colors duration-300`}
                onClick={() => setIsActive(false)}
              >
                For Individuals
              </button>

              {/* Button for Businesses */}
              <button
                className={`z-10 w-1/2 text-md font-medium ${
                  isActive ? "text-black" : "text-white"
                } transition-colors duration-300`}
                onClick={() => setIsActive(true)}
              >
                For Businesses
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;