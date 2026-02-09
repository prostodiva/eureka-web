import HomeHero from '../features/homePage/hero/HomeHero.tsx';
import AboutUsSection from '../features/homePage/aboutUsSection/AboutUsSection.tsx';
import CtaSection from '../features/homePage/CTAsection/CtaSection.tsx';
import FeaturesSection from '../features/homePage/featuresSection/FeaturesSection.tsx';
import OverviewSection from '../features/homePage/OverviewSection/OverviewSection.tsx';
import ValuesSection from '../features/homePage/valuesSection/ValuesSection.tsx';

function HomePage() {
    return (
      <>
        <h1 className="text-3xl md:text-5xl font-bold text-center mt-6">
          This title should describe the entire page, not just a section
        </h1>

        <HomeHero />
        <ValuesSection />
        <FeaturesSection />
        <AboutUsSection />
        <OverviewSection />
        <CtaSection />
      </>
    );
}

export default HomePage;
