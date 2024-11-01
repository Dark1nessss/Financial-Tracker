import React from 'react';
import { Link } from 'react-router-dom';

const OpenAcc = () => {
  return (
    <section className="my-16">
      <div className="max-w-7xl mx-auto px-12 py-16 relative overflow-hidden rounded-[20px] bg-[#1C1C1C] flex justify-between items-center">
        {/* Add the gradient mesh to the left */}
        <div className="absolute left-0 top-0 h-full w-[250px]">
          <img src="/green_gradient_mesh.png" alt="Mesh" className="h-full w-full object-cover" />
        </div>
        {/* Text and button content */}
        <div className="relative z-10 text-white max-w-4xl">
          <h2 className="text-4xl font-semibold mb-4">
            Start your financial journey with <span className="text-[#A5E404]">YourBank today!</span>
          </h2>
          <p className="text-gray-400">
            Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service.
          </p>
        </div>
        {/* Open Account button using Link */}
        <div className="relative z-10">
          <Link
            to="/register"
            className="inline-block bg-[#A5E404] text-black py-3 px-8 rounded-full hover:bg-white transition-colors duration-300 font-semibold"
          >
            Open Account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OpenAcc;