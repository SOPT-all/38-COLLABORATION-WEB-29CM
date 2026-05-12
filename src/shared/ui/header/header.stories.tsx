import type { Meta, StoryObj } from '@storybook/react-vite';
import Header from './header';

const meta: Meta<typeof Header> = {
  title: 'shared/ui/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    variant: 'fixed-default',
  },
};

export const Scroll: Story = {
  args: {
    variant: 'scroll-aware',
  },
  render: (args) => (
    <div className="h-[200vh] bg-white">
      <Header {...args} />
    </div>
  ),
};
