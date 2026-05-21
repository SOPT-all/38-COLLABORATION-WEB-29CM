import Image from '@shared/ui/image/image';
import { cn } from '@shared/utils/cn';

interface ShowcaseCardProps {
  variant: 'big' | 'small';
  imageUrl: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  priority?: boolean;
}

const formatDate = (date: string) => date.replace(/-/g, '.');

const ShowcaseCard = ({
  variant,
  imageUrl,
  title,
  description,
  startDate,
  endDate,
  priority = false,
}: ShowcaseCardProps) => (
  <div
    className={cn(
      'flex w-full flex-col items-start',
      variant === 'big' ? 'gap-4' : 'gap-3',
    )}
  >
    <Image
      src={imageUrl}
      alt={title}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding={priority ? 'sync' : 'async'}
      className={cn(
        'w-full object-cover',
        variant === 'big' ? 'h-[362px]' : 'h-[240px]',
      )}
    />

    <div
      className={cn(
        'flex w-full flex-col pb-[50px]',
        variant === 'big' ? 'gap-[14px]' : 'gap-[16px]',
      )}
    >
      <div className="flex flex-col gap-[6px]">
        <h3
          className={cn(
            'text-black',
            variant === 'big' ? 'text-title-02' : 'text-title-03',
          )}
        >
          {title}
        </h3>

        <p className="text-body-01 line-clamp-2 text-black">{description}</p>
      </div>

      <div className="text-caption-01">
        <time dateTime={startDate}>{formatDate(startDate)}</time>
        {' ~ '}
        <time dateTime={endDate}>{formatDate(endDate).slice(5)}</time>
      </div>
    </div>
  </div>
);

export default ShowcaseCard;
