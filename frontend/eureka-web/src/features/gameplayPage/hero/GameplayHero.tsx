import Hero from '../../../components/sections/Hero.tsx';
import GameplayHeroContent from './GameplayHeroContent.tsx';
import gameplay from '../../../assets/bg/gameplay.png';

function GameplayHero() {


  return (
    <Hero
      backgroundImage={gameplay}
      className="h-[180vh]"
      style={{ backgroundPosition: 'top center' }}
      content={<GameplayHeroContent />}
    />
  );
}

export default GameplayHero;
