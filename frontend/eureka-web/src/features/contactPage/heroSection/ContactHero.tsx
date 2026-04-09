import Hero from '@/components/sections/Hero';
import ContactHeroContent from './ContactHeroContent';
import { contactHero } from '@/assets/images';

function ContactHero() {
  return (
    <Hero
      backgroundImage={contactHero}
      style={{ backgroundColor: '#8658F1' }}
      content={<ContactHeroContent />}
    />
  );
}

export default ContactHero;
