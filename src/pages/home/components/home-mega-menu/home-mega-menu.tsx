import type { MiddleCategory } from '../../types';

interface HomeMegaMenuProps {
  middleCategories: MiddleCategory[];
}

const HomeMegaMenu = ({ middleCategories }: HomeMegaMenuProps) => {
  return (
    <div className="flex">
      {middleCategories.map(({ middleCategoryId, name, subCategories }) => (
        <div
          key={middleCategoryId}
          className="w-[149px] shrink-0 pt-[22px] pr-[50px] pb-[22px] pl-9"
        >
          <span className="text-caption-01 flex items-center px-[10px] py-2 whitespace-nowrap">
            {name}
          </span>
          <ul>
            {subCategories.map(({ subCategoryId, name }) => (
              <li key={subCategoryId}>
                <button
                  type="button"
                  className="text-body-02-regular px-[10px] py-[5px] whitespace-nowrap hover:text-body-02-bold cursor-pointer"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HomeMegaMenu;
