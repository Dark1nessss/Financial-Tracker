import React from 'react'
import { Link } from 'react-router-dom';
const Welcome = () => {
  return (
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
  )
}

export default Welcome