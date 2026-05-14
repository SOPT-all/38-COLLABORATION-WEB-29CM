import { cn } from '@shared/utils/cn';
import Image from '@shared/ui/image';

interface ShowcaseCardProps {
  variant: 'big' | 'small';
  imageUrl: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

const convertDateRange = (startDate: string, endDate: string) => {
  const convertDateFormat = (d: string) => d.replace(/-/g, '.');
  return `${convertDateFormat(startDate)} ~ ${convertDateFormat(endDate).slice(5)}`;
};

export const ShowcaseCard = ({
  variant,
  imageUrl,
  title,
  description,
  startDate,
  endDate,
}: ShowcaseCardProps) => (
  <div
    className={cn(
      'flex shrink-0 flex-col items-start',
      variant === 'big' ? 'w-[636px] gap-4' : 'w-[416px] gap-3',
    )}
  >
    <Image
      src={imageUrl}
      alt={title}
      className={cn('w-full', variant === 'big' ? 'h-[362px]' : 'h-[240px]')}
    />
    <div className="flex w-full flex-col pb-[50px]">
      <h3
        className={cn(
          'text-black',
          variant === 'big' ? 'text-title-02' : 'text-title-03',
        )}
      >
        {title}
      </h3>
      <p className="text-body-01 mt-[6px] line-clamp-2 text-black">
        {description}
      </p>
      <time
        className={cn(
          'text-caption-01',
          variant === 'big' ? 'mt-[14px]' : 'mt-[16px]',
        )}
      >
        {convertDateRange(startDate, endDate)}
      </time>
    </div>
  </div>
);
