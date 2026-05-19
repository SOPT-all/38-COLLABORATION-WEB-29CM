import type { Product } from '@pages/home/types';

import { HeartBlankedIcon, HeartFilledIcon } from '@shared/icons';
import Chip from '@shared/ui/chip/chip';
import Image from '@shared/ui/image/image';
import { formatCompactCount } from '@shared/utils/format-count';

interface ProductListItemProps extends Product {
  onToggleLike?: () => void;
}

const ProductListItem = ({
  imageUrl,
  brandName,
  name,
  saleRate,
  price,
  tags,
  likeCount,
  isLiked,
  onToggleLike,
}: ProductListItemProps) => {
  const HeartIcon = isLiked ? HeartFilledIcon : HeartBlankedIcon;

  return (
    <div className="flex gap-3 pr-2.5">
      <Image
        src={imageUrl}
        alt={name}
        className="h-16 w-16 shrink-0 rounded-sm"
      />
      <div className="flex w-full flex-col gap-0.5">
        <span className="text-caption-02-semibold">{brandName}</span>
        <p className="text-body-02-regular line-clamp-1">{name}</p>
        <div className="text-body-02-bold mb-0.5 flex gap-1">
          {saleRate > 0 && <span className="text-red">{saleRate}%</span>}
          <span>{price.toLocaleString('ko-KR')}</span>
        </div>
        <div className="flex gap-[5px] overflow-hidden">
          {tags.map((label) => (
            <div key={label} className="shrink-0">
              <Chip label={label} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button
          type="button"
          onClick={onToggleLike}
          aria-label={isLiked ? '좋아요 취소' : '좋아요'}
          aria-pressed={isLiked}
          className="cursor-pointer"
        >
          <HeartIcon
            className={`h-5 w-5 ${isLiked ? 'text-red' : 'text-gray-700'}`}
          />
        </button>
        <span className="text-body-02-regular text-gray-700">
          {formatCompactCount(likeCount)}
        </span>
      </div>
    </div>
  );
};

export default ProductListItem;
