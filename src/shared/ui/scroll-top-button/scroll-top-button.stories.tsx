import type { Meta, StoryObj } from '@storybook/react-vite';

import ScrollTopButton from './scroll-top-button';

const meta = {
  title: 'Shared/ScrollTopButton',
  component: ScrollTopButton,
} satisfies Meta<typeof ScrollTopButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
