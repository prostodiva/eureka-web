import Link from './Link.tsx';
import { useState } from 'react';
import { BsPuzzleFill } from 'react-icons/bs';
import { IoExtensionPuzzle } from 'react-icons/io5';
import { FaPuzzlePiece } from 'react-icons/fa6';
import { RiPuzzle2Fill } from 'react-icons/ri';

type LinkVariant = 'horizontal' | 'vertical';
type Alignment = 'start' | 'center' | 'end' | 'between';

interface NavLink {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

interface NavbarProps {
  links?: NavLink[];
  containerClassName?: string;
  navClassName?: string;
  linkClassName?: string;
  activeLinkClassName?: string;
  logo?: React.ReactNode;
  variant?: LinkVariant;
  alignment?: Alignment;
}

function Navbar({
  links,
  linkClassName = 'gap-2 my-2 md:mx-4 text-xl text-white flex items-center gap-1 whitespace-nowrap',
  activeLinkClassName = 'font-bold text-yellow-300',
  variant = 'horizontal',
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const defaultLinks: NavLink[] = [
    { label: 'Home', path: '/', icon: <BsPuzzleFill /> },
    { label: 'Gameplay', path: '/gameplay', icon: <IoExtensionPuzzle /> },
    { label: 'About Us', path: '/about', icon: <FaPuzzlePiece /> },
    {
      label: 'Contact',
      path: '/contact',
      icon: <RiPuzzle2Fill className="-scale-x-100" />,
    },
  ];

  const navLinks = links || defaultLinks;

  const variantClasses = variant === 'vertical' ? 'flex-col': mobileOpen ?  'flex-col absolute top-12 right-0' : 'hidden md:flex'  ;

  const renderedLinks = navLinks.map((link) => (
    <Link
      key={link.label}
      to={link.path}
      className={linkClassName}
      activeClassName={activeLinkClassName}
    >
      {link.icon && <span>{link.icon}</span>}
      {link.label}
    </Link>
  ));

  return (
    <div className="flex items-center justify-end md:justify-center">
      {/*hamburger button for mobile*/}
      {variant==='horizontal'&&<button
        className="md:hidden ml-auto px-4 py-2 text-2xl font-inter"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
      >
      MENU
      </button>}

      <nav
        aria-label="Primary navigation"
        className={`flex ${variantClasses} items-start gap-10  justify-center`}
      >
        {renderedLinks}
      </nav>
    </div>
  );
}

export default Navbar;
