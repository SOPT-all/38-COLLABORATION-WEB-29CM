import type { ButtonHTMLAttributes } from 'react';

import { ChevronDownIcon } from '@shared/icons';
import { cn } from '@shared/utils/cn';

type MoreLoadButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const MoreLoadButton = ({ className, ...props }: MoreLoadButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        'flex h-12 w-[132px] items-center justify-center gap-1 rounded border border-gray-700 bg-white px-[34px] py-3',
        className,
      )}
      {...props}
    >
      <span className="text-subtitle-01 tracking-[-0.04em] whitespace-nowrap text-black">
        더보기
      </span>
      <ChevronDownIcon className="h-6 w-6" />
    </button>
  );
};

export default MoreLoadButton;
