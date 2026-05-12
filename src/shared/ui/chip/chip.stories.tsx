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
  render: () => <Chip label="쿠폰" variant="chip" />,
};

export const CtaButton: Story = {
  render: () => <Chip label="FAQ" icon={true} variant="cta" />,
};
