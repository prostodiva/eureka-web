import SupportHero from '../features/supportPage/heroSection/SupportHero.tsx';


function SupportPage() {
    return (
      <>
        <h1 className="text-3xl md:text-5xl font-bold text-center mt-6">
          Support Page. This title should describe the entire page, not just a
          section
        </h1>

        <SupportHero />

      </>
    );
}

export default SupportPage;