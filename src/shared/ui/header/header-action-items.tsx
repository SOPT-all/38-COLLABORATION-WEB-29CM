import { useViewerType } from '@shared/auth/viewer-type';

import { ACTION_ITEMS } from './constants';

interface HeaderActionItemsProps {
  iconClassName: string;
  buttonClassName?: string;
  showLabel?: boolean;
}

const HeaderActionItems = ({
  iconClassName,
  buttonClassName = '',
  showLabel = false,
}: HeaderActionItemsProps) => {
  const { viewerType, login } = useViewerType();
  const actionItems = ACTION_ITEMS.filter(
    ({ type }) => viewerType !== 'user' || type !== 'login',
  );

  return (
    <>
      {actionItems.map(({ type, label, icon: Icon, ariaLabel }) => (
        <button
          key={type}
          aria-label={ariaLabel}
          type="button"
          onClick={type === 'login' ? login : undefined}
          className={buttonClassName}
        >
          <Icon className={iconClassName} />
          {showLabel && label}
        </button>
      ))}
    </>
  );
};

export default HeaderActionItems;
