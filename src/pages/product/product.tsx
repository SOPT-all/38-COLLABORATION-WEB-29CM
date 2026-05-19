import ProductItem from '@pages/home/components/product/product-item';

import Image from '@shared/ui/image/image';

import { PRODUCT_SECTION } from './constants';

const ProductPage = () => {
  const { heroImageUrl, title, description, selections } = PRODUCT_SECTION;

  return (
    <div>
      <div className="px-9 pt-10 pb-7">
        <div className="relative aspect-[1294/509] w-full overflow-hidden">
          <Image src={heroImageUrl} alt={title} className="h-full w-full" />
          <div className="bg-gray-linear-800 absolute bottom-0 h-[210px] w-full" />
          <div className="absolute bottom-8.5 left-8.5 text-white">
            <h1 className="text-title-01">{title}</h1>
            <p className="text-subtitle-01">{description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 px-9 md:grid-cols-3 xl:grid-cols-4">
        {selections.map((selection) => (
          <ProductItem key={selection.selectionId} {...selection} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
