import Chip from '@shared/ui/chip/chip';
import Image from '@shared/ui/image';

interface HomeProductListProps {
  brand: string;
  title: string;
  price: number;
  discountRate: number;
  badges: string[];
  imageUrl: string;
}

const HomeProductList = ({
  brand,
  title,
  price,
  discountRate,
  badges,
  imageUrl,
}: HomeProductListProps) => {
  return (
    <div className="flex gap-3">
      <Image src={imageUrl} alt={title} className="h-16 w-16 rounded-sm" />
      <div className="flex flex-col max-w-[222px]">
        <p className="text-caption-02-semibold my-0.5">{brand}</p>
        <h3 className="text-body-02-regular mb-0.5 line-clamp-1">{title}</h3>
        <div className="text-body-02-bold flex gap-1 mb-1">
          <p className="text-red">{discountRate}%</p>
          <p>{price.toLocaleString()}</p>
        </div>
        <div className="flex gap-[5px] overflow-hidden">
          {badges.map((b, i) => (
            <div key={i} className="shrink-0">
              <Chip label={b} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProductList;
