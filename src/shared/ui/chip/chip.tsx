import { ChevronRightSmallIcon } from '@shared/icons';
import { cva } from 'class-variance-authority';

const chipVariants = cva(
  'flex items-center rounded-sm', // 공통 클래스
  {
    variants: {
      variant: {
        chip: 'justify-center bg-gray-200 px-2 py-px text-caption-02-semibold text-gray-800',
        cta: 'justify-between bg-black px-3 h-6 text-body-01 text-white gap-2.5',
      },
    },
    defaultVariants: {
      variant: 'chip',
    },
  },
);

interface ChipProps {
  label: string;
  icon?: boolean;
  variant?: 'chip' | 'cta';
}

const Chip = ({ label, icon, variant }: ChipProps) => {
  return (
    <button type="button" className={chipVariants({ variant })}>
      <span>{label}</span>
      {icon && <ChevronRightSmallIcon />}
    </button>
  );
};

export default Chip;
