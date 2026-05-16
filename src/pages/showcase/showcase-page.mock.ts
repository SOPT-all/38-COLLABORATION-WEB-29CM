export const MOCK_SHOWCASE_RESPONSE = {
  featured: [
    {
      showcaseId: 1,
      title: '우리만의 상상 바캉스 로토토베베',
      description: '아이들의 행복한 순간을 담은 로토토베베의 이야기',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200&auto=format&fit=crop',
      startDate: '2026-04-29',
      endDate: '2026-05-12',
    },
    {
      showcaseId: 2,
      title: '아이를 위한 다정한 시작 오브마이온',
      description: '처음 만난 우리 아이를 위한 순간부터의 이야기',
      imageUrl:
        'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1200&auto=format&fit=crop',
      startDate: '2026-04-29',
      endDate: '2026-05-12',
    },
  ],

  sections: [
    {
      sectionId: 1,
      theme: 'LIFESTYLE',
      title: '당신의 취향에 맞춘 잡화 셀렉션',
      showcases: [
        {
          showcaseId: 11,
          title: '전통과 현대가 만나는 순간 루트파인더',
          description: '유연한 실루엣의 여름 컬렉션을 만나보세요.',
          imageUrl:
            'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop',
          startDate: '2026-04-29',
          endDate: '2026-05-12',
        },
        {
          showcaseId: 12,
          title: '나를 완성하는 팔터 애프터아워즈',
          description: '감각적인 여름 스타일링을 제안합니다.',
          imageUrl:
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
          startDate: '2026-04-29',
          endDate: '2026-05-12',
        },
        {
          showcaseId: 13,
          title: '꾸밈없는 자연스러움을 블루브릭',
          description: '자연스럽게 녹아드는 데일리 스타일을 경험해 보세요.',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
          startDate: '2026-04-29',
          endDate: '2026-05-12',
        },
      ],
    },

    {
      sectionId: 2,
      theme: 'LIFESTYLE',
      title: '라이프스타일이 멋진 당신을 위한 쇼케이스',
      showcases: [
        {
          showcaseId: 21,
          title: '가볍게 움직이는 여름 르꼬끄스포르티브',
          description: '여름 시즌에도 돋보이는 스포티 스타일.',
          imageUrl:
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
          startDate: '2026-04-29',
          endDate: '2026-05-12',
        },
        {
          showcaseId: 22,
          title: '함께 입는 행복 비비홈',
          description: '집에서 보내는 시간을 더 사랑스럽게 만드는 컬렉션.',
          imageUrl:
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
          startDate: '2026-04-29',
          endDate: '2026-05-12',
        },
        {
          showcaseId: 23,
          title: '새로운 감각의 데일리 웨어 루트파인더',
          description: '매일의 순간을 감각적으로 완성하는 컬렉션.',
          imageUrl:
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop',
          startDate: '2026-04-29',
          endDate: '2026-05-12',
        },
        {
          showcaseId: 24,
          title: '여름의 온도를 담은 아르토',
          description: '차분한 컬러와 가벼운 실루엣의 썸머 스타일링.',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
          startDate: '2026-04-29',
          endDate: '2026-05-12',
        },
        {
          showcaseId: 25,
          title: '감각적인 순간을 위한 애프터아워즈',
          description: '편안함과 세련됨을 동시에 담은 컬렉션.',
          imageUrl:
            'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop',
          startDate: '2026-04-29',
          endDate: '2026-05-12',
        },
        {
          showcaseId: 26,
          title: '블루브릭의 미니멀 데일리룩',
          description: '불필요한 요소를 덜어낸 미니멀 스타일링.',
          imageUrl:
            'https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=1200&auto=format&fit=crop',
          startDate: '2026-04-29',
          endDate: '2026-05-12',
        },
      ],
    },
  ],

  pageInfo: {
    nextCursor: 'mock-cursor',
    hasNext: true,
    size: 12,
  },
};
