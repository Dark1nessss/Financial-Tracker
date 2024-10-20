import Welcome from '../components/sections/about/Welcome.js';
import Mission from '../components/sections/about/Mission.js';

const About = () => {

  return (
    <div className="bg-[#141313] text-white">
      <Welcome/>

      <Mission/>
    </div>
  );
};

export default About;