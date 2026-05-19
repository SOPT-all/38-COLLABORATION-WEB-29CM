import { useEffect, useRef } from 'react';

interface UseInfiniteScrollParams {
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  enabled?: boolean;
}

export const useInfiniteScroll = ({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  enabled = true,
}: UseInfiniteScrollParams) => {
  const observerTargetRef = useRef<HTMLDivElement | null>(null);
  const isFetchingNextPageRef = useRef(isFetchingNextPage);

  useEffect(() => {
    isFetchingNextPageRef.current = isFetchingNextPage;
  }, [isFetchingNextPage]);

  useEffect(() => {
    const observerTarget = observerTargetRef.current;

    if (!enabled || !observerTarget || !hasNextPage) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !isFetchingNextPageRef.current) {
          fetchNextPage();
        }
      },
      {
        rootMargin: '400px 0px',
      },
    );

    observer.observe(observerTarget);

    return () => {
      observer.disconnect();
    };
  }, [enabled, fetchNextPage, hasNextPage]);

  return observerTargetRef;
};
