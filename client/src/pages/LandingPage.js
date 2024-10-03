import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Welcome from '../components/sections/Welcome.js';
import Products from '../components/sections/Products.js';
import UseCases from '../components/sections/UseCases.js';
import Features from '../components/sections/Features.js';
import Faq from '../components/sections/Faq.js';
import Testemonial from '../components/sections/Testemonial.js';

const LandingPage = () => {
 
  
  return (
    <div className="bg-[#141313] text-white">
      <Welcome/>

      {/* Products Section */}
      <Products/>

      {/* Use Cases Section */}
      <UseCases/>

      {/* Features Section */}
      <Features />
      
      {/* FAQ'S Section */} 
      <Faq/>

      {/* Testemonial Section */}
      <Testemonial/>
      

    </div>
  );
};

export default LandingPage;