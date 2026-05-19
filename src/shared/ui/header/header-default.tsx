import { Link } from 'react-router';

import { ROUTE_PATH } from '@app/router/path';

import { useViewerType } from '@shared/auth/viewer-type';
import { Logo29cmIcon, SearchIcon } from '@shared/icons';

import { ACTION_ITEMS, NAV_ITEMS, SUB_NAV_ITEMS } from './constants';

const HeaderDefault = () => {
  const { viewerType, login } = useViewerType();
  const actionItems = ACTION_ITEMS.filter(
    ({ type }) => viewerType !== 'user' || type !== 'login',
  );

  return (
    <div className="flex items-start justify-between px-9">
      {/* left */}
      <div className="flex flex-1 flex-col items-start gap-8 pb-2.5">
        <Link to={ROUTE_PATH.HOME} aria-label="홈으로 이동">
          <Logo29cmIcon />
        </Link>

        <nav className="flex items-center gap-2.5 px-0.5">
          <div className="flex items-start gap-6">
            {NAV_ITEMS.map(({ label, to }) => (
              <Link
                key={label}
                to={to ?? '#'}
                className="text-heading-01 border-b-4 border-transparent whitespace-nowrap text-black hover:border-black"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-[15px]">
            <span aria-hidden="true" className="h-4 w-0.5 bg-gray-500" />

            {SUB_NAV_ITEMS.map(({ label, to }) => (
              <Link
                key={label}
                to={to ?? '#'}
                className="text-subtitle-03-prompt hover:underline"
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* right */}
      <div className="flex flex-col items-end gap-4">
        <div className="flex items-center gap-3.5 px-0.5">
          {actionItems.map(({ type, label, icon: Icon, ariaLabel }) => (
            <button
              key={label}
              aria-label={ariaLabel}
              type="button"
              onClick={type === 'login' ? login : undefined}
              className="text-caption-02-regular flex items-center gap-0.5 whitespace-nowrap text-black"
            >
              <Icon className="h-[14px] w-[14px]" />
              {label}
            </button>
          ))}
        </div>

        <button aria-label="검색" type="button">
          <SearchIcon className="h-10 w-10" />
        </button>
      </div>
    </div>
  );
};

export default HeaderDefault;
