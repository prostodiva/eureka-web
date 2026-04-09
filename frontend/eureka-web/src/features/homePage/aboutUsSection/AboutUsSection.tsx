import About from '../../../components/sections/About.tsx';
import AboutUsContent from './AboutUsContent.tsx';
import { aboutUsHome } from '@/assets/images';

function AboutUsSection() {
  return <About backgroundImage={aboutUsHome} content={<AboutUsContent />} />;
}

export default AboutUsSection;
