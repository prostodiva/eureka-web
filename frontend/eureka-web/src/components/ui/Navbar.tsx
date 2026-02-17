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
  navClassName = 'w-full flex flex-col md:flex-row items-center gap-10 h-auto md:h-24 font-inter',
  linkClassName = 'gap-2 my-2 md:mx-4 text-2xl text-gray-400 flex items-center gap-1 whitespace-nowrap',
  activeLinkClassName = 'font-bold text-white',
  variant = 'horizontal',
  alignment = 'start',
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const defaultLinks: NavLink[] = [
    { label: 'Home', path: '/', icon: <BsPuzzleFill /> },
    { label: 'Gameplay', path: '/gameplay', icon: <IoExtensionPuzzle /> },
    // {
    //   label: 'Why Us',
    //   path: '/why',
    //   icon: <RiPuzzle2Fill className="-scale-y-100 -scale-x-100" />,
    // },
    { label: 'About Us', path: '/about', icon: <FaPuzzlePiece /> },
    {
      label: 'Contact',
      path: '/contact',
      icon: <RiPuzzle2Fill className="-scale-x-100" />,
    },
  ];

  const navLinks = links || defaultLinks;

  const alignmentClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
  };

  const variantClasses =
    variant === 'vertical' ? 'flex-col' : 'flex-col md:flex-row';

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
    <div className="relative w-full">
      {/*hamburger button for mobile*/}
      <button
        className="md:hidden px-4 py-2 text-2xl"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
      >
        HUM
      </button>

      <nav
        aria-label="Primary navigation"
        className={`${navClassName} ${variantClasses} ${alignmentClasses[alignment]} ${
          mobileOpen ? 'flex' : 'hidden'
        } md:flex`}
      >
        {renderedLinks}
      </nav>
    </div>
  );
}

export default Navbar;
