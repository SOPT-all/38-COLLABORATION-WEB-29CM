import type { Meta, StoryObj } from '@storybook/react-vite';

import Chip from './chip';

const meta = {
  title: 'Shared/Chip',
  component: Chip,
  args: {
    label: '쿠폰',
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ChipButton: Story = {
  args: {
    label: '쿠폰',
    className: 'bg-gray-200 px-2 py-px text-caption-02-semibold text-gray-800',
  },
};

export const CtaButton: Story = {
  args: {
    label: 'FAQ',
    icon: true,
    className:
      'justify-between bg-black px-3 h-6 text-body-01 text-white gap-2.5',
  },
};
