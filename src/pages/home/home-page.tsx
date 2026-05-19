import { useState } from 'react';

import { useInfiniteScroll } from '@shared/hooks/use-infinite-scroll';
import FloatingScrollTopButton from '@shared/ui/floating-scroll-top-button/floating-scroll-top-button';

import { useHomeCarouselsQuery } from './api/carousels';
import { useHomeMainQuery } from './api/main';
import BannerCarousel from './components/banner-carousel/banner-carousel';
import MoreLoadButton from './components/btn-more-load/more-load-button';
import HomeMenu from './components/home-menu/home-menu';
import ShortcutSection from './components/home-shortcut/shortcut-section';
import ProductSelectionSection from './components/product-selection-section/product-selection-section';

const HomePage = () => {
  const [isInfiniteScrollEnabled, setIsInfiniteScrollEnabled] = useState(false);
  const { data: carousels = [] } = useHomeCarouselsQuery();
  const {
    data: main = { sections: [], shortcuts: [] },
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useHomeMainQuery('guest');

  const observerTargetRef = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    enabled: isInfiniteScrollEnabled,
  });

  const shouldShowMoreButton = !isInfiniteScrollEnabled && hasNextPage;

  const handleClickMore = () => {
    setIsInfiniteScrollEnabled(true);
    fetchNextPage();
  };

  if (isLoading) {
    return null;
  }

  if (isError) {
    return <div className="px-9 py-16">데이터를 불러오지 못했습니다.</div>;
  }

  return (
    <>
      <HomeMenu />
      <BannerCarousel images={carousels} />
      <ShortcutSection shortcuts={main.shortcuts} />
      {main.sections.map((section) => (
        <ProductSelectionSection key={section.sectionId} section={section} />
      ))}
      {shouldShowMoreButton && (
        <div className="relative -mt-140 flex h-144 items-end justify-center bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#fff_64%)] pb-12">
          <MoreLoadButton
            onClick={handleClickMore}
            disabled={isFetchingNextPage}
          />
        </div>
      )}
      <div ref={observerTargetRef} className="h-1" />
      <FloatingScrollTopButton />
    </>
  );
};

export default HomePage;
