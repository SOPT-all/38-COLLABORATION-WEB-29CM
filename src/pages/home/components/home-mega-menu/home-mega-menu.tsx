import type { MegaMenuGroup } from './types';

interface HomeMegaMenuProps {
  groups: MegaMenuGroup[];
}

const HomeMegaMenu = ({ groups }: HomeMegaMenuProps) => {
  return (
    <div className="flex pt-[22px] pl-9">
      {[...groups]
        .sort((a, b) => a.displayOrder - b.displayOrder)
        .map((group) => (
          <div key={group.groupId} className="pr-[50px]">
            <p className="text-caption-01 flex items-center px-[10px] py-2">
              {group.name}
            </p>
            <ul>
              {[...group.items]
                .sort((a, b) => a.displayOrder - b.displayOrder)
                .map((item) => (
                  <li key={item.categoryId}>
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
