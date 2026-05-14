import type { Category } from './types';

interface HomeMenuProps {
  categories: Category[];
}

const HomeMenu = ({ categories }: HomeMenuProps) => {
  return (
    <nav className="flex h-[42px] items-end gap-[10px] px-9 pb-[10px]">
      {categories
        .map((category) => (
          <button
            key={category.topCategoryId}
            type="button"
            className="group flex flex-col items-center"
          >
            <span className="text-[12px] font-bold leading-[1.4] tracking-[0.04em] text-black">
              {category.name}
            </span>
            <span
              aria-hidden="true"
              className="invisible h-1 w-full bg-black group-hover:visible"
            />
          </button>
        ))}
    </nav>
  );
};

export default HomeMenu;
