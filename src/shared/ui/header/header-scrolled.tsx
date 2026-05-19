import { Link } from 'react-router';

import { ROUTE_PATH } from '@app/router/path';

import { useViewerType } from '@shared/auth/viewer-type';
import { Logo29cmIcon, SearchIcon } from '@shared/icons';

import { ACTION_ITEMS, NAV_ITEMS } from './constants';

const HeaderScrolled = () => {
  const { viewerType, login } = useViewerType();
  const actionItems = ACTION_ITEMS.filter(
    ({ type }) => viewerType !== 'user' || type !== 'login',
  );

  return (
    <div className="flex w-full items-start justify-between px-9 pb-2.5">
      {/* left */}
      <div className="flex items-center gap-6">
        <Link to={ROUTE_PATH.HOME} aria-label="홈으로 이동">
          <Logo29cmIcon className="h-[18px] w-[73px]" />
        </Link>

        <nav className="flex items-center gap-[18px]">
          {NAV_ITEMS.map(({ label, to }) => (
            <Link
              key={label}
              to={to ?? '#'}
              className="text-title-02 border-b-4 border-transparent whitespace-nowrap text-black hover:border-black"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* right */}
      <div className="flex items-center gap-2">
        {actionItems.map(({ type, label, icon: Icon, ariaLabel }) => (
          <button
            key={label}
            aria-label={ariaLabel}
            type="button"
            onClick={type === 'login' ? login : undefined}
          >
            <Icon className="h-5 w-5" />
          </button>
        ))}

        <button aria-label="검색" type="button">
          <SearchIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default HeaderScrolled;
