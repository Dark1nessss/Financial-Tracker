import Welcome from '../components/sections/carrers/Welcome.js';
import OurValues from '../components/sections/carrers/OurValues.js';
import OurBenefits from '../components/sections/carrers/OurBenefits.js';

const LandingPage = () => {
 
  
  return (
    <div className="bg-[#141313] text-white">
      <Welcome/>
      
      <OurValues/>

      <OurBenefits/>
    </div>
  );
};

export default LandingPage;