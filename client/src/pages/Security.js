import Welcome from '../components/sections/security/Welcome.js';
import Protect from '../components/sections/security/Protect.js';
import Faq from '../components/sections/security/Faq.js';

const Security = () => {

  return (
    <div className="bg-[#141313] text-white">
      <Welcome/>

      <Protect/>

      <Faq/>
    </div>
  );
};

export default Security;