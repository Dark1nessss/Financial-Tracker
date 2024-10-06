import React from 'react';

const Welcome = () => {
  return (
    <section className="landing-container relative flex flex-col lg:flex-row items-start justify-between lg:py-20 lg:px-56 px-6 py-8">
      {/* Left Section */}
      <div className="left-section max-w-lg lg:ml-16">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to <span className="text-[#A5E404]">YourBank</span> Careers!
        </h1>
        <p className="text-lg mb-8">
          Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.
        </p>
      </div>

      {/* Right Section with Career Image and Background Decoration */}
      <div className="right-section-container relative lg:max-w-lg w-full flex-shrink-0 lg:self-center lg:-translate-x-32 mt-8 lg:mt-0">
        {/* Career Image */}
        <div className="relative z-10">
          <img src="/career.png" alt="Career Opportunities" className="w-full h-auto" />
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 right-0 opacity-75 z-0 lg:translate-x-64 translate-y-12">
          <img src="/abstract_design.png" alt="Upward Arrows" className="w-9/12 h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
