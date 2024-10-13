import React from 'react';

const OurBenefits = () => {
  return (
    <section className="flex justify-center items-center py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-left mb-4 leading-tight">
          Our <span className="text-[#A5E404]">Benefits</span>
        </h2>

        {/* Introductory Paragraph */}
        <p className="text-lg text-left text-[#C4C4C4] mb-12 leading-relaxed max-w-7xl">
          At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Competitive Compensation */}
          <div className="flex flex-col items-start bg-[#1c1c1c] p-6 rounded-xl shadow-lg">
            <img src="graph_con.png" alt="Graph Icon" className="mb-4 w-12 h-12"/>
            <h3 className="text-2xl font-bold text-white mb-4">
              Competitive Compensation
            </h3>
            <p className="text-[#C4C4C4] leading-relaxed">
              We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.
            </p>
          </div>

          {/* Health and Wellness */}
          <div className="flex flex-col items-start bg-[#1c1c1c] p-6 rounded-xl shadow-lg">
            <img src="light.png" alt="Health and Wellness Icon" className="mb-4 w-12 h-12"/>
            <h3 className="text-2xl font-bold text-white mb-4">
              Health and Wellness
            </h3>
            <p className="text-[#C4C4C4] leading-relaxed">
              We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.
            </p>
          </div>

          {/* Retirement Planning */}
          <div className="flex flex-col items-start bg-[#1c1c1c] p-6 rounded-xl shadow-lg">
            <img src="bag.png" alt="Retirement Planning Icon" className="mb-4 w-12 h-12"/>
            <h3 className="text-2xl font-bold text-white mb-4">
              Retirement Planning
            </h3>
            <p className="text-[#C4C4C4] leading-relaxed">
              YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.
            </p>
          </div>

          {/* Work-Life Balance */}
          <div className="flex flex-col items-start bg-[#1c1c1c] p-6 rounded-xl shadow-lg">
            <img src="folders.png" alt="Work-Life Balance Icon" className="mb-4 w-12 h-12"/>
            <h3 className="text-2xl font-bold text-white mb-4">
              Work-Life Balance
            </h3>
            <p className="text-[#C4C4C4] leading-relaxed">
              We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBenefits;
