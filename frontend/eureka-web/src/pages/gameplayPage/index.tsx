import GameplayHero from '@/pages/gameplayPage/components/GameplayHero.tsx';
import GameplayFeatures from '@/pages/gameplayPage/components/GameplayFeatures.tsx';
import GameplayFaq from '@/pages/gameplayPage/components/GameplayFaq.tsx';
import { Helmet } from 'react-helmet';

function GameplayPage() {
  return (
    <>
      <Helmet>
        <meta name="keywords" content="gameplay, puzzles, kids learning, interactive games, Eurika PuzzleLab, educational puzzles" />
        <meta name="description" content="Explore how Eurika PuzzleLab works — discover engaging puzzle mechanics, educational features, and frequently asked questions about our interactive learning app for kids." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Gameplay - Eurika PuzzleLab",
              "description": "Learn how Eurika PuzzleLab's interactive puzzle-based gameplay works. Explore features, mechanics, and FAQs designed to make learning fun and engaging for kids.",
              "url": "https://eu-rika.com/gameplay",
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
                "description": "An interactive puzzle-based learning app designed to educate and engage kids through fun, educational challenges and games.",
                "url": "https://eu-rika.com",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "All",
                "audience": {
                  "@type": "EducationalAudience",
                  "educationalRole": "student"
                }
              }
            }
          `}
        </script>
      </Helmet>
      <GameplayHero />
      <GameplayFeatures />
      <GameplayFaq />
    </>
  );
}

export default GameplayPage;
