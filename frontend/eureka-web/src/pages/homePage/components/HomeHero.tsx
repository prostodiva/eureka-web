import Section from '@/components/Section.tsx';
import { useNavigate } from 'react-router-dom';
import Bg from '../../../assets/original/Bg'

import HeroContent from './HeroContent.tsx';

function HomeHero() {
  const navigate = useNavigate();
  const handleGameplayClick = () => {
    navigate('/gameplay');
  };

  return (
    <Section style={{ backgroundColor: '#8658F1' }}>
      <div className="absolute inset-0 z-0 w-screen flex items-center justify-center">
        <Bg onClick={handleGameplayClick} aria-label="Play Eurika gameplay" />
      </div>
      <div className="z-10 pointer-events-none">
        <HeroContent />
      </div>
    </Section>
  );
}

export default HomeHero;
