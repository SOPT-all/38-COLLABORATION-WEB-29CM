import type { InfiniteData } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { HomeMainResponse } from '@pages/home/api/main';
import { patchProductLike } from '@pages/home/api/products';
import { homeQueryKeys } from '@pages/home/api/query-keys';
import type { Product } from '@pages/home/types';
import type { ViewerType } from '@shared/auth/viewer-type';

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

const findHomeMainProduct = (
  data: InfiniteData<HomeMainResponse> | undefined,
  productId: number,
) => {
  for (const page of data?.pages ?? []) {
    for (const section of page.sections) {
      for (const selection of section.selections) {
        const product = selection.products.find(
          (product) => product.productId === productId,
        );

        if (product) {
          return product;
        }
      }
    }
  }

  return undefined;
};

export const useToggleProductLikeMutation = (viewerType: ViewerType) => {
  const queryClient = useQueryClient();
  const queryKey = homeQueryKeys.main(viewerType);

  const { mutate, isPending: isToggleProductLikePending } = useMutation({
    mutationFn: (productId: number) => patchProductLike(productId, viewerType),

    onMutate: async (productId) => {
      await queryClient.cancelQueries({ queryKey });

      const currentData =
        queryClient.getQueryData<InfiniteData<HomeMainResponse>>(queryKey);
      const previousProduct = findHomeMainProduct(currentData, productId);

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

      return { previousProduct };
    },

    onError: (_error, _productId, context) => {
      if (context?.previousProduct) {
        const { previousProduct } = context;

        queryClient.setQueryData<InfiniteData<HomeMainResponse>>(
          queryKey,
          (old) =>
            updateHomeMainProduct(
              old,
              previousProduct.productId,
              () => previousProduct,
            ),
        );
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

  const toggleProductLike = (productId: number) => {
    if (viewerType === 'guest') {
      alert('로그인이 필요한 기능입니다.');
      return;
    }

    mutate(productId);
  };

  return {
    toggleProductLike,
    isToggleProductLikePending,
  };
};
