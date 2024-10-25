import React from 'react'
import { useState } from 'react';
const Faq = () => {
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
                To update your account information, simply log in to your account through our online banking portal. 
                Navigate to the "Account Settings" section, where you can edit your personal details, such as your address,
               phone number, and email. If you need assistance, our customer support team is available to help.
              </p>
            </div>

            <div className="border border-[#1C1C1C] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">What are the fees for transfers?</h3>
              <hr className="my-2 opacity-50" />
              <p className="text-gray-400">
                Transfer fees depend on the type of transfer you are making. 
                Domestic transfers between accounts at YourBank are typically free, while international or third-party transfers may incur a small fee. 
                For a full breakdown of our transfer fees, please consult the fee schedule available on our website or contact customer service.
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
  )
}

export default Faq