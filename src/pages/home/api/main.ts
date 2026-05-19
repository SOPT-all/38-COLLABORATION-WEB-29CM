import { useInfiniteQuery } from '@tanstack/react-query';

import { homeQueryKeys } from '@pages/home/api/query-keys';
import type { Section, ShortCut } from '@pages/home/types';

import { API_ENDPOINTS, http } from '@shared/api';
import type { ViewerType } from '@shared/auth/viewer-type';

const HOME_MAIN_SIZE = 5;

interface HomePageInfo {
  nextCursor: string | null;
  hasNext: boolean;
  size: number;
}

export interface HomeMainResponse {
  shortcuts: ShortCut[];
  sections: Section[];
  pageInfo: HomePageInfo;
}

interface HomeMainParams {
  viewerType: ViewerType;
  cursor?: string;
  size?: number;
}

const getHomeMain = (params: HomeMainParams) => {
  return http.get<HomeMainResponse>(API_ENDPOINTS.HOME.MAIN, { params });
};

const selectHomeMain = (pages: HomeMainResponse[]) => {
  const [firstPage] = pages;

  if (!firstPage) {
    return {
      shortcuts: [],
      sections: [],
    };
  }

  return {
    shortcuts: firstPage.shortcuts,
    sections: pages.flatMap((page) => page.sections),
  };
};

export const useHomeMainQuery = (viewerType: ViewerType) => {
  return useInfiniteQuery({
    queryKey: homeQueryKeys.main(viewerType),
    queryFn: ({ pageParam }) =>
      getHomeMain({
        viewerType,
        cursor: pageParam,
        size: HOME_MAIN_SIZE,
      }),
    initialPageParam: undefined as string | undefined,
    getNextPageParam: ({ pageInfo }) =>
      pageInfo.hasNext && pageInfo.nextCursor ? pageInfo.nextCursor : undefined,
    select: ({ pages }) => selectHomeMain(pages),
  });
};
