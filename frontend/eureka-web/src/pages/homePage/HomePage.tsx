import HomeHero from '@/pages/homePage/components/HomeHero.tsx';
import AboutUsSection from '@/pages/homePage/components/AboutUsSection.tsx';
import FeaturesSection from '@/pages/homePage/components/FeaturesSection.tsx';
import OverviewSection from '@/pages/homePage/components/OverviewSection.tsx';

function HomePage() {
  return (
    <>
      <HomeHero />
      <OverviewSection />
      <FeaturesSection />
      <AboutUsSection />
    </>
  );
}

export default HomePage;
