import type { Meta, StoryObj } from '@storybook/react-vite';

import FeaturedSection from './featured-section';

const meta = {
  title: 'pages/showcase/FeaturedSection',
  component: FeaturedSection,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FeaturedSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    featured: [
      {
        showcaseId: 1,
        title: 'Summer Capsule Collection',
        description: '감각적인 여름 스타일을 위한 셀렉션을 만나보세요.',
        imageUrl:
          'https://images.unsplash.com/photo-1529139574466-a303027c1d8b',
        startDate: '2026-05-01',
        endDate: '2026-05-31',
      },
      {
        showcaseId: 2,
        title: 'Minimal Living Archive',
        description: '일상을 채우는 미니멀 라이프 아이템들을 소개합니다.',
        imageUrl:
          'https://images.unsplash.com/photo-1512436991641-6745cdb1723f',
        startDate: '2026-06-01',
        endDate: '2026-06-30',
      },
    ],
  },
};
