import type { ShortCut } from '@pages/home/types';

import CategoryButton from './category-button';

interface CategorySectionProps {
  categories: ShortCut[];
}

const CategorySection = ({ categories }: CategorySectionProps) => {
  return (
    <section className="grid grid-cols-6 gap-x-4.5 gap-y-5 px-9.5 py-18">
      {categories.map((category) => (
        <CategoryButton
          key={category.categoryId}
          imageUrl={category.imageUrl}
          label={category.name}
        />
      ))}
    </section>
  );
};

export default CategorySection;
