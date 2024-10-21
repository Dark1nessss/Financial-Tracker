import Welcome from '../components/sections/about/Welcome.js';
import Mission from '../components/sections/about/Mission.js';
import News from '../components/sections/about/News.js';

const About = () => {

  return (
    <div className="bg-[#141313] text-white">
      <Welcome/>

      <Mission/>

      <News/>
    </div>
  );
};

export default About;