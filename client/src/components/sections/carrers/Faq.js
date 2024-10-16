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
              What is the minimum qualification to apply for a job at YourBank?
            </h3>
            <div className="h-[1px] w-full bg-gray-600 mb-4"></div>
            <p className="text-gray-400">
              To apply for most positions at YourBank, you should possess a relevant academic qualification and, 
              depending on the role, a minimum of 1 to 3 years of experience in the respective field.
              Some positions may also require professional certifications.
            </p>
          </div>

          {/* Question 2 */}
          <div className="border border-[#1C1C1C] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              How can I submit my application for a position at YourBank?
            </h3>
            <div className="h-[1px] w-full bg-gray-600 mb-4"></div>
            <p className="text-gray-400">
              Submitting your application is easy. Simply visit our careers page, find the position that matches your skill set, 
              and click the "Apply Now" button. Complete the online application form and upload your resume. 
              Our HR team will review your submission and contact you if shortlisted.
            </p>
          </div>

          {/* Question 3 */}
          <div className="border border-[#1C1C1C] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              What is the interview process like at YourBank?
            </h3>
            <div className="h-[1px] w-full bg-gray-600 mb-4"></div>
            <p className="text-gray-400">
              The interview process at YourBank typically involves an initial screening by HR, 
              followed by one or more technical or role-specific interviews. 
              Depending on the position, you may also have a final interview with senior management.
              We aim to make the process as smooth and efficient as possible.
            </p>
          </div>

          {/* Question 4 */}
          <div className="border border-[#1C1C1C] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              How long does it take to hear back after applying for a job?
            </h3>
            <div className="h-[1px] w-full bg-gray-600 mb-4"></div>
            <p className="text-gray-400">
              You should expect to receive a response within 1-2 weeks after submitting your application. 
              If shortlisted, we will reach out to schedule interviews. 
              However, the timeline may vary depending on the position and the volume of applications.
            </p>
          </div>

          {/* Additional FAQs when "showMore" is true */}
          {showMore && (
            <>
            <div className="border border-[#1C1C1C] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Can I apply for more than one position at the same time?</h3>
              <hr className="my-2 opacity-50" />
              <p className="text-gray-400">
                Yes, you can apply for multiple positions if you meet the qualifications. 
                We encourage applicants to review the job requirements carefully and apply 
                for roles that best match their experience and expertise.
              </p>
            </div>

            <div className="border border-[#1C1C1C] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Are there opportunities for growth and career advancement at YourBank?</h3>
              <hr className="my-2 opacity-50" />
              <p className="text-gray-400">
                Absolutely. YourBank believes in investing in its employees and offers various programs for career development, 
                including training, mentorship, and opportunities for internal promotions. 
                We encourage all employees to continuously grow and excel in their roles.
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