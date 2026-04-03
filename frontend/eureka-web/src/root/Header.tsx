import Navbar from '../components/ui/Navbar.tsx';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 w-full">
      <div className="mx-auto px-4 md:px-8 lg:px-16 py-2 grid grid-cols-3 items-center">
        <Link
          to="/"
          className="flex items-center hover:opacity-90 transition-opacity justify-self-start"
          aria-label="Home"
        >
          <img src={logo} alt="Company Logo" className="h-2 md:h-6 w-auto" />
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
