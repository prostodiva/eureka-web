import Navbar from '../components/ui/Navbar.tsx';
import ResponsiveImage from '../components/ui/ResponsiveImage.tsx';
import { makeResponsiveImage } from '../utils/makeResponsiveImage.ts';
import logo400avif from '../assets/optimized/logo-400.avif';
import logo800avif from '../assets/optimized/logo-800.avif';
import logo1200avif from '../assets/optimized/logo-1200.avif';
import logo400webp from '../assets/optimized/logo-400.webp';
import logo800webp from '../assets/optimized/logo-800.webp';
import logo1200webp from '../assets/optimized/logo-1200.webp';
import { Link } from 'react-router-dom';

const logo = makeResponsiveImage({
  alt: 'Company Logo',
  fallbackSrc: logo400webp,
  avif400: logo400avif,
  avif800: logo800avif,
  avif1200: logo1200avif,
  webp400: logo400webp,
  webp800: logo800webp,
  webp1200: logo1200webp,
});

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 w-full">
      <div className="mx-auto px-4 md:px-8 lg:px-16 py-2 grid grid-cols-3 items-center">
        <Link
          to="/"
          className="flex items-center hover:opacity-90 transition-opacity justify-self-start"
          aria-label="Home"
        >
          <ResponsiveImage
            image={logo}
            className="h-6 sm:h-6 md:h-6 lg:h-6 w-auto"
            sizes="96px"
          />
        </Link>

        <div className="justify-self-center">
          <Navbar />
        </div>

        {/**
         * <div className="justify-self-end text-white inline-flex items-center gap-6">
         *           <div className="underline underline-offset-3">RU</div>
         *           <BiSearchAlt />
         *         </div>
         *
         */}
      </div>
    </header>
  );
}

export default Header;
