import type { ReactNode, MouseEvent } from 'react';
import classNames from 'classnames';
import useNavigation from '../../hooks/useNavigation.ts';

interface LinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

function Link({ to, children, className, activeClassName }: LinkProps) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    'text-black',
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
