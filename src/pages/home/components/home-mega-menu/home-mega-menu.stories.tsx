import type { Meta, StoryObj } from '@storybook/react-vite';

import { MIDDLE_CATEGORIES } from './constants';
import HomeMegaMenu from './home-mega-menu';

const meta = {
  title: 'Pages/Home/HomeMegaMenu',
  component: HomeMegaMenu,
  args: {
    middleCategories: MIDDLE_CATEGORIES,
  },
} satisfies Meta<typeof HomeMegaMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
