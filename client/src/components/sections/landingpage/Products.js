import React from 'react'
import {useState} from 'react'

const Products = () => {
  const [isActive, setIsActive] = useState(false);
  return (
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
  )

}

export default Products