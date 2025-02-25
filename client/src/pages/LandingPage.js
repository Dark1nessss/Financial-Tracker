import Welcome from '../components/sections/landingpage/Welcome.js';
import Products from '../components/sections//landingpage/Products.js';
import UseCases from '../components/sections//landingpage/UseCases.js';
import Features from '../components/sections//landingpage/Features.js';
import Faq from '../components/sections//landingpage/Faq.js';
import OpenAcc from '../components/sections//landingpage/OpenAcc.js';

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
      
      {/* Open Account */}
      <OpenAcc/>

    </div>
  );
};

export default LandingPage;