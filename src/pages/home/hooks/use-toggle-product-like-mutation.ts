import type { InfiniteData } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { HomeMainResponse } from '@pages/home/api/main';
import { patchProductLike } from '@pages/home/api/products';
import { homeQueryKeys } from '@pages/home/api/query-keys';
import type { Product, ViewerType } from '@pages/home/types';

import { isAxiosStatusError } from '@shared/api';

const updateHomeMainProduct = (
  data: InfiniteData<HomeMainResponse> | undefined,
  productId: number,
  updater: (product: Product) => Product,
) => {
  if (!data) {
    return data;
  }

  return {
    ...data,
    pages: data.pages.map((page) => ({
      ...page,
      sections: page.sections.map((section) => ({
        ...section,
        selections: section.selections.map((selection) => ({
          ...selection,
          products: selection.products.map((product) =>
            product.productId === productId ? updater(product) : product,
          ),
        })),
      })),
    })),
  };
};

export const useToggleProductLikeMutation = (viewerType: ViewerType) => {
  const queryClient = useQueryClient();
  const queryKey = homeQueryKeys.main(viewerType);

  const { mutate: toggleProductLike, isPending: isToggleProductLikePending } =
    useMutation({
      mutationFn: (productId: number) =>
        patchProductLike(productId, viewerType),

      onMutate: async (productId) => {
        await queryClient.cancelQueries({ queryKey });

        const previousData =
          queryClient.getQueryData<InfiniteData<HomeMainResponse>>(queryKey);

        queryClient.setQueryData<InfiniteData<HomeMainResponse>>(
          queryKey,
          (old) =>
            updateHomeMainProduct(old, productId, (product) => ({
              ...product,
              isLiked: !product.isLiked,
              likeCount: product.isLiked
                ? Math.max(product.likeCount - 1, 0)
                : product.likeCount + 1,
            })),
        );

        return { previousData };
      },

      onError: (error, _productId, context) => {
        if (context?.previousData) {
          queryClient.setQueryData(queryKey, context.previousData);
        }

        if (isAxiosStatusError(error, 403)) {
          alert('로그인이 필요한 기능입니다.');
          return;
        }
      },

      onSuccess: ({ productId, isLiked, likeCount }) => {
        queryClient.setQueryData<InfiniteData<HomeMainResponse>>(
          queryKey,
          (old) =>
            updateHomeMainProduct(old, productId, (product) => ({
              ...product,
              isLiked,
              likeCount,
            })),
        );
      },
    });

  return {
    toggleProductLike,
    isToggleProductLikePending,
  };
};
