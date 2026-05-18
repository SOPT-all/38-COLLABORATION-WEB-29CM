import { useInfiniteScroll } from '@shared/hooks/use-infinite-scroll';

import { useShowcaseFeedQuery } from './api/showcases';
import ContentSection from './components/showcase-content/content-section';
import FeaturedSection from './components/showcase-featured/featured-section';
<<<<<<< HEAD
import { MOCK_SHOWCASE_RESPONSE } from './showcase-page.mock';
import DeferredComponent from '@shared/ui/deferred-component';
import ContentSkeleton from '@shared/ui/skeleton/content-skeleton';
import { Suspense } from 'react';
=======
>>>>>>> bf051f9ca0b2d4cf70d534f986f7e0fe63ac42cf

const ShowcasePage = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetchingNextPage,
    isLoading,
  } = useShowcaseFeedQuery();
  const observerTargetRef = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  const featured = data?.featured ?? [];
  const sections = data?.sections ?? [];
  const isEmpty = featured.length === 0 && sections.length === 0;

  if (isLoading) {
    return null;
  }

  if (isError) {
    return <div className="px-9 py-16">쇼케이스를 불러오지 못했습니다.</div>;
  }

  if (isEmpty) {
    return <div className="px-9 py-16">표시할 쇼케이스가 없습니다.</div>;
  }

  return (
    <>
      {featured.length > 0 && <FeaturedSection featured={featured} />}

      {sections.map((section) => (
        <Suspense
          key={section.sectionId}
          fallback={
            <DeferredComponent>
              <ContentSkeleton />
            </DeferredComponent>
          }
        >
          <ContentSection section={section} />
        </Suspense>
      ))}

      <div ref={observerTargetRef} className="h-1" />
    </>
  );
};

export default ShowcasePage;
