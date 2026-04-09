import Hero from '../../../components/sections/Hero.tsx';
import AboutUsHeroContent from './AboutUsHeroContent.tsx';
import { aboutUsHome } from '@/assets/images';

function AboutUsHeroSection() {
  return (
    <Hero
      backgroundImage={aboutUsHome}
      style={{ backgroundColor: '#A37CFF' }}
      content={<AboutUsHeroContent />}
    />
  );
}

export default AboutUsHeroSection;
