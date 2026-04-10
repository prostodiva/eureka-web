import Hero from '@/components/sections/Hero';
import ContactHeroContent from './ContactHeroContent';

function ContactHero() {
  return (
    <Hero
      style={{ backgroundColor: '#8658F1' }}
      content={<ContactHeroContent />}
    />
  );
}

export default ContactHero;
