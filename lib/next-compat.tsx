import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

export function Link({ href, children, className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <RouterLink to={href} className={className} {...props}>
      {children}
    </RouterLink>
  );
}

export function usePathname() {
  const { pathname } = useLocation();
  return pathname;
}
