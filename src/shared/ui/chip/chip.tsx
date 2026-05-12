import { cn } from '@shared/utils/cn';
import ChevronIcon from '@shared/icons/assets/icn-chevron-right-small.svg?react';

interface ChipProps {
  label: string;
  icon?: boolean;
  className?: string;
}

const Chip = ({ label, icon, className }: ChipProps) => {
  return (
    <button
      type="button"
      className={cn('flex items-center justify-center rounded-sm', className)}
    >
      <span>{label}</span>
      {icon && <ChevronIcon />}
    </button>
  );
};

export default Chip;
