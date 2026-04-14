import Section from '@/components/Section.tsx';

import AboutUsContent from './AboutUsContent.tsx';
import { aboutUsHome } from '@/assets/images';

function AboutUsSection() {
  return (
    <Section backgroundImage={aboutUsHome}>
      <AboutUsContent />
    </Section>
  );
}

export default AboutUsSection;
