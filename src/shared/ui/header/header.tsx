import { useEffect, useState } from 'react';
import type { HTMLAttributes } from 'react';

import { cn } from '@shared/utils/cn';

import HeaderDefault from './header-default';
import HeaderScrolled from './header-scrolled';

type HeaderVariant = 'default' | 'scroll';

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  variant?: HeaderVariant;
}

const SCROLL_ENTER_THRESHOLD = 50;
const SCROLL_EXIT_THRESHOLD = 0;

const Header = ({ variant = 'default', className, ...props }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (variant !== 'scroll') return;

    const handleScroll = () => {
      setScrolled((prevScrolled) => {
        if (prevScrolled) return window.scrollY > SCROLL_EXIT_THRESHOLD;
        return window.scrollY > SCROLL_ENTER_THRESHOLD;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [variant]);

  return (
    <header
      className={cn(
        'sticky inset-x-0 top-0 z-50 bg-white pt-[34px]',
        className,
      )}
      {...props}
    >
      {variant === 'scroll' && scrolled ? (
        <HeaderScrolled />
      ) : (
        <HeaderDefault />
      )}
    </header>
  );
};

export default Header;
