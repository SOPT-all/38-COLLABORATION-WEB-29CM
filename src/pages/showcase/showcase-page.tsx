import { Suspense } from 'react';

import { useInfiniteScroll } from '@shared/hooks/use-infinite-scroll';
import DeferredComponent from '@shared/ui/deferred-component';
import ShowcaseSkeleton from '@shared/ui/skeleton/showcase-skeleton';

import { useShowcaseFeedQuery } from './api/showcases';
import ContentSection from './components/showcase-content/content-section';
import FeaturedSection from './components/showcase-featured/featured-section';

const ShowcaseContent = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useShowcaseFeedQuery();
  const observerTargetRef = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  const featured = data?.featured ?? [];
  const sections = data?.sections ?? [];
  const isEmpty = featured.length === 0 && sections.length === 0;

  if (isEmpty) {
    return <div className="px-9 py-16">표시할 쇼케이스가 없습니다.</div>;
  }

  return (
    <>
      {featured.length > 0 && <FeaturedSection featured={featured} />}

      {sections.map((section) => (
        <ContentSection key={section.sectionId} section={section} />
      ))}
      <div ref={observerTargetRef} className="h-1" />
    </>
  );
};

const ShowcasePage = () => (
  <Suspense
    fallback={
      <DeferredComponent>
        <ShowcaseSkeleton />
      </DeferredComponent>
    }
  >
    <ShowcaseContent />
  </Suspense>
);

export default ShowcasePage;
