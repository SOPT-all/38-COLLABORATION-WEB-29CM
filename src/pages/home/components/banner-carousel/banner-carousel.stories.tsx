import type { Meta, StoryObj } from '@storybook/react-vite';

import BannerCarousel from './banner-carousel';

const meta = {
  title: 'Pages/Home/BannerCarousel',
  component: BannerCarousel,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="h-154">
        <Story />
      </div>
    ),
  ],
  args: {
    interval: 3000,
    images: [
      {
        carouselId: 1,
        imageUrl:
          'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1600&auto=format&fit=crop',
        altText: '예시 옷 이미지',
      },
      {
        carouselId: 2,
        imageUrl:
          'https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1600&auto=format&fit=crop',
        altText: '예시 옷 이미지',
      },
      {
        carouselId: 3,
        imageUrl:
          'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=1600&auto=format&fit=crop',
        altText: '예시 옷 이미지',
      },
    ],
  },
} satisfies Meta<typeof BannerCarousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SingleImage: Story = {
  args: {
    images: [
      {
        carouselId: 1,
        imageUrl:
          'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1600&auto=format&fit=crop',
        altText: '예시 옷 이미지',
      },
    ],
  },
};
