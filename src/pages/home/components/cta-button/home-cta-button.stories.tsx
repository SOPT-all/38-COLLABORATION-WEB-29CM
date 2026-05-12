import type { Meta, StoryObj } from '@storybook/react-vite';

import HomeCtaButton from './home-cta-button';

const meta = {
  title: 'Pages/Home/HomeCtaButton',
  component: HomeCtaButton,
  args: {
    children: '상품 더보기',
  },
} satisfies Meta<typeof HomeCtaButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
