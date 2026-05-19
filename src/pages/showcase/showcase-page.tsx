import { useInfiniteScroll } from '@shared/hooks/use-infinite-scroll';
import FloatingScrollTopButton from '@shared/ui/floating-scroll-top-button/floating-scroll-top-button';

import { useShowcaseFeedQuery } from './api/showcases';
import ContentSection from './components/showcase-content/content-section';
import FeaturedSection from './components/showcase-featured/featured-section';

const ShowcasePage = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useShowcaseFeedQuery();

  const observerTargetRef = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  const featured = data.featured;
  const sections = data.sections;
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
      <FloatingScrollTopButton />
    </>
  );
};

export default ShowcasePage;
