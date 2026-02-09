import Hero from '../../../components/sections/Hero.tsx';
import GameplayHeroContent from './GameplayHeroContent.tsx';
import Button from '../../../components/Button.tsx';
import homeHeroBg from '../../../assets/bg/homeHero.png';

function GameplayHero() {
  const handleBuyClick = () => {
    console.log('buy clicked');
  };

  return (
    <Hero
      backgroundImage={homeHeroBg}
      minHeightScreen
      content={
        <GameplayHeroContent
          title="Hero Section Store Page"
          description="hero section Store page description blah-blah"
        />
      }
      actions={
        <Button variant="secondary" onClick={handleBuyClick}>
          Buy
        </Button>
      }
    />
  );
}

export default GameplayHero;
