import { useState } from 'react';

import { cn } from '@shared/utils/cn';

import { useNavQuery } from '../../api/nav';
import HomeMegaMenu from '../home-mega-menu/home-mega-menu';

const HomeMenu = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const { data } = useNavQuery();
  const categories = data?.categories ?? [];
  const hoveredCategory = categories.find((c) => c.topCategoryId === hoveredId);
  const hoveredMiddleCategories =
    hoveredCategory && hoveredCategory.middleCategories.length > 0
      ? hoveredCategory.middleCategories
      : null;

  return (
    <div className="relative" onMouseLeave={() => setHoveredId(null)}>
      <nav
        aria-label="카테고리 메뉴"
        className="flex h-[42px] items-end gap-[15px] px-9 pb-[10px]"
      >
        {categories.map((category) => (
          <button
            key={category.topCategoryId}
            type="button"
            className="group flex flex-col items-center"
            onMouseEnter={() => setHoveredId(category.topCategoryId)}
          >
            <span className="text-subtitle-02 tracking-[0.04em] text-black">
              {category.name}
            </span>
            <span
              aria-hidden="true"
              className={cn(
                'invisible h-1 w-full bg-black group-hover:visible',
                hoveredId === category.topCategoryId && 'visible',
              )}
            />
          </button>
        ))}
      </nav>

      {hoveredMiddleCategories && (
        <div className="absolute top-full left-0 z-50 w-full bg-white pb-[29px]">
          <HomeMegaMenu
            middleCategories={hoveredMiddleCategories.slice(0, 5)}
          />
        </div>
      )}
    </div>
  );
};

export default HomeMenu;
