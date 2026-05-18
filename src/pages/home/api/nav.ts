import { queryOptions, useQuery } from '@tanstack/react-query';

import { http, API_ENDPOINTS } from '@shared/api';

import type { MiddleCategory } from '../components/home-mega-menu/types';

export interface TopCategory {
  topCategoryId: number;
  name: string;
  middleCategories: MiddleCategory[];
}

interface NavResponse {
  categories: TopCategory[];
}

const navQueryKeys = {
  all: ['nav'] as const,
};

const getNav = () => http.get<NavResponse>(API_ENDPOINTS.COMMON.NAV);

const navQueryOptions = queryOptions({
  queryKey: navQueryKeys.all,
  queryFn: getNav,
  staleTime: 1000 * 60 * 5,
});

export const useNavQuery = () => useQuery(navQueryOptions);
