import Hero from '../../../components/sections/Hero.tsx';
import { makeResponsiveImage } from '../../../utils/makeResponsiveImage.ts';
import contactHero400avif from '../../../assets/optimized/contact_hero-400.avif';
import contactHero800avif from '../../../assets/optimized/contact_hero-800.avif';
import contactHero1200avif from '../../../assets/optimized/contact_hero-1200.avif';
import contactHero1600avif from '../../../assets/optimized/contact_hero-1600.avif';
import contactHero2400avif from '../../../assets/optimized/contact_hero-2400.avif';
import contactHero400webp from '../../../assets/optimized/contact_hero-400.webp';
import contactHero800webp from '../../../assets/optimized/contact_hero-800.webp';
import contactHero1200webp from '../../../assets/optimized/contact_hero-1200.webp';
import contactHero1600webp from '../../../assets/optimized/contact_hero-1600.webp';
import contactHero2400webp from '../../../assets/optimized/contact_hero-2400.webp';
import ContactHeroContent from './ContactHeroContent.tsx';

const contact_hero = makeResponsiveImage({
  fallbackSrc: contactHero800webp,
  avif400: contactHero400avif,
  avif800: contactHero800avif,
  avif1200: contactHero1200avif,
  avif1600: contactHero1600avif,
  avif2400: contactHero2400avif,
  webp400: contactHero400webp,
  webp800: contactHero800webp,
  webp1200: contactHero1200webp,
  webp1600: contactHero1600webp,
  webp2400: contactHero2400webp,
});

function ContactHero() {
  return (
    <Hero
      backgroundImage={contact_hero}
      style={{ backgroundColor: '#8658F1' }}
      content={<ContactHeroContent />}
    />
  );
}

export default ContactHero;
