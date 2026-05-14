import type { Meta, StoryObj } from '@storybook/react-vite';

import ProductListItem from './product-list-item';

const meta = {
  title: 'Home/product-list-item',
  component: ProductListItem,
  args: {
    productId: 0,
    imageUrl: 'https://picsum.photos/200',
    brandName: '으음키임',
    name: '[12차리오더,숏기장] 시그니쳐 세미 와이드 데님 팬츠 테스트 1234 가나다...',
    saleRate: 19,
    price: 93670,
    tags: ['쿠폰', '무료배송', '단독', '무료배송'],
    likeCount: 35000,
    isLiked: false,
  },
} satisfies Meta<typeof ProductListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Liked: Story = {
  args: {
    isLiked: true,
  },
};
