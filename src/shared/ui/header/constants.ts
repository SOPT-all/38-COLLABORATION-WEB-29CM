import {
  UsercircleIcon,
  HeartFilledIcon,
  ShoppingbagIcon,
  LoginIcon,
} from '@shared/icons';

import { ROUTE_PATH } from '@app/router/path';

export interface NavItem {
  label: string;
  to?: string;
}

export const ACTION_ITEMS = [
  {
    type: 'mypage',
    label: 'MY PAGE',
    icon: UsercircleIcon,
    ariaLabel: '마이 페이지',
  },
  {
    type: 'mylike',
    label: 'MY LIKE',
    icon: HeartFilledIcon,
    ariaLabel: '좋아요 누른 상품',
  },
  {
    type: 'shoppingbag',
    label: 'SHOPPING BAG',
    icon: ShoppingbagIcon,
    ariaLabel: '장바구니',
  },
  {
    type: 'login',
    label: 'LOGIN',
    icon: LoginIcon,
    ariaLabel: '로그인',
  },
] as const;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Shopping' },
  { label: 'Special-Order' },
  { label: 'Showcase', to: ROUTE_PATH.SHOWCASE },
  { label: 'PT' },
  { label: '29Magazine' },
];

export const SUB_NAV_ITEMS: NavItem[] = [
  { label: 'Event' },
  { label: 'Lookbook' },
];
