import { useEffect, useState } from 'react';

import { ChevronRightIcon } from '@shared/icons';
import { cn } from '@shared/utils/cn';

interface CarouselImage {
  carouselId: number;
  imageUrl: string;
  altText: string;
}

interface BannerCarouselProps {
  images: CarouselImage[];
  interval?: number;
  className?: string;
}

const BannerCarousel = ({
  images,
  interval = 5000,
  className,
}: BannerCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % images.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [images.length, interval, isPaused]);

  if (images.length === 0) return null;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="홈 배너"
      className={cn(
        'relative aspect-20/9 w-full overflow-hidden bg-gray-200',
        className,
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex h-full w-full transition-transform duration-700 ease-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={image.carouselId}
            src={image.imageUrl}
            alt={image.altText}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
            className="h-full min-w-full shrink-0 object-cover"
          />
        ))}
      </div>

      <div className="text-title-03 bg-black-opacity-10 absolute right-10 bottom-7.25 flex items-center justify-center gap-4 rounded-full py-2 pr-2.5 pl-4.5 text-white">
        <div className="flex items-center gap-2.5">
          <span>{currentIndex + 1}</span>
          <span className="h-3.25 w-0.5 bg-white" />
          <span>{images.length}</span>
        </div>

        <button
          type="button"
          className="flex cursor-pointer items-center gap-1"
        >
          <span>전체보기</span>
          <ChevronRightIcon aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};

export default BannerCarousel;
