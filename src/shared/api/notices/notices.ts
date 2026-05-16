import { http, API_ENDPOINTS } from '@shared/api';
import type { NoticesResponse } from '@shared/ui/footer/types';

export const useNotices = {
  queryKey: ['notices'],
  queryFn: () => http.get<NoticesResponse>(API_ENDPOINTS.COMMON.NOTICES),
} as const;
