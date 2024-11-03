import React from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    // Navigate to the code verification page
    localStorage.setItem('fromForgotPassword', true);
    navigate('/code');
  };

  return (
    <section className="flex justify-center items-center py-16 bg-[#141313]">
      <div className="bg-[#1C1C1C] p-12 rounded-2xl shadow-lg w-full max-w-5xl text-center">
        <h2 className="text-5xl font-bold text-[#A5E404] mb-8">Forgot Password?</h2>
        <p className="text-[#C4C4C4] mb-8">
          Please insert your email so we can send a verification towards your email!
        </p>
        <input
          type="email"
          placeholder="Email"
          className="w-full max-w-2xl px-6 py-4 text-lg rounded-full bg-[#2C2C2C] text-[#C4C4C4] mb-8"
        />
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={handleNext}
            className="w-5/12 py-3 rounded-full bg-[#a5e404] text-black hover:bg-[#93c603] transition"
          >
            Send Email
          </button>
          <button
            onClick={() => navigate('/login')}
            className="w-5/12 py-3 rounded-full bg-[#2C2C2C] text-[#C4C4C4] hover:bg-[#3a3a3a] transition"
          >
            Nvm, I remembered it!
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;