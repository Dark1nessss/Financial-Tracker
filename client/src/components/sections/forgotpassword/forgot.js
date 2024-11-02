import React, { useState } from 'react';

function ForgotPassword() {
  const [step, setStep] = useState(1); // Step 1: Enter email, Step 2: Enter new password

  return (
    <section className="flex justify-center items-center py-16 bg-[#141313]">
      <div className="relative bg-[#1C1C1C] p-12 md:p-16 rounded-2xl shadow-lg w-full max-w-md text-center">
        {/* Background pattern */}
        <img src="/abstract_design.png" alt="Background Pattern" className="absolute inset-0 h-full w-full object-cover opacity-5 pointer-events-none rounded-2xl" />

        <h2 className="text-5xl font-bold text-[#A5E404] mb-6">Forgot Password</h2>
        
        {step === 1 ? (
          // Step 1: Email Entry
          <>
            <p className="text-[#C4C4C4] mb-10">
              Enter your email address to receive password reset instructions.
            </p>
            <form className="space-y-6">
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full px-4 py-4 text-lg rounded-full bg-[#2C2C2C] text-[#C4C4C4] placeholder-[#6B7280] focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full py-4 text-lg rounded-full bg-[#A5E404] text-black font-semibold hover:bg-[#93c603] transition"
              >
                Next
              </button>
            </form>
          </>
        ) : (
          // Step 2: New Password Entry
          <>
            <p className="text-[#C4C4C4] mb-10">Enter your new password.</p>
            <form className="space-y-6">
              <input
                type="password"
                placeholder="Enter new Password"
                className="w-full px-4 py-4 text-lg rounded-full bg-[#2C2C2C] text-[#C4C4C4] placeholder-[#6B7280] focus:outline-none"
              />
              <input
                type="password"
                placeholder="Confirm new Password"
                className="w-full px-4 py-4 text-lg rounded-full bg-[#2C2C2C] text-[#C4C4C4] placeholder-[#6B7280] focus:outline-none"
              />
              <button
                type="button"
                className="w-full py-4 text-lg rounded-full bg-[#A5E404] text-black font-semibold hover:bg-[#93c603] transition"
              >
                Reset Password
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}

export default ForgotPassword;