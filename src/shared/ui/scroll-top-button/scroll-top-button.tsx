import type { ButtonHTMLAttributes } from 'react';

import { ChevronUpIcon } from '@shared/icons';
import { cn } from '@shared/utils/cn';

type ScrollTopButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'onClick'
>;

const ScrollTopButton = ({
  className,
  type = 'button',
  ...props
}: ScrollTopButtonProps) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type={type}
      aria-label="페이지 최상단으로 이동"
      className={cn(
        'flex h-15 w-15 cursor-pointer items-center justify-center rounded-full border-[0.4px] border-black bg-white text-black',
        'transition-colors duration-200 hover:bg-black hover:text-white',
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      <ChevronUpIcon aria-hidden="true" />
    </button>
  );
};

export default ScrollTopButton;
