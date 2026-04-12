import AboutUsContent from '@/features/homePage/aboutUsSection/AboutUsContent.tsx';
import Hero from '../../../components/sections/Hero.tsx';
import { aboutUsHome } from '@/assets/images';

function AboutUsHeroSection() {
  return (
    <Hero backgroundImage={aboutUsHome}>
      <AboutUsContent />
    </Hero>
  );
}

export default AboutUsHeroSection;
