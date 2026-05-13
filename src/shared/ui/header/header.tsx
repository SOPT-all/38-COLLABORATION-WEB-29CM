import { useEffect, useState } from 'react';
import type { HTMLAttributes } from 'react';

import HeaderDefault from './header-default';
import HeaderScrolled from './header-scrolled';

import { cn } from '@shared/utils/cn';

type HeaderVariant = 'default' | 'scroll';

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  variant?: HeaderVariant;
}

const SCROLL_THRESHOLD = 50;

export default function Header({
  variant = 'default',
  className,
  ...props
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (variant !== 'scroll') return;

    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [variant]);

  return (
    <header
      className={cn('fixed inset-x-0 top-0 z-50 bg-white pt-[34px]', className)}
      {...props}
    >
      {variant === 'scroll' && scrolled ? (
        <HeaderScrolled />
      ) : (
        <HeaderDefault />
      )}
    </header>
  );
}
