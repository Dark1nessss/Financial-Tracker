import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Welcome from '../components/sections/Welcome.js';
import Products from '../components/sections/Products.js';
import UseCases from '../components/sections/UseCases.js';
import Features from '../components/sections/Features.js';

const LandingPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeButton, setActiveButton] = useState('Online Banking');
  const [showMore, setShowMore] = useState(false);

  function handleShowMore() {
    setShowMore((prev) => !prev);
  
    const fadeEffect = document.getElementById('fadeEffect');
    
    // If showing more FAQs, remove fade effect
    if (fadeEffect && !showMore) {
      fadeEffect.classList.add('transition-opacity');
      fadeEffect.classList.add('opacity-0');
      setTimeout(() => {
        fadeEffect.classList.add('hidden');
      }, 300); // Adjust timing based on your transition speed
    } else if (fadeEffect && showMore) {
      fadeEffect.classList.remove('hidden');
      setTimeout(() => {
        fadeEffect.classList.remove('opacity-0');
      }, 300);
    }
  };
  
  return (
    <div className="bg-[#141313] text-white">
      <Welcome/>

      {/* Products Section */}
      <Products/>

      {/* Use Cases Section */}
      <UseCases/>

      {/* Features Section */}
      <Features />
      
      {/* FAQ'S Section */}
      
      <section className="faq-section text-white lg:ml-16 py-8">
        <div className="lg:px-56 px-6">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-[#A5E404]">Frequently</span> Asked Questions
          </h2>
          <p className="text-lg mb-12">
            Still have any questions? Contact our Team via support@yourbank.com
          </p>

          {/* FAQs Container */}
          <div className="relative overflow-hidden">
            {/* FAQ Cards */}
            <div className={`grid grid-cols-2 gap-8 max-height-transition ${showMore ? 'max-h-[5000px]' : 'max-h-[450px]'}`}>
              {/* Question 1 */}
              <div className="border border-[#1C1C1C] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  How do I open an account with YourBank?
                </h3>
                <div className="h-[1px] w-full bg-gray-600 mb-4"></div>
                <p className="text-gray-400">
                  Opening an account with YourBank is easy. Simply visit our website and
                  click on the “Open an Account” button. Follow the prompts, provide the
                  required information, and complete the application process. If you
                  have any questions or need assistance, our customer support team is
                  available to help.
                </p>
              </div>

              {/* Question 2 */}
              <div className="border border-[#1C1C1C] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  What documents do I need to provide to apply for a loan?
                </h3>
                <div className="h-[1px] w-full bg-gray-600 mb-4"></div>
                <p className="text-gray-400">
                  The documents required for a loan application may vary depending on
                  the type of loan you are applying for. Generally, you will need to
                  provide identification documents, proof of income, and information
                  about the collateral (if applicable). Our loan officers will guide you
                  through the specific requirements during the application process.
                </p>
              </div>

              {/* Question 3 */}
              <div className="border border-[#1C1C1C] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  How can I access my accounts online?
                </h3>
                <div className="h-[1px] w-full bg-gray-600 mb-4"></div>
                <p className="text-gray-400">
                  Accessing your accounts online is simple and secure. Visit our website
                  and click on the “Login” button. Enter your username and password to
                  access your accounts. If you haven’t registered for online banking,
                  click on the “Enroll Now” button and follow the registration process.
                </p>
              </div>

              {/* Question 4 */}
              <div className="border border-[#1C1C1C] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Are my transactions and personal information secure?
                </h3>
                <div className="h-[1px] w-full bg-gray-600 mb-4"></div>
                <p className="text-gray-400">
                  At YourBank, we prioritize the security of your transactions and
                  personal information. We employ industry-leading encryption and
                  multi-factor authentication to ensure that your data is protected.
                </p>
              </div>

              {/* Additional FAQs when "showMore" is true */}
              {showMore && (
                <>
                <div className="border border-[#1C1C1C] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">How can I update my account information?</h3>
                  <hr className="my-2 opacity-50" />
                  <p className="text-gray-400">
                    You can update your account information by logging in...
                  </p>
                </div>

                <div className="border border-[#1C1C1C] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">What are the fees for transfers?</h3>
                  <hr className="my-2 opacity-50" />
                  <p className="text-gray-400">
                    The transfer fees depend on the type of transfer...
                  </p>
                </div>
                </>
              )}
            </div>

            {/* Fade Effect */}
            {!showMore && (
              <div 
                id="fadeEffect" 
                className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#141313] to-transparent pointer-events-none transition-opacity duration-1000 ease-in-out">
              </div>
            )}
          </div>

          {/* Button to toggle FAQs */}
          <div className="flex justify-center mt-8">
            {showMore ? (
              <a
                href="/faq-page"
                className="bg-[#A5E404] text-black py-2 px-6 rounded-full flex items-center transition-all duration-700 ease-in-out"
              >
                FAQ Page
                <span className="ml-2 transform rotate-45 transition-transform duration-700 ease-in-out">↗</span>
              </a>
            ) : (
              <button
                onClick={handleShowMore}
                className="bg-[#A5E404] text-black py-2 px-6 rounded-full flex items-center transition-all duration-700 ease-in-out"
              >
                Load All FAQs
                <span className="ml-2 transform rotate-0 transition-transform duration-700 ease-in-out">▼</span>
              </button>
            )}
          </div>
        </div>
      </section>


      {/* Testemonial Section */}

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

    </div>
  );
};

export default LandingPage;