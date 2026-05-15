import type { MiddleCategory } from './types';

interface HomeMegaMenuProps {
  middleCategories: MiddleCategory[];
}

const HomeMegaMenu = ({ middleCategories }: HomeMegaMenuProps) => {
  return (
    <div className="flex pt-[22px] pl-9">
      {middleCategories.map((group) => (
        <div key={group.middleCategoryId} className="w-[149px]">
          <p className="text-caption-01 flex items-center px-[10px] py-2">
            {group.name}
          </p>
          <ul>
            {group.subCategories.map((item) => (
              <li key={item.subCategoryId}>
                <button
                  type="button"
                  className="text-body-02-regular flex items-center whitespace-nowrap px-[10px] py-[5px]"
                >
                  {item.name}
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
