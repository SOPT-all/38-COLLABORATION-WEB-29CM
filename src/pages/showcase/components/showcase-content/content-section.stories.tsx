import type { Meta, StoryObj } from '@storybook/react-vite';
import ContentSection from './content-section';

const meta: Meta<typeof ContentSection> = {
  title: 'Showcase/ContentSection',
  component: ContentSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ContentSection>;

const mockSections = [
  {
    sectionId: 1,
    theme: 'LIFESTYLE',
    title: '당신의 취향에 맞춘 잡화 셀렉션',
    showcases: [
      {
        showcaseId: 11,
        title: '전통과 현대가 만나는 순간 루트파인더',
        description: '유연한 실루엣의 여름 컬렉션을 만나보세요.',
        imageUrl: 'https://s3.example.com/showcases/11.png',
        startDate: '2026-04-29',
        endDate: '2026-05-12',
      },
      {
        showcaseId: 12,
        title: '자연에서 영감을 받은 리빙 브랜드',
        description: '일상에 자연의 감성을 더하는 오브제 컬렉션.',
        imageUrl: 'https://s3.example.com/showcases/12.png',
        startDate: '2026-04-29',
        endDate: '2026-05-12',
      },
      {
        showcaseId: 13,
        title: '감각적인 주방 소품의 모든 것',
        description: '요리를 더 즐겁게 만드는 디자인 주방용품 모음.',
        imageUrl: 'https://s3.example.com/showcases/13.png',
        startDate: '2026-04-29',
        endDate: '2026-05-12',
      },
      {
        showcaseId: 11,
        title: '전통과 현대가 만나는 순간 루트파인더',
        description: '유연한 실루엣의 여름 컬렉션을 만나보세요.',
        imageUrl: 'https://s3.example.com/showcases/11.png',
        startDate: '2026-04-29',
        endDate: '2026-05-12',
      },
      {
        showcaseId: 12,
        title: '자연에서 영감을 받은 리빙 브랜드',
        description: '일상에 자연의 감성을 더하는 오브제 컬렉션.',
        imageUrl: 'https://s3.example.com/showcases/12.png',
        startDate: '2026-04-29',
        endDate: '2026-05-12',
      },
      {
        showcaseId: 13,
        title: '감각적인 주방 소품의 모든 것',
        description: '요리를 더 즐겁게 만드는 디자인 주방용품 모음.',
        imageUrl: 'https://s3.example.com/showcases/13.png',
        startDate: '2026-04-29',
        endDate: '2026-05-12',
      },
    ],
  },
  {
    sectionId: 2,
    theme: 'FASHION',
    title: '이번 시즌 주목할 패션 브랜드',
    showcases: [
      {
        showcaseId: 21,
        title: '미니멀 무드의 여름 패션',
        description: '단순하지만 세련된 여름 룩을 완성하는 컬렉션.',
        imageUrl: 'https://s3.example.com/showcases/21.png',
        startDate: '2026-04-29',
        endDate: '2026-05-12',
      },
      {
        showcaseId: 22,
        title: '스트리트 감성 가득한 캐주얼',
        description: '편안함과 스타일을 동시에 잡은 데일리 캐주얼.',
        imageUrl: 'https://s3.example.com/showcases/22.png',
        startDate: '2026-04-29',
        endDate: '2026-05-12',
      },
      {
        showcaseId: 23,
        title: '클래식 무드 오피스 룩',
        description: '단정하면서도 트렌디한 오피스 스타일 제안.',
        imageUrl: 'https://s3.example.com/showcases/23.png',
        startDate: '2026-04-29',
        endDate: '2026-05-12',
      },
    ],
  },
];

export const Default: Story = {
  args: {
    sections: mockSections,
  },
};
