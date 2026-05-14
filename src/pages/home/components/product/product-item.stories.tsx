import type { Meta, StoryObj } from '@storybook/react-vite';

import ProductItem from './product-item';

const meta = {
  title: 'Home/product/product-item',
  component: ProductItem,
  args: {
    className: 'w-[384px]',
    imageUrl: 'https://picsum.photos/400',
    title: '왕수빈이 고른 노티아',
    description: '편안함 속에 깃든 노티아의 스타일을 만나요.',
    products: [
      {
        productId: 1,
        imageUrl: 'https://picsum.photos/200?1',
        brandName: '노티아',
        name: 'COTTON TWO TUCK PANTS - BLACK',
        saleRate: 29,
        price: 83250,
        tags: ['무료배송', '조건부 무료배송', '단독'],
        likeCount: 35000,
        isLiked: false,
      },
      {
        productId: 2,
        imageUrl: 'https://picsum.photos/200?2',
        brandName: '노티아',
        name: 'SILKET COTTON T-SHIRTS - BROWN',
        saleRate: 28,
        price: 31070,
        tags: ['무료배송', '조건부 무료배송', '단독'],
        likeCount: 73000,
        isLiked: true,
      },
    ],
  },
} satisfies Meta<typeof ProductItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
