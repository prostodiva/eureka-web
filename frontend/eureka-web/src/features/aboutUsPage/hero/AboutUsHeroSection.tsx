import Hero from '../../../components/sections/Hero.tsx';
import AboutUsHeroContent from './AboutUsHeroContent.tsx';
import { makeResponsiveImage } from '../../../utils/makeResponsiveImage.ts';
import aboutUsHome400avif from '../../../assets/optimized/aboutUsHome-400.avif';
import aboutUsHome800avif from '../../../assets/optimized/aboutUsHome-800.avif';
import aboutUsHome1200avif from '../../../assets/optimized/aboutUsHome-1200.avif';
import aboutUsHome1600avif from '../../../assets/optimized/aboutUsHome-1600.avif';
import aboutUsHome2400avif from '../../../assets/optimized/aboutUsHome-2400.avif';
import aboutUsHome400webp from '../../../assets/optimized/aboutUsHome-400.webp';
import aboutUsHome800webp from '../../../assets/optimized/aboutUsHome-800.webp';
import aboutUsHome1200webp from '../../../assets/optimized/aboutUsHome-1200.webp';
import aboutUsHome1600webp from '../../../assets/optimized/aboutUsHome-1600.webp';
import aboutUsHome2400webp from '../../../assets/optimized/aboutUsHome-2400.webp';

const aboutUsHome = makeResponsiveImage({
  fallbackSrc: aboutUsHome800webp,
  avif400: aboutUsHome400avif,
  avif800: aboutUsHome800avif,
  avif1200: aboutUsHome1200avif,
  avif1600: aboutUsHome1600avif,
  avif2400: aboutUsHome2400avif,
  webp400: aboutUsHome400webp,
  webp800: aboutUsHome800webp,
  webp1200: aboutUsHome1200webp,
  webp1600: aboutUsHome1600webp,
  webp2400: aboutUsHome2400webp,
});

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
