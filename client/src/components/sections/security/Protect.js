import React from 'react';

const HowWeProtectYou = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl font-bold mb-8 text-left text-white">
          How We <span className="text-[#A5E404]">Protect You</span>
        </h2>
        <p className="text-lg text-left text-[#C4C4C4] mb-12 leading-relaxed max-w-7xl">
          At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times.
        </p>

        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Secure Online Banking Platform */}
          <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#333333] shadow-lg text-center hover:border-[#A5E404] transition-all duration-300 ease-in-out">
            <div className="flex justify-center mb-4">
              <img src="/secure_online.png" alt="Secure Online Banking" className="w-16 h-16 mb-4" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Secure Online Banking Platform</h3>
            <p className="text-[#C4C4C4] leading-relaxed">
              Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.
            </p>
          </div>

          {/* Multi-Factor Authentication */}
          <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#333333] shadow-lg text-center hover:border-[#A5E404] transition-all duration-300 ease-in-out">
            <div className="flex justify-center mb-4">
              <img src="/multi_factor.png" alt="Multi-Factor Authentication" className="w-16 h-16 mb-4" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Multi-Factor Authentication</h3>
            <p className="text-[#C4C4C4] leading-relaxed">
              To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.
            </p>
          </div>

          {/* Fraud Monitoring */}
          <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#333333] shadow-lg text-center hover:border-[#A5E404] transition-all duration-300 ease-in-out">
            <div className="flex justify-center mb-4">
              <img src="/fraud_monitoring.png" alt="Fraud Monitoring" className="w-16 h-16 mb-4" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Fraud Monitoring</h3>
            <p className="text-[#C4C4C4] leading-relaxed">
              We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.
            </p>
          </div>

          {/* Secure Mobile Banking */}
          <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#333333] shadow-lg text-center hover:border-[#A5E404] transition-all duration-300 ease-in-out">
            <div className="flex justify-center mb-4">
              <img src="/mobile_banking.png" alt="Secure Mobile Banking" className="w-16 h-16 mb-4" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Secure Mobile Banking</h3>
            <p className="text-[#C4C4C4] leading-relaxed">
              Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeProtectYou;
