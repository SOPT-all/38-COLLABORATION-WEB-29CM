import type { Meta, StoryObj } from '@storybook/react-vite';

import MoreLoadButton from './more-load-button';

const meta = {
  title: 'Pages/Home/MoreLoadButton',
  component: MoreLoadButton,
} satisfies Meta<typeof MoreLoadButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
