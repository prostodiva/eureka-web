import Link from './Link';
import {useState} from "react";

interface NavLink {
    label: string;
    path: string;
}

interface NavbarProps {
    links?: NavLink[];
    containerClassName?: string;
    navClassName?: string;
    linkClassName?: string;
    activeLinkClassName?: string;
    logo?: React.ReactNode;
    variant?: 'horizontal' | 'vertical';
    alignment?: 'start' | 'center' | 'end' | 'between';
}

function Navbar({
                    links,
                    navClassName = 'w-full flex flex-col md:flex-row items-center gap-2 h-auto md:h-16',
                    linkClassName = 'my-2 md:mx-8 text-gray-400',
                    activeLinkClassName = 'font-bold text-white',
                    variant = 'horizontal',
                    alignment = 'start'
                }: NavbarProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const defaultLinks: NavLink[] = [
        { label: 'Home', path: '/' },
        { label: 'Store', path: '/storePage' },
        { label: 'About Us', path: '/about' },
        { label: 'Support', path: '/support' },
    ];

    const navLinks = links || defaultLinks;

    const alignmentClasses = {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between'
    };

    const variantClasses = variant === 'vertical' ? 'flex-col' : 'flex-col md:flex-row';

    const renderedLinks = navLinks.map((link) => (
        <Link
            key={link.label}
            to={link.path}
            className={linkClassName}
            activeClassName={activeLinkClassName}
        >
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