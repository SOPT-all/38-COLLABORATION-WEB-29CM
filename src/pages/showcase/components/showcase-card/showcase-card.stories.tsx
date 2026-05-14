import type { Meta, StoryObj } from '@storybook/react-vite';
import ShowcaseCard from './showcase-card';

const meta: Meta<typeof ShowcaseCard> = {
  title: 'Showcase/ShowcaseCard',
  component: ShowcaseCard,
  args: {
    imageUrl:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1600&auto=format&fit=crop',
    title: '우리만의 상상 바캉스 로토토베베',
    description: '아이들의 행복한 순간을 담은 로토토베베의 이야기',
    startDate: '2026-04-29',
    endDate: '2026-05-12',
  },
};

export default meta;
type Story = StoryObj<typeof ShowcaseCard>;

export const Big: Story = {
  args: {
    variant: 'big',
  },
};

export const Small: Story = {
  args: {
    variant: 'small',
  },
};
