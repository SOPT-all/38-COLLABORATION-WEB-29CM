import type { ViewerType } from '@pages/home/types';

import { API_ENDPOINTS, http } from '@shared/api';

interface ToggleProductLikeResponse {
  productId: number;
  isLiked: boolean;
  likeCount: number;
}

export const patchProductLike = (productId: number, viewerType: ViewerType) => {
  return http.patch<ToggleProductLikeResponse>(
    API_ENDPOINTS.PRODUCTS.LIKE(productId),
    undefined,
    { params: { viewerType } },
  );
};
