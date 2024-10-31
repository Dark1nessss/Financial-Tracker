import React from 'react';

const PressReleases = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl font-bold mb-8 text-left">
          Press <span className="text-[#A5E404]">Releases</span>
        </h2>

        {/* Introductory Paragraph */}
        <p className="text-lg text-left text-[#C4C4C4] mb-12 leading-relaxed max-w-7xl">
          Stay updated with the latest happenings and exciting developments at YourBank through our press releases.
        </p>

        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-[#1C1C1C] rounded-lg shadow-lg p-8">
            <img src="/contract.png" alt="Contract" className="w-full h-64 object-cover rounded-lg mb-6" />
            <h3 className="text-xl font-bold mb-4 text-white">YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction</h3>
            <div className="flex space-x-4 mb-6">
            <span className="bg-[#141313] py-2 px-4 rounded-full text-sm text-[#C4C4C4]">
            Location: Portugal
            </span>
            <span className="bg-[#141313] py-2 px-4 rounded-full text-sm text-[#C4C4C4]">
            Date: 28/12/2024
            </span>
            </div>
            <p className="text-[#C4C4C4] leading-relaxed">
            YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing 
            their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. 
            With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1C1C1C] rounded-lg shadow-lg p-8">
            <img src="/buildings.png" alt="Buildings" className="w-full h-64 object-cover rounded-lg mb-6" />
            <h3 className="text-xl font-bold mb-4 text-white">YourBank Expands Branch Network with Opening of New Location in London</h3>
            <div className="flex space-x-4 mb-6">
            <span className="bg-[#141313] py-2 px-4 rounded-full text-sm text-[#C4C4C4]">
            Location: United Kingdom
            </span>
            <span className="bg-[#141313] py-2 px-4 rounded-full text-sm text-[#C4C4C4]">
            Date: 28/12/2024
            </span>
            </div>
            <p className="text-[#C4C4C4] leading-relaxed">
            YourBank is excited to announce the grand opening of our newest branch in London. This expansion is a testament to our continued 
            commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. 
            The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, 
            further strengthening our presence in the local community.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1C1C1C] rounded-lg shadow-lg p-8">
            <img src="/hand_shake.png" alt="Handshake" className="w-full h-64 object-cover rounded-lg mb-6" />
            <h3 className="text-xl font-bold mb-4 text-white">YourBank Partners with Local Nonprofit to Support Financial Education Initiatives</h3>
            <div className="flex space-x-4 mb-6">
            <span className="bg-[#141313] py-2 px-4 rounded-full text-sm text-[#C4C4C4]">
            Location: Portugal
            </span>
            <span className="bg-[#141313] py-2 px-4 rounded-full text-sm text-[#C4C4C4]">
            Date: 28/12/2024
            </span>
            </div>
            <p className="text-[#C4C4C4] leading-relaxed">
            YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. 
            This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, 
            and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future 
            while providing innovative banking solutions to our customers.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#1C1C1C] rounded-lg shadow-lg p-8">
            <img src="/globalism.png" alt="Globalism" className="w-full h-64 object-cover rounded-lg mb-6" />
            <h3 className="text-xl font-bold mb-4 text-white">YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility</h3>
            <div className="flex space-x-4 mb-6">
            <span className="bg-[#141313] py-2 px-4 rounded-full text-sm text-[#C4C4C4]">
            Location: Portugal
            </span>
            <span className="bg-[#141313] py-2 px-4 rounded-full text-sm text-[#C4C4C4]">
            Date: 28/12/2024
            </span>
            </div>
            <p className="text-[#C4C4C4] leading-relaxed">
            YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. 
            This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options,
            and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future 
            while providing innovative banking solutions to our customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressReleases;