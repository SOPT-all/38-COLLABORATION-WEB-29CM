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
}: ProductListItemProps) => {
  const HeartIcon = isLiked ? HeartFilledIcon : HeartBlankedIcon;

  return (
    <div className="flex gap-3">
      <Image src={imageUrl} alt={name} className="h-16 w-16 rounded-sm" />
      <div className="flex max-w-[222px] flex-col">
        <p className="text-caption-02-semibold my-0.5">{brandName}</p>
        <h3 className="text-body-02-regular mb-0.5 line-clamp-1">{name}</h3>
        <div className="text-body-02-bold mb-1 flex gap-1">
          <p className="text-red">{saleRate}%</p>
          <p>{price.toLocaleString()}</p>
        </div>
        <div className="flex gap-[5px] overflow-hidden">
          {tags.map((label, i) => (
            <div key={i} className="shrink-0">
              <Chip label={label} />
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        aria-label={isLiked ? '좋아요 취소' : '좋아요'}
        aria-pressed={isLiked}
        className="flex cursor-pointer flex-col items-center justify-center"
      >
        <HeartIcon className="h-5 w-5 text-gray-700" />
        <p className="text-body-02-regular text-gray-700">
          {new Intl.NumberFormat('en', {
            notation: 'compact',
            maximumFractionDigits: 0,
          }).format(likeCount)}
        </p>
      </button>
    </div>
  );
};

export default ProductListItem;
