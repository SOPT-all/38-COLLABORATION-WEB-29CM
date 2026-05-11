// category-button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';

import CategoryButton from './category-button';

const meta = {
  title: 'Shared/CategoryButton',
  component: CategoryButton,
  args: {
    label: 'BEAUTY',
    imageUrl:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
  },
} satisfies Meta<typeof CategoryButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[200px]">
      <CategoryButton {...args} />
    </div>
  ),
};
