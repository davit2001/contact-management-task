import { Link } from '@tanstack/react-router';
import { FC, PropsWithChildren } from 'react';

interface NavigationItemProps {
  className?: string;
  to: string;
  search?: (prev: Record<string, string>) => Record<string, string>;
}

const NavigationItem: FC<PropsWithChildren<NavigationItemProps>> = ({ className = '', to, ...props}) => (
  <Link to={to} {...props}>
    {({ isActive }) => (
      <span className={`rounded-md text-sm md:text-base font-medium tracking-wide py-2 px-3 hover:text-white ${isActive ? 'bg-blue text-white hover:bg-blue': 'text-black hover:bg-gray-300'} ${className}`}>
        {props.children}
      </span>
    )}
  </Link>
);

export default NavigationItem;