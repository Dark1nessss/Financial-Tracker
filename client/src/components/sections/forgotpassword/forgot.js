import React, { useState } from 'react';

function ForgotPassword() {
  const [step, setStep] = useState(1);

  return (
    <section className="flex justify-center items-center py-16 bg-[#141313]">
      <div className="relative bg-[#1C1C1C] p-12 rounded-2xl shadow-lg w-full max-w-5xl text-center">
        {/* Background pattern */}
        <img
          src="/abstract_design.png"
          alt="Background Pattern"
          className="absolute inset-0 h-full w-full object-cover opacity-5 pointer-events-none rounded-2xl"
        />

        {step === 1 && (
          <>
            <h2 className="text-5xl font-bold text-[#A5E404] mb-8">Forgot Password?</h2>
            <p className="text-[#C4C4C4] mb-8">
              Please insert your email so we can send a verification towards your email!
            </p>
            <div className="flex flex-col items-center space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full max-w-2xl px-6 py-4 text-lg rounded-full bg-[#2C2C2C] text-[#C4C4C4] placeholder-[#6B7280] focus:outline-none mb-8"
              />
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-5/12 py-3 rounded-full bg-[#a5e404] text-black hover:bg-[#93c603] transition"
              >
                Send Email
              </button>
              <button
                type="button"
                className="w-5/12 py-3 rounded-full bg-[#2C2C2C] text-[#C4C4C4] hover:bg-[#3a3a3a] transition"
              >
                Nvm, I remembered it!
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-5xl font-bold text-[#A5E404] mb-8">Code Verification</h2>
            <p className="text-[#C4C4C4] mb-8">
              Please insert your code so we can verify that you have received it!
            </p>
            <div className="flex flex-col items-center space-y-4">
              <input
                type="text"
                placeholder="Code"
                className="w-full max-w-2xl px-6 py-4 text-lg rounded-full bg-[#2C2C2C] text-[#C4C4C4] placeholder-[#6B7280] focus:outline-none mb-8"
              />
              <button
                type="button"
                onClick={() => setStep(3)}
                className="w-5/12 py-3 rounded-full bg-[#a5e404] text-black hover:bg-[#93c603] transition"
              >
                Verify
              </button>
              <button
                type="button"
                className="w-5/12 py-3 rounded-full bg-[#2C2C2C] text-[#C4C4C4] hover:bg-[#3a3a3a] transition"
              >
                Not received the code?
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-5xl font-bold text-[#A5E404] mb-8">New Password</h2>
            <p className="text-[#C4C4C4] mb-8">
              Please insert a new password, don't forget to save it somewhere!
            </p>
            <div className="flex flex-col items-center space-y-4">
              <input
                type="text"
                placeholder="New Password"
                className="w-full max-w-2xl px-6 py-4 text-lg rounded-full bg-[#2C2C2C] text-[#C4C4C4] placeholder-[#6B7280] focus:outline-none"
              />
              <input
                type="password"
                placeholder="Verify New Password"
                className="w-full max-w-2xl px-6 py-4 text-lg rounded-full bg-[#2C2C2C] text-[#C4C4C4] placeholder-[#6B7280] focus:outline-none"
              />
              <button
                type="button"
                className="w-5/12 py-3 rounded-full bg-[#a5e404] text-black hover:bg-[#93c603] transition"
              >
                Set new password!
              </button>
              <button
                type="button"
                className="w-5/12 py-3 rounded-full bg-[#2C2C2C] text-[#C4C4C4] hover:bg-[#3a3a3a] transition"
              >
                Generate a new password!
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default ForgotPassword;