import { queryOptions, useQuery } from '@tanstack/react-query';

import { API_ENDPOINTS, http } from '@shared/api';

import { homeQueryKeys } from './query-keys';

interface CarouselImage {
  carouselId: number;
  imageUrl: string;
  altText: string;
}

interface GetHomeCarouselsResponse {
  carousels: CarouselImage[];
}

export const getHomeCarousels = async (): Promise<CarouselImage[]> => {
  const data = await http.get<GetHomeCarouselsResponse>(
    API_ENDPOINTS.HOME.CAROUSELS,
  );

  return data?.carousels ?? [];
};

export const homeCarouselsQueryOptions = queryOptions({
  queryKey: homeQueryKeys.carousels(),
  queryFn: getHomeCarousels,
  staleTime: 1000 * 60 * 5,
});

export const useHomeCarouselsQuery = () => {
  return useQuery(homeCarouselsQueryOptions);
};
