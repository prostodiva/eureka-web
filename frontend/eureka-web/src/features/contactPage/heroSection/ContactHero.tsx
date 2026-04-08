import Hero from '../../../components/sections/Hero.tsx';
import contact_hero from '../../../assets/bg/contact_hero.png';
import ContactHeroContent from './ContactHeroContent.tsx';

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
