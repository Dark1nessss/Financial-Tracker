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
      <section className="products-section text-white lg:ml-16 pb-8">
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

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <img src="/bag.png" alt="Checking Accounts" className="w-16 h-16 mb-6 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-300 mb-4">Checking Accounts</h3>
            <p className="text-sm text-gray-400">
              Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.
            </p>
          </div>

          {/* Add vertical divider here */}
          <div className="border-l border-gray-600 text-center px-8">
            <img src="/deposit.png" alt="Savings Accounts" className="w-16 h-16 mb-6 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-300 mb-4">Savings Accounts</h3>
            <p className="text-sm text-gray-400">
              Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.
            </p>
          </div>

          {/* Add vertical divider here */}
          <div className="border-l border-gray-600 text-center px-8">
            <img src="/notes_con.png" alt="Loans and Mortgages" className="w-16 h-16 mb-6 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-300 mb-4">Loans and Mortgages</h3>
            <p className="text-sm text-gray-400">
              Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases-section text-white lg:ml-16 py-8">
        <div className="lg:px-56 px-6">
          <h2 className="text-4xl font-bold mb-6 text-[#A5E404]">Use Cases</h2>
          <p className="text-lg mb-12 max-w-4xl">
            At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions.
          </p>

          <div className="grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <div className="bg-[#1C1C1C] grid grid-cols-2 gap-4 mb-16 p-10 rounded-xl">
                {/* Managing Personal Finances */}
                <div className="flex flex-col items-center text-center bg-[#141313] p-6 rounded-lg transition-transform transform hover:scale-105 duration-300">
                  <div className="bg-[#1C1C1C] rounded-full p-4">
                    <img src="/notes_con.png" alt="Managing Personal Finances" className="w-12 h-12" />
                  </div>
                  <p className="mt-4">Managing Personal Finances</p>
                </div>
                {/* Saving for the Future */}
                <div className="flex flex-col items-center text-center bg-[#141313] p-6 rounded-lg transition-transform transform hover:scale-105 duration-300">
                  <div className="bg-[#1C1C1C] rounded-full p-4">
                    <img src="/savings_con.png" alt="Saving for the Future" className="w-12 h-12" />
                  </div>
                  <p className="mt-4">Saving for the Future</p>
                </div>
                {/* Homeownership */}
                <div className="flex flex-col items-center text-center bg-[#141313] p-6 rounded-lg transition-transform transform hover:scale-105 duration-300">
                  <div className="bg-[#1C1C1C] rounded-full p-4">
                    <img src="/apartment_con.png" alt="Homeownership" className="w-12 h-12" />
                  </div>
                  <p className="mt-4">Homeownership</p>
                </div>
                {/* Education Funding */}
                <div className="flex flex-col items-center text-center bg-[#141313] p-6 rounded-lg transition-transform transform hover:scale-105 duration-300">
                  <div className="bg-[#1C1C1C] rounded-full p-4">
                    <img src="/book_con.png" alt="Education Funding" className="w-12 h-12" />
                  </div>
                  <p className="mt-4">Education Funding</p>
                </div>
              </div>

              {/* For Business Stats */}
              <div className="p-8 mb-8">
                <h3 className="text-xl font-semibold mb-4">For Business</h3>
                <p className="mb-4">
                  For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="text-5xl font-semibold text-[#A5E404] mt-4">65%</h4>
                    <p className="mt-4">Cash Flow Management</p>
                  </div>
                  <div>
                    <h4 className="text-5xl font-semibold text-[#A5E404] mt-4">70%</h4>
                    <p className="mt-4">Drive Business Expansion</p>
                  </div>
                  <div>
                    <h4 className="text-5xl font-semibold text-[#A5E404] mt-4">45%</h4>
                    <p className="mt-4">Streamline Payroll Processing</p>
                  </div>
                </div>
                <button className="bg-[#A5E404] text-black py-2 px-6 rounded-full mt-16 hover:bg-white transition-colors duration-300 font-semibold ">Learn More</button>
              </div>
            </div>

            {/* Right Column */}
            {/* For Individuals Stats */}
            <div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">For Individuals</h3>
                <p className="mb-4">
                  For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="text-5xl font-semibold text-[#A5E404] mt-4">78%</h4>
                    <p className="mt-4">Secure Retirement Planning</p>
                  </div>
                  <div>
                    <h4 className="text-5xl font-semibold text-[#A5E404] mt-4">63%</h4>
                    <p className="mt-4">Manageable Debt Consolidation</p>
                  </div>
                  <div>
                    <h4 className="text-5xl font-semibold text-[#A5E404] mt-4">91%</h4>
                    <p className="mt-4">Reducing Financial Burdens</p>
                  </div>
                </div>
                <button className="bg-[#A5E404] text-black py-2 px-6 rounded-full mt-16 hover:bg-white transition-colors duration-300 font-semibold">Learn More</button>
              </div>

              {/* Icon container for business use cases */}
              <div className="bg-[#1C1C1C] grid grid-cols-2 gap-4 p-10 rounded-xl mt-12">
                {/* Starting an Enterprise */}
                <div className="flex flex-col items-center text-center bg-[#141313] p-6 rounded-lg transition-transform transform hover:scale-105 duration-300">
                  <div className="bg-[#1C1C1C] rounded-full p-4">
                    <img src="/bank_con.png" alt="Starting an Enterprise" className="w-12 h-12" />
                  </div>
                  <p className="mt-4">Startups and Entrepreneurs</p>
                </div>
                {/* Business Expansion */}
                <div className="flex flex-col items-center text-center bg-[#141313] p-6 rounded-lg transition-transform transform hover:scale-105 duration-300">
                  <div className="bg-[#1C1C1C] rounded-full p-4">
                    <img src="/graph_con.png" alt="Business Expansion" className="w-12 h-12" />
                  </div>
                  <p className="mt-4">Business Expansion</p>
                </div>
                {/* Cash Flow Management */}
                <div className="flex flex-col items-center text-center bg-[#141313] p-6 rounded-lg transition-transform transform hover:scale-105 duration-300">
                  <div className="bg-[#1C1C1C] rounded-full p-4">
                    <img src="/dollar_con.png" alt="Cash Flow Management" className="w-12 h-12" />
                  </div>
                  <p className="mt-4">Cash Flow Management</p>
                </div>
                {/* Payment Solutions */}
                <div className="flex flex-col items-center text-center bg-[#141313] p-6 rounded-lg transition-transform transform hover:scale-105 duration-300">
                  <div className="bg-[#1C1C1C] rounded-full p-4">
                    <img src="/hold_con.png" alt="Payment Solutions" className="w-12 h-12" />
                  </div>
                  <p className="mt-4">Payment Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;