import Hero from '../../../components/sections/Hero.tsx';
import AboutUsHeroContent from './AboutUsHeroContent.tsx';
import aboutUsHome from '../../../assets/bg/aboutUsHome.png';

function AboutUsHeroSection() {
  return (
    <Hero
      backgroundImage={aboutUsHome}
      content={<AboutUsHeroContent />}
    />
  );
}

export default AboutUsHeroSection;
