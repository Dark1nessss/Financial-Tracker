import React from 'react';

const Welcome = () => {
  return (
    <section className="flex justify-center items-center py-20">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row bg-[#1C1C1C] rounded-[40px] p-8 md:p-16 shadow-lg gap-8 md:gap-0">
        
        {/* Left Text Section */}
        <div className="flex-1 bg-[#141414] text-white p-8 rounded-[24px] shadow-lg md:mr-[-150px] relative z-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Welcome to <span className="text-[#A5E404]">YourBank</span> Careers!
          </h1>
          <p className="text-base md:text-lg text-[#C4C4C4] leading-relaxed">
            Join our team and embark on a rewarding journey in the banking industry. 
            At YourBank, we are committed to fostering a culture of excellence and 
            providing opportunities for professional growth. With a focus on innovation, 
            customer service, and integrity, we strive to make a positive impact in the 
            lives of our customers and communities. Join us today and be a part of our 
            mission to shape the future of banking.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/career.png" 
            alt="Career Opportunities" 
            className="rounded-[24px] object-cover w-[600px] h-auto shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
