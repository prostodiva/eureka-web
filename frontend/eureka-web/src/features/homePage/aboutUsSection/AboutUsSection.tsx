import About from '../../../components/sections/About.tsx';
import AboutUsContent from './AboutUsContent.tsx';
import aboutUsHome from '../../../assets/bg/aboutUsHome.png';

function AboutUsSection() {
  return (
    <About
      backgroundImage={aboutUsHome}
      content={
        <AboutUsContent />
      }
    />
  );
}

export default AboutUsSection;
