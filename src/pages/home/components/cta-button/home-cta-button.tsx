import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@shared/utils/cn';

interface HomeCtaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const HomeCtaButton = ({
  children,
  className,
  type = 'button',
  ...props
}: HomeCtaButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        'flex h-15 w-full cursor-pointer items-center justify-center border border-white bg-black text-[18px] leading-[1.4] font-normal text-white disabled:cursor-not-allowed',
        'hover:bg-gray-700 hover:text-white',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default HomeCtaButton;
