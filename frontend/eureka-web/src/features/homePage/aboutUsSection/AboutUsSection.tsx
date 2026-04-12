import Hero from '@/components/sections/Hero.tsx';

import AboutUsContent from './AboutUsContent.tsx';
import { aboutUsHome } from '@/assets/images';

function AboutUsSection() {
  return (
    <Hero backgroundImage={aboutUsHome}>
      <AboutUsContent />
    </Hero>
  );
}

export default AboutUsSection;
