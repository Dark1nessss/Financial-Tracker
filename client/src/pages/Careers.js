import Welcome from '../components/sections/carrers/Welcome.js';
import OurValues from '../components/sections/carrers/OurValues.js';
import OurBenefits from '../components/sections/carrers/OurBenefits.js';
import Jobs from '../components/sections/carrers/Jobs.js';
import Faq from '../components/sections/carrers/Faq.js';
import OpenAcc from '../components/sections/carrers/OpenAcc.js';

const Careers = () => {
 
  
  return (
    <div className="bg-[#141313] text-white">
      <Welcome/>
      
      <OurValues/>

      <OurBenefits/>

      <Jobs/>

      <Faq/>

      <OpenAcc/>
    </div>
  );
};

export default Careers;