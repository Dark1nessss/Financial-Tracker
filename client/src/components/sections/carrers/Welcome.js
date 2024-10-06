import React from 'react';

const Welcome = () => {
  return (
    <section className="py-20">
      {/* Outer Section Container with round corners */}
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8 bg-[#1C1C1C] rounded-[40px]">
        
        {/* Main Container with flex to separate text and image */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-x-12">
          
          {/* Text Container (Left) */}
          <div className="bg-[#141414] rounded-[40px] shadow-lg p-10 lg:max-w-lg">
            {/* Headline */}
            <h1 className="text-5xl font-bold mb-6">
              Welcome to <span className="text-[#A5E404]">YourBank</span> Careers!
            </h1>
            
            {/* Paragraph Text */}
            <p className="text-[#C4C4C4] text-lg leading-relaxed">
              Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.
            </p>
          </div>

          {/* Image without background (Right) */}
          <div className="mt-8 lg:mt-0 lg:max-w-md">
            <img 
              src="/career.png" 
              alt="Career Opportunities" 
              className="w-full h-auto rounded-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Welcome;
