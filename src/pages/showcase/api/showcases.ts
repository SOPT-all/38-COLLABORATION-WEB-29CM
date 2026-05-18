import { useInfiniteQuery } from '@tanstack/react-query';

import { API_ENDPOINTS, http } from '@shared/api';

import type { Showcase, ShowcaseSection } from '../types';

const SHOWCASE_FEED_SIZE = 12;

const showcaseQueryKeys = {
  all: ['showcases'] as const,
  feed: (theme?: string) => [...showcaseQueryKeys.all, 'feed', theme] as const,
};

interface ShowcasePageInfo {
  nextCursor: string | null;
  hasNext: boolean;
  size: number;
}

interface ShowcaseFeedResponse {
  featured: Showcase[];
  sections: ShowcaseSection[];
  pageInfo: ShowcasePageInfo;
}

interface ShowcaseFeed {
  featured: Showcase[];
  sections: ShowcaseSection[];
}

interface ShowcaseFeedParams {
  cursor?: string;
  size?: number;
  theme?: string;
}

const getShowcaseFeed = (params?: ShowcaseFeedParams) => {
  return http.get<ShowcaseFeedResponse>(API_ENDPOINTS.SHOWCASES.LIST, {
    params,
  });
};

const mergeSections = (
  sections: ShowcaseSection[],
  nextSections: ShowcaseSection[],
): ShowcaseSection[] => {
  const sectionMap = new Map<number, ShowcaseSection>(
    sections.map((section) => [
      section.sectionId,
      {
        ...section,
        showcases: [...section.showcases],
      },
    ]),
  );

  nextSections.forEach((section) => {
    const existingSection = sectionMap.get(section.sectionId);

    if (existingSection) {
      existingSection.showcases.push(...section.showcases);
    } else {
      sectionMap.set(section.sectionId, {
        ...section,
        showcases: [...section.showcases],
      });
    }
  });

  return Array.from(sectionMap.values());
};

const selectShowcaseFeed = (pages: ShowcaseFeedResponse[]): ShowcaseFeed => {
  const [firstPage] = pages;

  if (!firstPage) {
    return {
      featured: [],
      sections: [],
    };
  }

  return {
    featured: firstPage.featured,
    sections: pages.reduce<ShowcaseSection[]>((mergedSections, page) => {
      return mergeSections(mergedSections, page.sections);
    }, []),
  };
};

export const useShowcaseFeedQuery = (theme?: string) => {
  return useInfiniteQuery({
    queryKey: showcaseQueryKeys.feed(theme),
    queryFn: ({ pageParam }) =>
      getShowcaseFeed({
        cursor: pageParam,
        size: SHOWCASE_FEED_SIZE,
        theme,
      }),
    initialPageParam: undefined as string | undefined,
    getNextPageParam: ({ pageInfo }) =>
      pageInfo.hasNext && pageInfo.nextCursor ? pageInfo.nextCursor : undefined,
    select: ({ pages }) => selectShowcaseFeed(pages),
  });
};
