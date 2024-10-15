import React from 'react';

const JobCard = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-left leading-tight">
            Job <span className="text-[#A5E404]">Openings</span>
          </h2>

          {/* Introductory Paragraph */}
          <p className="text-lg text-left text-[#C4C4C4] leading-relaxed mt-4">
            Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry.
          </p>
        </div>

        {/* Card Container (for one card now, but can later have multiple) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#1C1C1C] max-w-2xl rounded-lg shadow-lg p-8">
            
            {/* Job Title */}
            <h2 className="text-2xl font-bold mb-4 text-white">Relationship Manager</h2>
            
            {/* Location and Department */}
            <div className="flex space-x-4 mb-6">
              <span className="bg-[#282828] py-2 px-4 rounded-full text-sm text-[#C4C4C4]">
                Location: Portugal
              </span>
              <span className="bg-[#282828] py-2 px-4 rounded-full text-sm text-[#C4C4C4]">
                Department: Retail Banking
              </span>
            </div>
            
            {/* About This Job */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2 text-white">About This Job</h3>
              <p className="text-[#C4C4C4] leading-relaxed">
                As a Relationship Manager at YourBank, you will be responsible for developing 
                and maintaining relationships with our valued customers. You will proactively 
                identify their financial needs and offer tailored solutions to help them achieve 
                their goals. We are seeking individuals with excellent communication skills, a 
                strong sales acumen, and a passion for delivering exceptional customer service.
              </p>
            </div>

            {/* Requirements & Qualifications */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Requirements & Qualifications</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <img src="/jobico.png" alt="Job Icon" className="w-6 h-6"/>
                  <p className="text-[#C4C4C4] leading-relaxed">Bachelor’s degree in Business, Finance, or a related field</p>
                </li>
                <li className="flex items-start space-x-3">
                  <img src="/jobico.png" alt="Job Icon" className="w-6 h-6"/>
                  <p className="text-[#C4C4C4] leading-relaxed">Minimum of 3 years of experience in sales or relationship management in the banking industry</p>
                </li>
                <li className="flex items-start space-x-3">
                  <img src="/jobico.png" alt="Job Icon" className="w-6 h-6"/>
                  <p className="text-[#C4C4C4] leading-relaxed">Proven track record of meeting and exceeding sales targets</p>
                </li>
                <li className="flex items-start space-x-3">
                  <img src="/jobico.png" alt="Job Icon" className="w-6 h-6"/>
                  <p className="text-[#C4C4C4] leading-relaxed">Excellent interpersonal and negotiation skills</p>
                </li>
                <li className="flex items-start space-x-3">
                  <img src="/jobico.png" alt="Job Icon" className="w-6 h-6"/>
                  <p className="text-[#C4C4C4] leading-relaxed">Strong knowledge of banking products and services</p>
                </li>
              </ul>
            </div>

            {/* Apply Button */}
            <div className="mt-8">
              <button className="bg-[#A5E404] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#94D304] transition">
                Apply Now
              </button>
            </div>

          </div>

          <div className="bg-[#1C1C1C] max-w-2xl rounded-lg shadow-lg p-8">
            
            {/* Job Title */}
            <h2 className="text-2xl font-bold mb-4 text-white">Relationship Manager</h2>
            
            {/* Location and Department */}
            <div className="flex space-x-4 mb-6">
              <span className="bg-[#282828] py-2 px-4 rounded-full text-sm text-[#C4C4C4]">
                Location: Portugal
              </span>
              <span className="bg-[#282828] py-2 px-4 rounded-full text-sm text-[#C4C4C4]">
                Department: Retail Banking
              </span>
            </div>
            
            {/* About This Job */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2 text-white">About This Job</h3>
              <p className="text-[#C4C4C4] leading-relaxed">
                As a Relationship Manager at YourBank, you will be responsible for developing 
                and maintaining relationships with our valued customers. You will proactively 
                identify their financial needs and offer tailored solutions to help them achieve 
                their goals. We are seeking individuals with excellent communication skills, a 
                strong sales acumen, and a passion for delivering exceptional customer service.
              </p>
            </div>

            {/* Requirements & Qualifications */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Requirements & Qualifications</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <img src="/jobico.png" alt="Job Icon" className="w-6 h-6"/>
                  <p className="text-[#C4C4C4] leading-relaxed">Bachelor’s degree in Business, Finance, or a related field</p>
                </li>
                <li className="flex items-start space-x-3">
                  <img src="/jobico.png" alt="Job Icon" className="w-6 h-6"/>
                  <p className="text-[#C4C4C4] leading-relaxed">Minimum of 3 years of experience in sales or relationship management in the banking industry</p>
                </li>
                <li className="flex items-start space-x-3">
                  <img src="/jobico.png" alt="Job Icon" className="w-6 h-6"/>
                  <p className="text-[#C4C4C4] leading-relaxed">Proven track record of meeting and exceeding sales targets</p>
                </li>
                <li className="flex items-start space-x-3">
                  <img src="/jobico.png" alt="Job Icon" className="w-6 h-6"/>
                  <p className="text-[#C4C4C4] leading-relaxed">Excellent interpersonal and negotiation skills</p>
                </li>
                <li className="flex items-start space-x-3">
                  <img src="/jobico.png" alt="Job Icon" className="w-6 h-6"/>
                  <p className="text-[#C4C4C4] leading-relaxed">Strong knowledge of banking products and services</p>
                </li>
              </ul>
            </div>

            {/* Apply Button */}
            <div className="mt-8">
              <button className="bg-[#A5E404] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#94D304] transition">
                Apply Now
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default JobCard;