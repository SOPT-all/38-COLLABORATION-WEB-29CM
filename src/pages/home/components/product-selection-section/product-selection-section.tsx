import Image from '@shared/ui/image';

import ProductItem from '../product/product-item';
import type { Product } from '../product/types';

interface Selection {
  selectionId: number;
  imageUrl: string;
  title: string;
  description: string;
  products: Product[];
}

export interface ProductSelectionSectionData {
  sectionId: number;
  heroImageUrl: string;
  title: string;
  description: string;
  selections: Selection[];
}

interface ProductSelectionSectionProps {
  section: ProductSelectionSectionData;
}

const ProductSelectionSection = ({
  section: { heroImageUrl, title, description, selections },
}: ProductSelectionSectionProps) => {
  return (
    <section className="flex gap-6">
      <div className="sticky top-21 aspect-578/767 h-[calc(100vh-84px)] shrink-0 self-start">
        <div className="relative h-full w-full overflow-hidden">
          <Image src={heroImageUrl} alt={title} />
          <div className="absolute bottom-8.5 left-8.5 text-white">
            <h2 className="text-title-01">{title}</h2>
            <p className="text-subtitle-01">{description}</p>
          </div>
        </div>
      </div>

      <div className="grid flex-1 grid-cols-2 gap-y-12.5">
        {selections.map((selection) => (
          <ProductItem
            key={selection.selectionId}
            imageUrl={selection.imageUrl}
            title={selection.title}
            description={selection.description}
            products={selection.products}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSelectionSection;
