import {
  ProductListItem,
  type ProductListItemProps,
} from '@pages/home/components/product/product-list-item';

import Image from '@shared/ui/image';
import { cn } from '@shared/utils/cn';

interface ProductItemProps {
  imageUrl: string;
  title: string;
  description: string;
  products: ProductListItemProps[];
  className?: string;
}

const ProductItem = ({
  imageUrl,
  title,
  description,
  products,
  className,
}: ProductItemProps) => {
  return (
    <article className={cn('flex flex-col p-5', className)}>
      <Image
        src={imageUrl}
        alt={title}
        className="aspect-square h-full w-full"
      />
      <div className="flex flex-col gap-2 py-2">
        <h3 className="text-title-03">{title}</h3>
        <p className="text-body-01 line-clamp-1">{description}</p>
      </div>

      {products.map((product) => (
        <div
          key={product.productId}
          className="border-t border-gray-500 pt-1.5 pb-3"
        >
          <ProductListItem {...product} />
        </div>
      ))}
    </article>
  );
};

export default ProductItem;
