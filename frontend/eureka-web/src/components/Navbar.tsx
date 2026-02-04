import Link from './Link';

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
                    containerClassName = '',
                    navClassName = 'w-full inline-flex items-center gap-2 h-16',
                    linkClassName = 'mx-8 text-gray-400',
                    activeLinkClassName = 'font-bold text-white',
                    variant = 'horizontal',
                    alignment = 'start'
                }: NavbarProps) {
    const defaultLinks: NavLink[] = [
        { label: 'Home', path: '/' },
        { label: 'Store', path: '/store' },
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

    const variantClasses = variant === 'vertical' ? 'flex-col' : 'flex-row';

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
        <div>
            <nav className={`${navClassName} ${variantClasses} ${alignmentClasses[alignment]}`}>
                {renderedLinks}
            </nav>
        </div>
    );
}

export default Navbar;