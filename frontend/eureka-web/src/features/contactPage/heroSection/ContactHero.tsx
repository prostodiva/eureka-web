import Hero from '../../../components/sections/Hero.tsx';
import contact_hero from '../../../assets/bg/contact_hero.png';
import ContactHeroContent from './ContactHeroContent.tsx';

function ContactHero() {
  return (
    <Hero backgroundImage={contact_hero} content={<ContactHeroContent />} />
  );
}

export default ContactHero;
