import type { Meta, StoryObj } from '@storybook/react-vite';
import ShowcaseSectionTitle from './showcase-section-title';

const meta: Meta<typeof ShowcaseSectionTitle> = {
  title: 'Showcase/ShowcaseSectionTitle',
  component: ShowcaseSectionTitle,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof ShowcaseSectionTitle>;

export const Default: Story = {
  args: {
    theme: 'LIFESTYLE',
    title: '당신의 취향에 맞춘 잡화 셀렉션',
  },
};
