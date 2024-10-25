import Welcome from '../components/sections/security/Welcome.js';
import Protect from '../components/sections/security/Protect.js';

const Security = () => {

  return (
    <div className="bg-[#141313] text-white">
      <Welcome/>
      
      <Protect/>
    </div>
  );
};

export default Security;