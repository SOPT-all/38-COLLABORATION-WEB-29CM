import type { Meta, StoryObj } from '@storybook/react-vite';

import { MEGA_MENU_GROUPS } from './constants';
import HomeMegaMenu from './home-mega-menu';

const meta = {
  title: 'Pages/Home/HomeMegaMenu',
  component: HomeMegaMenu,
  args: {
    groups: MEGA_MENU_GROUPS,
  },
} satisfies Meta<typeof HomeMegaMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
