import type { Meta, StoryObj } from '@storybook/react-vite';

import ShortcutButton from './shortcut-button';

const meta = {
  title: 'Home/shortcut/shortcut-button',
  component: ShortcutButton,
  args: {
    label: 'BEAUTY',
    imageUrl:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
  },
} satisfies Meta<typeof ShortcutButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[200px]">
      <ShortcutButton {...args} />
    </div>
  ),
};
