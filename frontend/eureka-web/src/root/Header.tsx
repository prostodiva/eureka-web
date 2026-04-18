import Navbar from '../components/ui/Navbar.tsx';
import ResponsiveImage from '../components/ui/ResponsiveImage.tsx';
import { logo } from '@/assets/images';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="absolute top-5 left-0 right-0 z-20 w-full">
      <div className="mx-auto px-4 md:px-8 lg:px-16 py-2 flex items-center justify-between">
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

         <div className="absolute w-full left-0 top-0">
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;
