import { http, API_ENDPOINTS } from '@shared/api';
import type { NoticesResponse } from '@shared/ui/footer/types';
import { queryOptions, useQuery } from '@tanstack/react-query';

const noticesQueryKeys = {
  all: ['notices'] as const,
};

const getNotices = () => {
  return http.get<NoticesResponse>(API_ENDPOINTS.COMMON.NOTICES);
};

const noticesQueryOptions = queryOptions({
  queryKey: noticesQueryKeys.all,
  queryFn: getNotices,
});

export const useNoticesQuery = () => {
  return useQuery(noticesQueryOptions);
};
