import { useState } from 'react';

import { useViewerType } from '@shared/auth/viewer-type';
import { useInfiniteScroll } from '@shared/hooks/use-infinite-scroll';
import FloatingScrollTopButton from '@shared/ui/floating-scroll-top-button/floating-scroll-top-button';

import { useHomeCarouselsQuery } from './api/carousels';
import { useHomeMainQuery } from './api/main';
import BannerCarousel from './components/banner-carousel/banner-carousel';
import MoreLoadButton from './components/btn-more-load/more-load-button';
import HomeMenu from './components/home-menu/home-menu';
import ShortcutSection from './components/home-shortcut/shortcut-section';
import ProductSelectionSection from './components/product-selection-section/product-selection-section';
import { useToggleProductLikeMutation } from './hooks/use-toggle-product-like-mutation';

const HomePage = () => {
  const { data: images } = useHomeCarouselsQuery();
  const [isInfiniteScrollEnabled, setIsInfiniteScrollEnabled] = useState(false);

  const { viewerType } = useViewerType();
  const { toggleProductLike } = useToggleProductLikeMutation(viewerType);
  const {
    data: main,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useHomeMainQuery(viewerType);

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

  return (
    <div className="pb-10">
      <HomeMenu />
      <BannerCarousel images={images} />
      <ShortcutSection shortcuts={main.shortcuts} />
      {main.sections.map((section) => (
        <ProductSelectionSection
          key={section.sectionId}
          section={section}
          onToggleLike={toggleProductLike}
        />
      ))}
      {shouldShowMoreButton && (
        <div className="bg-white-linear relative -mt-100 flex h-144 items-end justify-center pb-12">
          <MoreLoadButton
            onClick={handleClickMore}
            disabled={isFetchingNextPage}
          />
        </div>
      )}
      <div ref={observerTargetRef} className="h-1" />
      <FloatingScrollTopButton />
    </div>
  );
};

export default HomePage;
