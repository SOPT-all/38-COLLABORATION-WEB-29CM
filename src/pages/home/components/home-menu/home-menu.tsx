import type { Category } from './types';

interface HomeMenuProps {
  categories: Category[];
}

const HomeMenu = ({ categories }: HomeMenuProps) => {
  return (
    <nav aria-label="카테고리 메뉴" className="flex h-[42px] items-end gap-[15px] px-9 pb-[10px]">
      {categories
        .map((category) => (
          <button
            key={category.topCategoryId}
            type="button"
            className="group flex flex-col items-center"
          >
            <span className="text-subtitle-02 tracking-[0.04em] text-black">
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
