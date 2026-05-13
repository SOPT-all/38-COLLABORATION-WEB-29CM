import type { Meta, StoryObj } from '@storybook/react-vite';
import HomeProductList from './home-product-list';

const meta = {
  title: 'Home/home-product/home-product-list',
  component: HomeProductList,
  args: {
    brand:"으음키임",
    title:"[12차리오더,숏기장] 시그니쳐 세미 와이드 ",
    price:93670,
    discountRate:19,
    badges:['쿠폰', '무료배송', '단독', '무료배송'],
    imageUrl:"https://picsum.photos/200"
  },
} satisfies Meta<typeof HomeProductList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HomeProductListStory: Story = {
  render: () => <HomeProductList {...meta.args} />,
};
