import type { Meta, StoryObj } from '@storybook/react-vite';

import { CATEGORIES } from './constants';
import HomeMenu from './home-menu';

const meta = {
  title: 'Pages/Home/HomeMenu',
  component: HomeMenu,
  args: {
    categories: CATEGORIES,
  },
} satisfies Meta<typeof HomeMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
