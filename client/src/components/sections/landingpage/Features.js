import React from 'react'
import { useState } from 'react';

const Features = () => {
    const [activeButton, setActiveButton] = useState('Online Banking');
    return (
    <section className="features-section text-white lg:ml-16 py-8">
    <div className="lg:px-56 px-6">
      <h2 className="text-4xl font-bold mb-6 text-white">Our <span className="text-[#A5E404]">Features</span></h2>
      <p className="text-lg mb-12 max-w-4xl">
        Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience.
      </p>

      <div className="flex space-x-8">
        {/* Left Navigation Section */}
        <div className="bg-[#1C1C1C] p-6 rounded-xl w-64 flex flex-col space-y-3" style={{ height: '100%' }}>
        <button
            className={`py-3 px-4 rounded-full border transition 
              ${activeButton === 'Online Banking' ? 'border-[#A5E404] text-[#A5E404] bg-[#1C1C1C]' : 'border-gray-600 text-white hover:bg-white hover:text-black'}`}
            onClick={() => setActiveButton('Online Banking')}
          >
            Online Banking
          </button>

          <button
            className={`py-3 px-4 rounded-full border transition 
              ${activeButton === 'Financial Tools' ? 'border-[#A5E404] text-[#A5E404] bg-[#1C1C1C]' : 'border-gray-600 text-white hover:bg-white hover:text-black'}`}
            onClick={() => setActiveButton('Financial Tools')}
          >
            Financial Tools
          </button>

          <button
            className={`py-3 px-4 rounded-full border transition 
              ${activeButton === 'Customer Support' ? 'border-[#A5E404] text-[#A5E404] bg-[#1C1C1C]' : 'border-gray-600 text-white hover:bg-white hover:text-black'}`}
            onClick={() => setActiveButton('Customer Support')}
          >
            Customer Support
          </button>
        </div>

        {/* Right Feature Descriptions */}
        <div className="flex-1 grid grid-cols-2 gap-8">
          <div className="bg-[#1C1C1C] p-8 rounded-lg flex justify-between items-center h-[180px]">
            <div>
              <h3 className="text-xl font-semibold mb-2">24/7 Account Access</h3>
              <p className="text-gray-400">
                Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform.
              </p>
            </div>
            <div className="text-[#A5E404] text-xl">&#x2192;</div>
          </div>

          <div className="bg-[#1C1C1C] p-8 rounded-lg flex justify-between items-center h-[180px]">
            <div>
              <h3 className="text-xl font-semibold mb-2">Mobile Banking App</h3>
              <p className="text-gray-400">
                Stay connected to your finances on the go with our user-friendly mobile banking app.
              </p>
            </div>
            <div className="text-[#A5E404] text-xl">&#x2192;</div>
          </div>

          <div className="bg-[#1C1C1C] p-8 rounded-lg flex justify-between items-center h-[180px]">
            <div>
              <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
              <p className="text-gray-400">
                Rest assured knowing that your transactions are protected by industry-leading security measures.
              </p>
            </div>
            <div className="text-[#A5E404] text-xl">&#x2192;</div>
          </div>

          <div className="bg-[#1C1C1C] p-8 rounded-lg flex justify-between items-center h-[180px]">
            <div>
              <h3 className="text-xl font-semibold mb-2">Bill Pay and Transfers</h3>
              <p className="text-gray-400">
                Save time and avoid fees with our convenient bill pay service and easy transfers.
              </p>
            </div>
            <div className="text-[#A5E404] text-xl">&#x2192;</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Features