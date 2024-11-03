import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPassword = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fromCodeVerification = localStorage.getItem('fromCodeVerification');
    if (!fromCodeVerification) {
      navigate('/code');
    }
  }, [navigate]);

  const handleSetPassword = () => {
    alert('Password has been reset successfully!');
    navigate('/login');
  };

  return (
    <section className="flex justify-center items-center py-16 bg-[#141313]">
      <div className="bg-[#1C1C1C] p-12 rounded-2xl shadow-lg w-full max-w-5xl text-center">
        <h2 className="text-5xl font-bold text-[#A5E404] mb-8">New Password</h2>
        <p className="text-[#C4C4C4] mb-8">
          Please insert a new password, don't forget to save it somewhere!
        </p>
        <div className="flex flex-col items-center space-y-4">
          <input
            type="password"
            placeholder="New Password"
            className="w-full max-w-2xl px-6 py-4 text-lg rounded-full bg-[#2C2C2C] text-[#C4C4C4] mb-4"
          />
          <input
            type="password"
            placeholder="Verify New Password"
            className="w-full max-w-2xl px-6 py-4 text-lg rounded-full bg-[#2C2C2C] text-[#C4C4C4] mb-8"
          />
          <button
            onClick={handleSetPassword}
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
      </div>
    </section>
  );
};

export default NewPassword;