import type { Meta, StoryObj } from '@storybook/react-vite';

import BtnMoreLoad from './btn-more-load';

const meta = {
  title: 'Pages/Home/BtnMoreLoad',
  component: BtnMoreLoad,
} satisfies Meta<typeof BtnMoreLoad>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
