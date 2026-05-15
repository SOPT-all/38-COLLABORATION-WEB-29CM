import type { Meta, StoryObj } from '@storybook/react-vite';

import Image from './image';

const meta = {
  title: 'Shared/ui/Image',
  component: Image,
  args: {
    src: 'https://picsum.photos/400/400',
    alt: 'Test Image',
    className: 'h-36 w-36',
  },
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
