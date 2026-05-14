import type { ButtonHTMLAttributes } from 'react';

import { ChevronRightIcon } from '@shared/icons';
import { cn } from '@shared/utils/cn';

type BtnMoreLoadProps = ButtonHTMLAttributes<HTMLButtonElement>;

const BtnMoreLoad = ({ className, ...props }: BtnMoreLoadProps) => {
  return (
    <button
      type="button"
      className={cn(
        'flex h-[48px] w-[132px] items-center justify-center gap-[12px] rounded-[4px] border border-[#B9B9B9] bg-white px-[34px] py-[12px]',
        className,
      )}
      {...props}
    >
      <span className="text-[14px] leading-[1.4] font-bold tracking-[-0.04em] whitespace-nowrap text-black">
        더보기
      </span>
      <ChevronRightIcon className="h-[12px] w-[8px] rotate-90" />
    </button>
  );
};

export default BtnMoreLoad;
