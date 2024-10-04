import React from 'react'
import {Link} from 'react-router-dom'

const Careers = () => {
  return(
    <div className="bg-[#141313] text-white">
    {/* Welcome Section */}
    <section className="landing-container relative flex flex-col lg:flex-row items-start justify-between lg:py-20 lg:px-56 px-6 py-8">
      {/* Left Section */}
      <div className="left-section max-w-lg lg:ml-16">
        <div className="badge-container mb-4 flex items-center">
        </div>
        <h1 className="text-5xl font-bold mb-6">
          Welcome to <span className="text-[#A5E404]">YourBank</span> <br /> Careers!{' '}
        </h1>
        <p className="text-lg mb-8">
          Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.
        </p>
      </div>

      {/* Right Section with Combined Transactions and Background Decoration */}
      <div className="right-section-container relative lg:max-w-lg w-full flex-shrink-0 lg:self-center lg:-translate-x-32 mt-8 lg:mt-0">
        {/* Transactions Section (This is on top of arrows) */}
        <div className="relative z-10">
          <img src="/career.png" alt="Transactions and Money Exchange" className="w-full h-auto" />
        </div>

        {/* Background Decoration (Behind Transactions) */}
        <div className="absolute top-0 right-0 opacity-75 z-0 lg:translate-x-64 translate-y-12">
          <img src="/abstract_design.png" alt="Upward Arrows" className="w-9/12 h-auto" />
        </div>
      </div>
    </section> 
    </div>
    )
}

export default Careers