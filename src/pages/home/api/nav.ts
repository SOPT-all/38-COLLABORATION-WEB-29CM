import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';

import { API_ENDPOINTS, http } from '@shared/api';

import type { TopCategory } from '../types';
import { homeQueryKeys } from './query-keys';

interface NavResponse {
  categories: TopCategory[];
}

const getNav = () => http.get<NavResponse>(API_ENDPOINTS.COMMON.NAV);

const navQueryOptions = queryOptions({
  queryKey: homeQueryKeys.nav(),
  queryFn: getNav,
  staleTime: 1000 * 60 * 5,
});

export const useNavQuery = () => useSuspenseQuery(navQueryOptions);
