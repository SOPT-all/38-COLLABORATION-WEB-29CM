import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@shared/utils/cn';

interface CategoryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  imageUrl: string;
  label: string;
}

const CategoryButton = ({
  imageUrl,
  label,
  className,
  ...props
}: CategoryButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        'relative aspect-2/1 w-full cursor-pointer overflow-hidden',
        'before:pointer-events-none before:absolute before:inset-0 before:bg-black before:opacity-30 before:content-[""]',
        className,
      )}
      {...props}
    >
      <img src={imageUrl} alt="" className="h-full w-full object-cover" />
      <span className="text-heading-02 absolute bottom-4 left-5 text-white">
        {label}
      </span>
    </button>
  );
};

export default CategoryButton;
