import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
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
      <section className="products-section bg-[#141313] text-white lg:ml-16 mb-16">
        <div className="lg:px-56 px-6">
          <h2 className="text-4xl font-bold mb-6">
            Our <span className="text-[#A5E404]">Products</span>
          </h2>
          <p className="text-lg mb-12">
            Discover a range of comprehensive and customizable banking products at YourBanK, designed to suit your unique financial needs and aspirations.
          </p>

          {/* Toggle Buttons */}
          <div className="flex justify-start space-x-4 mt-4 lg:ml-1 mb-8 lg:mb-16">
            <button className="bg-[#A5E404] text-black py-2 px-6 rounded-full font-semibold">
              For Individuals
            </button>
            <button className="bg-[#2B2B2B] text-white py-2 px-6 rounded-full font-semibold">
              For Businesses
            </button>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:px-4 mt-8">
            <div className="product-card bg-[#1C1C1C] p-8 rounded-lg flex flex-col items-center text-center">
              <img src="/checkings.png" alt="Checking Accounts" className="w-16 h-16 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Checking Accounts</h3>
              <p className="text-sm">
                Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.
              </p>
            </div>
            <div className="product-card bg-[#1C1C1C] p-8 rounded-lg flex flex-col items-center text-center">
              <img src="/savings.png" alt="Savings Accounts" className="w-16 h-16 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Savings Accounts</h3>
              <p className="text-sm">
                Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.
              </p>
            </div>
            <div className="product-card bg-[#1C1C1C] p-8 rounded-lg flex flex-col items-center text-center">
              <img src="/loans.png" alt="Loans and Mortgages" className="w-16 h-16 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Loans and Mortgages</h3>
              <p className="text-sm">
                Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;