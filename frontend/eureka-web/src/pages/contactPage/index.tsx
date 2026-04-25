import ContactHero from '@/pages/contactPage/components/ContactHero.tsx';
import ContactConnect from '@/pages/contactPage/components/ContactConnect.tsx';
import { Helmet } from 'react-helmet';

function ContactPage() {
  return (
    <>
      <Helmet>
        <meta name="keywords" content="contact, Eurika PuzzleLab, support, get in touch" />
        <meta name="description" content="Get in touch with Eurika PuzzleLab. Reach out to us for support, partnerships, or any questions about our interactive puzzle-based learning app for kids." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Eurika PuzzleLab",
              "description": "Get in touch with Eurika PuzzleLab for support, partnerships, or inquiries about our interactive puzzle-based learning app designed for kids.",
              "url": "https://eu-rika.com/contact",
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
                "logo": "https://eu-rika.com/logo.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer support",
                  "url": "https://eu-rika.com/contact",
                  "availableLanguage": "en-US"
                }
              }
            }
          `}
        </script>
      </Helmet>
      <ContactHero />
      <ContactConnect />
    </>
  );
}

export default ContactPage;
