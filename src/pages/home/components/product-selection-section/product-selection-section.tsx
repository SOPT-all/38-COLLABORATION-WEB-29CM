import type { Section } from '@pages/home/types';

import Image from '@shared/ui/image/image';

import HomeCtaButton from '../cta-button/home-cta-button';
import ProductItem from '../product/product-item';

interface ProductSelectionSectionProps {
  section: Section;
  onToggleLike?: (productId: number) => void;
  onClickMore?: () => void;
}

const ProductSelectionSection = ({
  section: { heroImageUrl, title, description, selections },
  onToggleLike,
  onClickMore,
}: ProductSelectionSectionProps) => {
  return (
    <section className="flex gap-6">
      <div className="sticky top-21 aspect-578/680 h-[calc(100vh-84px)] shrink-0 self-start">
        <div className="relative h-full w-full overflow-hidden">
          <Image src={heroImageUrl} alt={title} className="h-full w-full" />
          <div className="bg-gray-linear-800 absolute bottom-0 h-[210px] w-full" />
          <div className="absolute bottom-8.5 left-8.5 text-white">
            <h2 className="text-title-01">{title}</h2>
            <p className="text-subtitle-01">{description}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-9.5">
        <div className="grid grid-cols-2 gap-y-12.5">
          {selections.map((selection) => (
            <ProductItem
              key={selection.selectionId}
              selectionId={selection.selectionId}
              imageUrl={selection.imageUrl}
              title={selection.title}
              description={selection.description}
              products={selection.products}
              onToggleLike={onToggleLike}
            />
          ))}
        </div>

        <div className="px-7.25 pb-15">
          <HomeCtaButton onClick={onClickMore}>상품 더보기</HomeCtaButton>
        </div>
      </div>
    </section>
  );
};

export default ProductSelectionSection;
