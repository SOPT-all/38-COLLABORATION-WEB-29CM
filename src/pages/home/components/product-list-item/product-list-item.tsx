import { HeartBlankedIcon, HeartFilledIcon } from '@shared/icons';
import Chip from '@shared/ui/chip/chip';
import Image from '@shared/ui/image';

interface ProductListItemProps {
  productId: number;
  imageUrl: string;
  brandName: string;
  name: string;
  saleRate: number;
  price: number;
  tags: string[];
  likeCount: number;
  isLiked: boolean;
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
    <div className="flex gap-3">
      <Image src={imageUrl} alt={name} className="h-16 w-16 rounded-sm" />
      <div className="flex max-w-[222px] flex-col gap-0.5">
        <span className="text-caption-02-semibold">{brandName}</span>
        <p className="text-body-02-regular line-clamp-1">{name}</p>
        <div className="text-body-02-bold mb-0.5 flex gap-1">
          <span className="text-red">{saleRate}%</span>
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
          {new Intl.NumberFormat('en', {
            notation: 'compact',
            maximumFractionDigits: 0,
          }).format(likeCount)}
        </span>
      </div>
    </div>
  );
};

export default ProductListItem;
