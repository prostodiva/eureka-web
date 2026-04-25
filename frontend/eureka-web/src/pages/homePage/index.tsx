import HomeHero from '@/pages/homePage/components/HomeHero.tsx';
import AboutUsSection from '@/pages/homePage/components/AboutUsSection.tsx';
import FeaturesSection from '@/pages/homePage/components/FeaturesSection.tsx';
import OverviewSection from '@/pages/homePage/components/OverviewSection.tsx';
import { Helmet } from 'react-helmet';

function HomePage() {
  return (
    <>
      <Helmet>
        <meta name="keywords" content="kids learning app, educational puzzles, interactive learning, Eurika PuzzleLab, puzzle games for kids" />
        <meta name="description" content="Eurika PuzzleLab is an interactive puzzle-based learning app that engages and educates kids through fun, creative challenges and educational games." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Eurika PuzzleLab",
              "description": "An interactive puzzle-based learning app designed to engage and educate kids through fun, creative challenges and educational games.",
              "url": "https://eu-rika.com",
              "inLanguage": "en-US",
              "publisher": {
                "@type": "Organization",
                "name": "Eurika PuzzleLab",
                "url": "https://eu-rika.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://eu-rika.com/logo.png"
                },
                "description": "Interactive puzzle-based learning app for kids",
                "foundingDate": "2026"
              },
              "mainEntity": {
                "@type": "SoftwareApplication",
                "name": "Eurika PuzzleLab",
                "description": "A puzzle-based educational platform that helps children develop critical thinking and problem-solving skills through interactive gameplay.",
                "url": "https://eu-rika.com",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "All",
                "audience": {
                  "@type": "EducationalAudience",
                  "educationalRole": "student"
                },
                "offers": {
                  "@type": "Offer",
                  "url": "https://eu-rika.com"
                }
              }
            }
          `}
        </script>
      </Helmet>
      <HomeHero />
      <OverviewSection />
      <FeaturesSection />
      <AboutUsSection />
    </>
  );
}

export default HomePage;
