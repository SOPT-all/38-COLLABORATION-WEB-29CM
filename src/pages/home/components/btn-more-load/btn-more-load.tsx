import type { ButtonHTMLAttributes } from 'react';

import { ChevronDownIcon } from '@shared/icons';
import { cn } from '@shared/utils/cn';

type BtnMoreLoadProps = ButtonHTMLAttributes<HTMLButtonElement>;

const BtnMoreLoad = ({ className, ...props }: BtnMoreLoadProps) => {
  return (
    <button
      type="button"
      className={cn(
        'flex h-[48px] w-[132px] items-center justify-center gap-[4px] rounded-[4px] border border-gray-700 bg-white px-[34px] py-[12px]',
        className,
      )}
      {...props}
    >
      <span className="text-subtitle-01 tracking-[-0.04em] whitespace-nowrap text-black">
        더보기
      </span>
      <ChevronDownIcon className="h-[24px] w-[24px]" />
    </button>
  );
};

export default BtnMoreLoad;
