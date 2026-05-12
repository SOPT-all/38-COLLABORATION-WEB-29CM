import type { Meta, StoryObj } from '@storybook/react-vite';
import ShowcaseTitle from './showcase-title';

const meta: Meta<typeof ShowcaseTitle> = {
  title: 'Showcase/ShowcaseTitle',
  component: ShowcaseTitle,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof ShowcaseTitle>;

export const Default: Story = {
  args: {
    title: '당신의 취향에 맞춘 잡화 셀렉션',
  },
};
