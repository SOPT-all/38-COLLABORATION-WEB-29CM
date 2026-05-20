import type { ImgHTMLAttributes } from 'react';
import { useState } from 'react';

import { cn } from '@shared/utils/cn';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const Image = ({
  src,
  alt,
  className,
  loading = 'lazy',
  ...props
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {isLoading && <div className="animate-skeleton-wave absolute inset-0" />}

      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={handleLoad}
        className={cn(
          'h-full w-full object-cover',
          isLoading ? 'invisible' : '',
        )}
        {...props}
      />
    </div>
  );
};

export default Image;
