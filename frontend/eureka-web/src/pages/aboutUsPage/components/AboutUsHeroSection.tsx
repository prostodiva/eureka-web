import AboutUsContent from '@/pages/homePage/components/AboutUsContent.tsx';
import Section from '../../../components/Section.tsx';
import { aboutUsHome } from '@/assets/images';

function AboutUsHeroSection() {
  return (
    <Section backgroundImage={aboutUsHome}>
      <AboutUsContent />
    </Section>
  );
}

export default AboutUsHeroSection;
