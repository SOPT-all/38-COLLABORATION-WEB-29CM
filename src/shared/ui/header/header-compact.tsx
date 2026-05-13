import { SearchIcon, Logo29cmIcon } from '@shared/icons';
import { NAV_ITEMS, ACTION_ITEMS } from './constants';

export default function HeaderCompact() {
  return (
    <div className="flex w-full items-start justify-between px-9 pb-2.5">
      {/* left */}
      <div className="flex items-center gap-6">
        <Logo29cmIcon className="h-[18px] w-[73px]" />

        <nav className="flex items-center gap-[18px]">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              className="text-title-02 border-b-4 border-transparent text-black hover:border-black"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* right */}
      <div className="flex items-center gap-2">
        {ACTION_ITEMS.map(({ label, icon: Icon, ariaLabel }) => (
          <button key={label} aria-label={ariaLabel}>
            <Icon className="h-5 w-5" />
          </button>
        ))}

        <button aria-label="검색">
          <SearchIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
