import { SearchIcon, Logo29cmIcon } from '@shared/icons';
import { NAV_ITEMS, SUB_NAV_ITEMS, ACTION_ITEMS } from './constants';

export default function HeaderDefault() {
  return (
    <div className="flex items-start justify-between px-9">
      {/* left */}
      <div className="flex flex-1 flex-col items-start gap-8 pb-2.5">
        <Logo29cmIcon className="h-[26px] w-[103px]" />

        <nav className="flex items-center gap-2.5 px-0.5">
          <div className="flex items-start gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href="#"
                className="text-heading-01 border-b-4 border-transparent text-black hover:border-black"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-[15px]">
            <span className="h-4 w-0.5 bg-gray-500" />

            {SUB_NAV_ITEMS.map((item) => (
              <a
                key={item}
                href="#"
                className="text-subtitle-02 hover:underline"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* right */}
      <div className="flex flex-col items-end gap-4">
        <div className="mx-0.5 flex items-center gap-3.5">
          {ACTION_ITEMS.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="caption-02-regular flex items-center gap-0.5 text-black"
            >
              <Icon className="h-[14px] w-[14px]" />
              {label}
            </button>
          ))}
        </div>

        <button aria-label="검색" className="self-end">
          <SearchIcon className="h-10 w-10" />
        </button>
      </div>
    </div>
  );
}
