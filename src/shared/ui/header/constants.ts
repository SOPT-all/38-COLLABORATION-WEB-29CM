import {
  UsercircleIcon,
  HeartFilledIcon,
  ShoppingbagIcon,
  LoginIcon,
} from '@shared/icons';

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

export const NAV_ITEMS = [
  'Shopping',
  'Special-Order',
  'Showcase',
  'PT',
  '29Magazine',
] as const;

export const SUB_NAV_ITEMS = ['Event', 'Lookbook'] as const;
