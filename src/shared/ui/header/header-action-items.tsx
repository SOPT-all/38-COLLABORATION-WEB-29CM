import { useViewerType } from '@shared/auth/viewer-type';

import { ACTION_ITEMS } from './constants';
import type { ActionItem } from './constants';

interface HeaderActionItemsProps {
  iconClassName: string;
  buttonClassName?: string;
  showLabel?: boolean;
}

const isLoginActionItem = (
  actionItem: ActionItem,
): actionItem is Extract<ActionItem, { type: 'login' }> => {
  return actionItem.type === 'login';
};

const HeaderActionItems = ({
  iconClassName,
  buttonClassName = '',
  showLabel = false,
}: HeaderActionItemsProps) => {
  const { viewerType, login, logout } = useViewerType();
  const isLoggedIn = viewerType === 'user';
  const handleLoginClick = isLoggedIn ? logout : login;

  return (
    <>
      {ACTION_ITEMS.map((actionItem) => {
        const { type, label, icon: Icon, ariaLabel } = actionItem;
        const isLoginAction = isLoginActionItem(actionItem);
        const actionLabel =
          isLoginAction && isLoggedIn ? actionItem.loggedIn.label : label;
        const actionAriaLabel =
          isLoginAction && isLoggedIn
            ? actionItem.loggedIn.ariaLabel
            : ariaLabel;
        return (
          <button
            key={type}
            aria-label={actionAriaLabel}
            type="button"
            onClick={isLoginAction ? handleLoginClick : undefined}
            className={buttonClassName}
          >
            <Icon className={iconClassName} />
            {showLabel && actionLabel}
          </button>
        );
      })}
    </>
  );
};

export default HeaderActionItems;
