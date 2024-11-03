import React from 'react'

const UseCases = () => {
  return (
    <section className="use-cases-section text-white lg:ml-16 py-8">
        <div className="lg:px-56 px-6">
        <h2 className="text-5xl font-bold mb-6">
              Use <span className="text-[#A5E404]">Cases</span>
            </h2>
          <p className="text-lg mb-12 max-w-4xl">
            At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions.
          </p>

          <div className="grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <div className="bg-[#1C1C1C] grid grid-cols-2 gap-4 mb-16 p-10 rounded-xl">
                {/* Managing Personal Finances */}
                <div className="flex flex-col items-center text-center bg-[#141313] p-6 rounded-lg transition-transform transform hover:scale-105 duration-300">
                  <div className="bg-[#1C1C1C] rounded-full p-4">
                    <img src="/notes_con.png" alt="Managing Personal Finances" className="w-12 h-12" />
                  </div>
                  <p className="mt-4">Managing Personal Finances</p>
                </div>
                {/* Saving for the Future */}
                <div className="flex flex-col items-center text-center bg-[#141313] p-6 rounded-lg transition-transform transform hover:scale-105 duration-300">
                  <div className="bg-[#1C1C1C] rounded-full p-4">
                    <img src="/savings_con.png" alt="Saving for the Future" className="w-12 h-12" />
                  </div>
                  <p className="mt-4">Saving for the Future</p>
                </div>
                {/* Homeownership */}
                <div className="flex flex-col items-center text-center bg-[#141313] p-6 rounded-lg transition-transform transform hover:scale-105 duration-300">
                  <div className="bg-[#1C1C1C] rounded-full p-4">
                    <img src="/apartment_con.png" alt="Homeownership" className="w-12 h-12" />
                  </div>
                  <p className="mt-4">Homeownership</p>
                </div>
                {/* Education Funding */}
                <div className="flex flex-col items-center text-center bg-[#141313] p-6 rounded-lg transition-transform transform hover:scale-105 duration-300">
                  <div className="bg-[#1C1C1C] rounded-full p-4">
                    <img src="/book_con.png" alt="Education Funding" className="w-12 h-12" />
                  </div>
                  <p className="mt-4">Education Funding</p>
                </div>
              </div>

              {/* For Business Stats */}
              <div className="p-8 mb-8">
                <h3 className="text-xl font-semibold mb-4">For Business</h3>
                <p className="mb-4">
                  For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="text-5xl font-semibold text-[#A5E404] mt-4">65%</h4>
                    <p className="mt-4">Cash Flow Management</p>
                  </div>
                  <div>
                    <h4 className="text-5xl font-semibold text-[#A5E404] mt-4">70%</h4>
                    <p className="mt-4">Drive Business Expansion</p>
                  </div>
                  <div>
                    <h4 className="text-5xl font-semibold text-[#A5E404] mt-4">45%</h4>
                    <p className="mt-4">Streamline Payroll Processing</p>
                  </div>
                </div>
                <button className="bg-[#A5E404] text-black py-2 px-6 rounded-full mt-16 hover:bg-white transition-colors duration-300 font-semibold ">Learn More</button>
              </div>
            </div>

            {/* Right Column */}
            {/* For Individuals Stats */}
            <div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">For Individuals</h3>
                <p className="mb-4">
                  For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="text-5xl font-semibold text-[#A5E404] mt-4">78%</h4>
                    <p className="mt-4">Secure Retirement Planning</p>
                  </div>
                  <div>
                    <h4 className="text-5xl font-semibold text-[#A5E404] mt-4">63%</h4>
                    <p className="mt-4">Manageable Debt Consolidation</p>
                  </div>
                  <div>
                    <h4 className="text-5xl font-semibold text-[#A5E404] mt-4">91%</h4>
                    <p className="mt-4">Reducing Financial Burdens</p>
                  </div>
                </div>
                <button className="bg-[#A5E404] text-black py-2 px-6 rounded-full mt-16 hover:bg-white transition-colors duration-300 font-semibold">Learn More</button>
              </div>

              {/* Icon container for business use cases */}
              <div className="bg-[#1C1C1C] grid grid-cols-2 gap-4 p-10 rounded-xl mt-12">
                {/* Starting an Enterprise */}
                <div className="flex flex-col items-center text-center bg-[#141313] p-6 rounded-lg transition-transform transform hover:scale-105 duration-300">
                  <div className="bg-[#1C1C1C] rounded-full p-4">
                    <img src="/bank_con.png" alt="Starting an Enterprise" className="w-12 h-12" />
                  </div>
                  <p className="mt-4">Startups and Entrepreneurs</p>
                </div>
                {/* Business Expansion */}
                <div className="flex flex-col items-center text-center bg-[#141313] p-6 rounded-lg transition-transform transform hover:scale-105 duration-300">
                  <div className="bg-[#1C1C1C] rounded-full p-4">
                    <img src="/graph_con.png" alt="Business Expansion" className="w-12 h-12" />
                  </div>
                  <p className="mt-4">Business Expansion</p>
                </div>
                {/* Cash Flow Management */}
                <div className="flex flex-col items-center text-center bg-[#141313] p-6 rounded-lg transition-transform transform hover:scale-105 duration-300">
                  <div className="bg-[#1C1C1C] rounded-full p-4">
                    <img src="/dollar_con.png" alt="Cash Flow Management" className="w-12 h-12" />
                  </div>
                  <p className="mt-4">Cash Flow Management</p>
                </div>
                {/* Payment Solutions */}
                <div className="flex flex-col items-center text-center bg-[#141313] p-6 rounded-lg transition-transform transform hover:scale-105 duration-300">
                  <div className="bg-[#1C1C1C] rounded-full p-4">
                    <img src="/hold_con.png" alt="Payment Solutions" className="w-12 h-12" />
                  </div>
                  <p className="mt-4">Payment Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default UseCases