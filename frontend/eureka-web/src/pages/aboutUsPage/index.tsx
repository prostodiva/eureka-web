import Helmet from 'react-helmet';
import AboutUsHeroSection from '@/pages/aboutUsPage/components/AboutUsHeroSection.tsx';

function AboutUsPage() {
  return (
    <>
      <Helmet>
        <meta name="keywords" content="React" />
        <meta name="description" content="A site map for the React website" />
        <script type="application/ld+json">
          {` 
            {
            "@context": "https://schema.org", 
            "@type": "AboutPage", 
            "name": "About Eurika PuzzleLab", 
            "description": "Discover the story behind Eurika PuzzleLab, an innovative interactive puzzle-based learning app designed to engage and educate kids through fun, educational challenges.", 
            "url": "https://eu-rika.com/about", 
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
              "@type": "Organization", 
              "name": "Eurika PuzzleLab", 
              "description": "A company dedicated to creating engaging educational experiences for children through interactive puzzles and games.", 
              "url": "https://eu-rika.com", 
              "logo": "https://eu-rika.com/logo.png" 
            } 
           }
           `}
        </script>
      </Helmet>
      <AboutUsHeroSection />
    </>
  );
}
// https://validator.schema.org/
// https://validator.w3.org/
//https://www.robotstxt.org/robotstxt.html
// https://www.xml-sitemaps.com/
export default AboutUsPage;
//npm install --save react-helmet
// npm i --save-dev @types/react-helmet
