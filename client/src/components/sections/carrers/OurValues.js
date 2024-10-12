import React from 'react';

const OurValues = () => {
  return (
    <section className="flex justify-center items-center mb-16">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-left mb-4 leading-tight">
          Our <span className="text-[#A5E404]">Values</span>
        </h2>
        
        {/* Introductory Paragraph */}
        <p className="text-lg text-left text-[#C4C4C4] mb-12 leading-relaxed max-w-7xl mx-auto">
          At YourBank, our values form the foundation of our organization and guide our actions. 
          We believe in upholding the highest standards of integrity, delivering exceptional service, 
          and embracing innovation. These values define our culture and shape the way we work together 
          to achieve our goals.
        </p>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Integrity */}
          <div className="flex flex-col items-start border-l-2 border-[#A5E404] pl-6">
            <h3 className="text-4xl font-bold text-[#4c4c4d] mb-6">
              Integrity
            </h3>
            <p className="text-[#C4C4C4] leading-relaxed">
              We conduct ourselves with utmost honesty, transparency, and ethical behavior. 
              We believe in doing what is right for our customers, colleagues, and stakeholders, 
              even when faced with difficult choices.
            </p>
          </div>

          {/* Customer Centricity */}
          <div className="flex flex-col items-start border-l-2 border-[#A5E404] pl-6">
            <h3 className="text-4xl font-bold text-[#4c4c4d] mb-6">
              Customer Centricity
            </h3>
            <p className="text-[#C4C4C4] leading-relaxed">
              Our customers are at the heart of everything we do. We are dedicated to understanding 
              their needs, providing personalized solutions, and delivering exceptional service that 
              exceeds expectations.
            </p>
          </div>

          {/* Collaboration */}
          <div className="flex flex-col items-start border-l-2 border-[#A5E404] pl-6">
            <h3 className="text-4xl font-bold text-[#4c4c4d] mb-6">
              Collaboration
            </h3>
            <p className="text-[#C4C4C4] leading-relaxed">
              We foster a collaborative and inclusive work environment, where teamwork and 
              diversity are celebrated. By leveraging the unique strengths and perspectives 
              of our employees, we drive innovation and achieve greater success together.
            </p>
          </div>

          {/* Innovation */}
          <div className="flex flex-col items-start border-l-2 border-[#A5E404] pl-6">
            <h3 className="text-4xl font-bold text-[#4c4c4d] mb-6">
              Innovation
            </h3>
            <p className="text-[#C4C4C4] leading-relaxed">
              We embrace change and constantly seek innovative solutions to meet the evolving 
              needs of our customers. We encourage our employees to think creatively, challenge 
              conventions, and explore new ideas to drive the future of banking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
