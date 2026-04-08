import type { ReactNode } from 'react';
import classNames from 'classnames';
import { NavLink, useNavigate } from 'react-router-dom';

interface LinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

function Link({ to, children, className, activeClassName }: LinkProps) {
  const navigate = useNavigate();

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames('text-black', className, isActive && activeClassName)
      }
      onClick={(e) => {
        if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
          e.preventDefault();
          navigate(to);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      {children}
    </NavLink>
  );
}

export default Link;
