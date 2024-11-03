import React from 'react';

const UseCases = () => {
  return (
    <section className="use-cases-section text-white py-8 max-w-7xl mx-auto">
      <div className="">
        {/* Section Header */}
        <h2 className="text-5xl font-bold mb-6">
          Use <span className="text-[#A5E404]">Cases</span>
        </h2>
        <p className="text-lg mb-12 max-w-7xl">
          At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions.
        </p>

        <div className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <div className="bg-[#1C1C1C] grid grid-cols-2 gap-4 mb-16 p-10 rounded-xl">
              {/* Use Case Cards for Individuals */}
              {[
                { icon: "/notes_con.png", text: "Managing Personal Finances" },
                { icon: "/savings_con.png", text: "Saving for the Future" },
                { icon: "/apartment_con.png", text: "Homeownership" },
                { icon: "/book_con.png", text: "Education Funding" },
              ].map((caseItem, index) => (
                <div key={index} className="flex flex-col items-center text-center bg-[#141313] p-6 rounded-lg transition-transform transform hover:scale-105 duration-300">
                  <div className="bg-[#1C1C1C] rounded-full p-4">
                    <img src={caseItem.icon} alt={caseItem.text} className="w-12 h-12" />
                  </div>
                  <p className="mt-4">{caseItem.text}</p>
                </div>
              ))}
            </div>

            {/* For Business Stats */}
            <div className="pr-8 mb-8">
              <h3 className="text-xl font-semibold mb-4">For Business</h3>
              <p className="mb-4 text-lg">
                For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them.
              </p>
              <div className="flex justify-between items-center mb-4">
                {[  
                  { stat: "65%", label: "Cash Flow Management" },
                  { stat: "70%", label: "Drive Business Expansion" },
                  { stat: "45%", label: "Streamline Payroll Processing" },
                ].map((item, index) => (
                  <div key={index}>
                    <h4 className="text-5xl font-semibold text-[#A5E404] mt-4">{item.stat}</h4>
                    <p className="mt-4">{item.label}</p>
                  </div>
                ))}
              </div>
              <button className="bg-[#A5E404] text-black py-2 px-6 rounded-full mt-16 hover:bg-white transition-colors duration-300 font-semibold">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* For Individuals Stats */}
            <div className="pl-8">
              <h3 className="text-xl font-semibold mb-4">For Individuals</h3>
              <p className="mb-4 text-lg">
                For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers.
              </p>
              <div className="flex justify-between items-center mb-4">
                {[
                  { stat: "78%", label: "Secure Retirement Planning" },
                  { stat: "63%", label: "Manageable Debt Consolidation" },
                  { stat: "91%", label: "Reducing Financial Burdens" },
                ].map((item, index) => (
                  <div key={index}>
                    <h4 className="text-5xl font-semibold text-[#A5E404] mt-4">{item.stat}</h4>
                    <p className="mt-4">{item.label}</p>
                  </div>
                ))}
              </div>
              <button className="bg-[#A5E404] text-black py-2 px-6 rounded-full mt-16 hover:bg-white transition-colors duration-300 font-semibold">
                Learn More
              </button>
            </div>

            {/* Business Use Case Icons */}
            <div className="bg-[#1C1C1C] grid grid-cols-2 gap-4 p-10 rounded-xl mt-24">
              {[
                { icon: "/bank_con.png", text: "Startups and Entrepreneurs" },
                { icon: "/graph_con.png", text: "Business Expansion" },
                { icon: "/dollar_con.png", text: "Cash Flow Management" },
                { icon: "/hold_con.png", text: "Payment Solutions" },
              ].map((caseItem, index) => (
                <div key={index} className="flex flex-col items-center text-center bg-[#141313] p-6 rounded-lg transition-transform transform hover:scale-105 duration-300">
                  <div className="bg-[#1C1C1C] rounded-full p-4">
                    <img src={caseItem.icon} alt={caseItem.text} className="w-12 h-12" />
                  </div>
                  <p className="mt-4">{caseItem.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
