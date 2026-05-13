import CategoryButton from './category-button';

interface Category {
  name: string;
  imageUrl: string;
  categoryId: number;
}

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection = ({ categories }: CategorySectionProps) => {
  return (
    <section className="grid grid-cols-6 gap-4.5 px-9.5 py-18">
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
